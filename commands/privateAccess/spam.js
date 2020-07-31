const Discord = require("discord.js");

module.exports = {
    name: "spam",
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
            .addField("COMMAND", "```Spam```", true)
            .addField("PERMISSIONS", "```Senpai```", true)
            .addField("USAGE", "```>spam <message>```", true)
            .addField("DESCRIPTION", "```Spams an infinite amount of messages. Can only be stopped by resetting me.```", true)
            .setColor(WarnColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission: ADMINISTRATOR` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + `Commands locked out. Manually shut down bot to override system.` + "```")
            .setColor(SuccessColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed2)
        }

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (message.author.id != "528675367028916224") {
            return message.channel.send(Embed4)
        } else {
            message.channel.send(Embed3)

            let Message = args.join(" ")
            bot.spam = Message
        }
    }
}