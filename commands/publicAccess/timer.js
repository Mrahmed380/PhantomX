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

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Timer```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>timer <time>```", true)
            .addField("DESCRIPTION", "```Creates a timer. The time should be something like '10s'.```", true)
            .setColor(InformationColor)

        let Timer = args[0];

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **TIMER**")
            .setAuthor(`${message.author.displayAvatarURL()}`, "TIMER")
            .setDescription(`Timer set: ` + ms(ms(Timer), { long: true }))
            .setColor(SuccessColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **TIMER**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setDescription(`Your timer ${ms(ms(Timer), { long: true })} of has finished.`)
            .setColor(InformationColor)

        message.channel.send(Embed2)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(ErrorColor)

                    return message.channel.send(ConsoleEmbed)
                }
            });
        setTimeout(function () {
            message.reply(Embed3)
        }, ms(Timer))
    }
}