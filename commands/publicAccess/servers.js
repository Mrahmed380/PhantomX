const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "servers",
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

        var time = bot.uptime

        function dhm(ms) {
            days = Math.floor(ms / (24 * 60 * 60 * 1000));
            daysms = ms % (24 * 60 * 60 * 1000);
            hours = Math.floor((daysms) / (60 * 60 * 1000));
            hoursms = ms % (60 * 60 * 1000);
            minutes = Math.floor((hoursms) / (60 * 1000));
            minutesms = ms % (60 * 1000);
            sec = Math.floor((minutesms) / (1000));
            return days + "d " + hours + "h " + minutes + "m " + sec + "s";
        }

        const Embed = new Discord.MessageEmbed()
            .setColor(0xFFFAFA)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .addField("SERVERS: ", "```" + `${bot.guilds.cache.size}` + "```", true)

        message.channel.send(Embed)
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