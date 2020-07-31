const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "version",
    category: "publicAccess",
    run: async (bot, message, args) => {

        const Embed = new Discord.MessageEmbed()
            .setTitle("**VERSION**")
            .setThumbnail(bot.user.displayAvatarURL())
            .addField(`**VERSION: **`, "```" + "4.7" + "```")
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