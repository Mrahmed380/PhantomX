const Discord = require("discord.js");

module.exports = {
    name: "setstatus",
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