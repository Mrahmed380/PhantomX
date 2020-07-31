const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "stats",
    category: "publicAccess",
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
            .setTitle("**MY STATUS**")
            .setColor(0xFAFAFA)
            .setDescription("**ONLINE**")
            .setThumbnail(bot.user.displayAvatarURL())
            .addField("VERSION: ", "```" + "4.7" + "```", true)
            .addField("\nPING: ", "```" + `${Math.round(bot.ws.ping)}` + "```", true)
            .addField("UPTIME: ", "```" + `${dhm(time)}` + "```", true)
            .addField("SERVERS: ", "```" + `${bot.guilds.cache.size}` + "```", true)
            .addField("USERS: ", "```" + `${bot.users.cache.size}` + "```", true)

        message.channel.send(Embed)
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