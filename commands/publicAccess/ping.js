const Discord = require("discord.js");

module.exports = {
    name: "ping",
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

        const Embed = new Discord.MessageEmbed()
            .setThumbnail(bot.user.displayAvatarURL())
            .addField(`**PING **`, "```" + `${Math.round(bot.ws.ping)}` + " ms" + "```", true)
            .setColor(0xFAFAFA)

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