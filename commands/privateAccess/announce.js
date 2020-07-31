const Discord = require("discord.js");

module.exports = {
    name: "announce",
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
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Announce```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>announce #channel <message>```", true)
            .addField("DESCRIPTION", "```Creates an announcement in the specified channel.```", true)
            .setColor(InformationColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument.` + "```")
            .setColor(ErrorColor)

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed1)
        }

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

        if (!channel) {
            return message.channel.send(Embed2)
        }

        let announcement = message.content.slice(bot.prefix.length + 10 + channel.id.length + 3)

        if (!announcement) {
            return message.channel.send(Embed3)
        }

        const Embed4 = new Discord.MessageEmbed()
            .setTitle("**ANNOUNCEMENT**")
            .setDescription(`${announcement}`)
            .setFooter(`Created by ${message.author.username}.`)
            .setColor(0xFAFAFA)

        let msg = await bot.channels.cache.get(channel.id).send(Embed4)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(AdminNotificationColor)

                    return message.channel.send(ConsoleEmbed)
                }
            });
    }
}