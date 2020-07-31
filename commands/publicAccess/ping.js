const Discord = require("discord.js");

module.exports = {
    name: "ping",
    category: "publicAccess",
    run: async (bot, message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setThumbnail(bot.user.displayAvatarURL())
            .addField(`**PING **`, "```" + `${Math.round(bot.ws.ping)}` + " ms" + "```", true)
            .setColor(0xFAFAFA)

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