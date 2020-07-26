const Discord = require("discord.js");

module.exports = {
    name: "howgay",
    category: "publicAccess",
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

        const Number = 100
        const Random = Math.floor(Math.random() * (Number))

        const Embed2 = new Discord.MessageEmbed()
            .setTitle("**HEALTH INSPECTION**")
            .setDescription("```" + `You are ${Random}% gay!` + "```", true)
            .setColor(SuccessColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle("**HEALTH INSPECTION**")
            .setDescription("```" + `You are 0% gay.` + "```", true)
            .setColor(AdminNotificationColor)

        if (message.author.id == "528675367028916224") {
            return message.channel.send(Embed3)
        } else {
            message.channel.send(Embed2)
        }
    }
}