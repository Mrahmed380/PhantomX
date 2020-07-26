const Discord = require("discord.js");

module.exports = {
    name: "key",
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

        const Embed1 = new Discord.MessageEmbed()
            .setTitle("**COLOR + EMOJI CODES**")
            .setColor(0xFFFAFA)
            .addField(`${emoji(`${ErrorEmoji}`)} Red`, "```" + `Error` + "```")
            .addField(`${emoji(`${SuccessEmoji}`)} Green`, "```" + `Success` + "```")
            .addField(`${emoji(`${WarnEmoji}`)} Yellow`, "```" + `Warning` + "```")
            .addField(`${emoji(`${NotificationEmoji}`)} Blue`, "```" + `Notification` + "```")
            .addField(`${emoji(`${AdminNotificationEmoji}`)} Black`, "```" + `Admin Prompt` + "```")
            .addField("White", "```" + `Other` + "```")

        message.channel.send(Embed1)
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