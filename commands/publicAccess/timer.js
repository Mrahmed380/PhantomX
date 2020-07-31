const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "timer",
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

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing input: Time` + "```")
            .setColor(ErrorColor)

        let Timer = args[0];

        if (!args[0]) {
            return message.channel.send(Embed2)
        }

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **TIMER**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setDescription(`Timer set: ` + ms(ms(Timer), { long: true }))
            .setColor(SuccessColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${NotificationEmoji}`)}` + " **ALARM**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setDescription("Your timer finished")
            .setColor(NotificationColor)

        message.channel.send(Embed3)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(AdminNotificationColor)

                    return message.channel.send(ConsoleEmbed)
                }
            });
        setTimeout(function () {
            message.reply(Embed4)
        }, ms(Timer))
    }
}