const Discord = require("discord.js");

module.exports = {
    name: "ping",
    category: "publicAccess",
    run: async (bot, message, args) => {

        const Embed = new Discord.MessageEmbed()
            .setColor(0xFFFAFA)
            .addField(`**PING: **`, "```" + `${Math.round(bot.ws.ping)}` + " ms" + "```", true)

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