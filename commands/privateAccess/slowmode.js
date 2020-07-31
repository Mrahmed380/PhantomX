const Discord = require("discord.js");

module.exports = {
    name: "slowmode",
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
            .addField("COMMAND", "```Slowmode```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>slowmode <number>```", true)
            .addField("DESCRIPTION", "```Sets a slowmode with the specified seconds. Alternate command is '>cooldown'.```", true)
            .setColor(InformationColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission.` + "```")
            .setColor(ErrorColor)

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed3)
        }

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (isNaN(args[0])) {
            return message.channel.send(Embed2)
        }

        message.channel.setRateLimitPerUser(args[0])

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SLOWMODE COMMAND**")
            .setDescription("```" + `Successfully enabled slowmode: ${args[0]} second(s)` + "```")
            .setColor(SuccessColor)

        message.channel.send(Embed4)
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
}