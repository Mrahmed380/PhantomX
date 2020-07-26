const Discord = require("discord.js");

module.exports = {
    name: "spam",
    category: "privateAccess",
    run: async (bot, message, args) => {
        function emoji(id) {
            return bot.emojis.cache.get(id).toString();
        }

        const ErrorEmoji = "701898742151905432";
        const SuccessEmoji = "702138405429051415";
        const WarnEmoji = "702089902766161990";
        const NotificationEmoji = "702091124113932336";
        const AdminNotificationEmoji = "702118504819851324";
        const ErrorColor = "0xFF4A4A";
        const SuccessColor = "0x52C235";
        const WarnColor = "0xFFB700";
        const NotificationColor = "0x0098DE";
        const AdminNotificationColor = "0x000000";

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