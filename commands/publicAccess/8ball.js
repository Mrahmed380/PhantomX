const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    category: "publicAccess",
    run: async (bot, message, args) => {
        function emoji(id) {
            return bot.emojis.cache.get(id).toString();
        }
        const ErrorEmoji = "701898742151905432";
        const SuccessEmoji = "702138405429051415";
        const WarnEmoji = "702089902766161990";
        const NotificationEmoji = "702091124113932336";
        const AdminNotificationEmoji = "702118504819851324";
        const ErrorColor = "0xFF4A4A";
        const SuccessColor = "0x52C235";
        const WarnColor = "0xFFB700";
        const NotificationColor = "0x0098DE";
        const AdminNotificationColor = "0x000000";

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```8ball```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>8ball <message>```", true)
            .addField("DESCRIPTION", "```Randomizes a response from 20 different messages from the real 8ball.```", true)
            .setColor(WarnColor)

        let questions = message.content.slice(bot.prefix.length + 6)

        if (!args[0]) {
            return message.channel.send(Embed1)
        } else {
            let responses = [
                "It is certain.",
                "It is decidedly so.",
                "Without a doubt.",
                "Yes, definitely.",
                "You may rely on it.",
                "As I see it, yes.",
                "Most likely.",
                "Outlook good.",
                "Yes.",
                "Signs point to yes.",
                "Reply hazy, try again.",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again.",
                "Don't count on it.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Very Doubtful."
            ]

            let response = responses[Math.floor(Math.random() * (responses.length) - 1)]

            const Embed2 = new Discord.MessageEmbed()
                .setTitle("**DIGITAL MAGIC 8-BALL**")
                .setDescription("```" + `${response}` + "```")
                .setColor(0x000000)

            message.channel.send(Embed2)
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
}