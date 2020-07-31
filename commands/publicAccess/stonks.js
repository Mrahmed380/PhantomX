const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "stonks",
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

        const subreddits = ["Stonks"];
        const random = subreddits[Math.floor(Math.random() * subreddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor(0xFAFAFA)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setImage(img)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed)
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