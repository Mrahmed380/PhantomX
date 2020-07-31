const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "uptime",
    category: "publicAccess",
    run: async (bot, message, args) => {
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
            .setTitle("**UPTIME**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setColor(0xFAFAFA)
            .addField(`**UPTIME: **`, "```" + `${dhm(time)}` + "```")

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