const Discord = require("discord.js");

module.exports = {
    name: "setstatus",
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
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Setstatus```", true)
            .addField("PERMISSIONS", "```Owner```", true)
            .addField("USAGE", "```>setstatus <message>```", true)
            .addField("DESCRIPTION", "```Sets my status.'.```", true)
            .setColor(WarnColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(Embed2)
        }

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        const Status = message.content.slice(10)

        if (message.author.id != "528675367028916224") {
            return message.channel.send(Embed4)
        } else {
            bot.user.setActivity(Status)
        }
    }
}