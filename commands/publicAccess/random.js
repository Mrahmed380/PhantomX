const Discord = require("discord.js");

module.exports = {
    name: "random",
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
        
        const Number = args[0]
        const Random = Math.floor(Math.random() * (Number))

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Random```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>random <number>```", true)
            .addField("DESCRIPTION", "```Picks a number from 0 to the number you have chosen.```", true)
            .setColor(WarnColor)
        
        if (!args[0]) {
            message.channel.send(Embed1)
        }

        message.channel.send(Random)
    }
}