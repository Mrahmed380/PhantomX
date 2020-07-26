const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "stonks",
    category: "publicAccess",
    run: async (bot, message, args) => {
        const subreddits = ["Stonks"];
        const random = subreddits[Math.floor(Math.random() * subreddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor(0xFFFFFF)
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