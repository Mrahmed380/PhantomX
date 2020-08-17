const Discord = require("discord.js");

module.exports = {
    name: "anime",
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

        const GIF = [
            "https://cdn.weeb.sh/images/Sy1-ML7vW.gif",
            "https://cdn.weeb.sh/images/BJogMImDW.gif",
            "https://cdn.weeb.sh/images/B1jfzIXDZ.gif",
            "https://cdn.weeb.sh/images/SJ7ng1tPZ.gif",
            "https://cdn.weeb.sh/images/r1OUjlycZ.gif",
            "https://cdn.weeb.sh/images/ryhfGI7vZ.gif",
            "https://cdn.weeb.sh/images/ByCMNJ2qG.gif",
            "https://cdn.weeb.sh/images/ryBb41Kvb.gif",
            "https://cdn.weeb.sh/images/HkIclytPW.gif",
            "https://cdn.weeb.sh/images/ByJ85ktDb.gif",
            "https://cdn.weeb.sh/images/rJa-zUmv-.gif",
            "https://cdn.weeb.sh/images/By5ZNktDW.gif",
            "https://cdn.weeb.sh/images/B1NWGUmvb.gif",
            "https://cdn.weeb.sh/images/rJUujgJ5Z.gif",
            "https://cdn.weeb.sh/images/HyIdvYp5-.gif",
            "https://cdn.weeb.sh/images/BJ-d8c6dM.gif",
            "https://cdn.weeb.sh/images/rJ7ZNyKDW.gif",
            "https://cdn.weeb.sh/images/HkpQ7JYDW.gif",
            "https://cdn.weeb.sh/images/SyIbfImDb.gif",
            "https://cdn.weeb.sh/images/SkgjHcyYDZ.gif",
            "https://cdn.weeb.sh/images/rJtHqkYw-.gif",
            "https://cdn.weeb.sh/images/SJYxNJKDZ.gif",
            "https://cdn.weeb.sh/images/rJCVcytDW.gif",
            "https://cdn.weeb.sh/images/rJgCSpp_wb.gif",
            "https://cdn.weeb.sh/images/HJAx4ktD-.gif",
            "https://cdn.weeb.sh/images/ryuxzI7DW.gif",
            "https://cdn.weeb.sh/images/rkXImUQDW.gif",
            "https://cdn.weeb.sh/images/BySrd8QD-.gif",
            "https://cdn.weeb.sh/images/r1O8QUmvb.gif",
        ];
        const RandomGIF = GIF[Math.floor(Math.random() * GIF.length)];

        const Embed = new Discord.MessageEmbed()
            .setColor(0xFAFAFA)
            .setImage(RandomGIF)

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