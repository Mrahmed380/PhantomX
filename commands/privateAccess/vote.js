const Discord = require("discord.js");

module.exports = {
    name: "vote",
    category: "privateAccess",
    run: async (bot, message, args) => {
        function emoji(id) {
            return bot.emojis.cache.get(id).toString();
        }

        const ErrorEmoji = "738675252246085691"
        const ErrorColor = "0xFF5858"

        const SuccessEmoji = "738675745693630474"
        const SuccessColor = "0x49CE4A"

        const InformationEmoji = "738675785098854480"
        const InformationColor = "0x009DF9"

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Vote```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>vote #channel <message>```", true)
            .addField("DESCRIPTION", "```Sends an embed to the specified channel and attaches a message.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument: channel` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument: message` + "```")
            .setColor(ErrorColor)

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed1)
        }
        if (!channel) {
            return message.channel.send(Embed2)
        }

        let question = message.content.slice(bot.prefix.length + 5 + channel.id.length + 3)

        if (!question) {
            return message.channel.send(Embed3)
        }

        const Embed4 = new Discord.MessageEmbed()
            .setTitle("**POLL**")
            .setDescription("```" + question + "```")
            .setFooter(`${message.author.username} created this poll.`)
            .setColor(0xFAFAFA)

        let msg = await bot.channels.cache.get(channel.id).send(Embed4)
        await msg.react(SuccessEmoji)
        await msg.react(ErrorEmoji)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(ErrorColor)

                    return message.channel.send(ConsoleEmbed)
                        .catch(err => {
                            if (err) {
                                const ConsoleEmbed = new Discord.MessageEmbed()
                                    .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                                    .setDescription("```" + `${err}` + "```")
                                    .setColor(ErrorColor)

                                return message.channel.send(ConsoleEmbed)
                            }
                        });
                }
            });
    }
}