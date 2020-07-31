const Discord = require("discord.js");

module.exports = {
    name: "emojis",
    category: "publicAccess",
    run: async (bot, message, args) => {
        let Emojis = ""
        let AnimatedEmojis = ""
        let EmojiCount = ""
        let AnimatedEmojiCount = ""
        let TotalEmojis = ""

        function Emoji(id) {
            return bot.emojis.cache.get(id).toString();
        }

        message.guild.emojis.cache.forEach(emoji => {
            TotalEmojis++;
            if (emoji.animated) {
                AnimatedEmojis += Emoji(emoji.id)
            } else {
                EmojiCount++;
                Emojis += Emoji(emoji.id)
            }
        })

        const Embed1 = new Discord.MessageEmbed()
            .setTitle("**EMOJIS**")
            .setDescription(`**ANIMATED EMOJIS:** ${AnimatedEmojiCount}\n${AnimatedEmojis}\n\n**EMOJIS:** ${EmojiCount}\n${Emojis}\n\n**TOTAL EMOJIS:** ${TotalEmojis}`)
            .setColor(0x000000)

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