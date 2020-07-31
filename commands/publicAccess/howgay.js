const Discord = require("discord.js");

module.exports = {
    name: "howgay",
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

        const Number = 100
        const Random = Math.floor(Math.random() * (Number))

        const Embed2 = new Discord.MessageEmbed()
            .setTitle("**HEALTH INSPECTION**")
            .setDescription("```" + `You are ${Random}% gay!` + "```", true)
            .setColor(0xFAFAFA)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle("**HEALTH INSPECTION**")
            .setDescription("```" + `You are 0% gay.` + "```", true)
            .setColor(0xFAFAFA)

        if (message.author.id == "528675367028916224") {
            return message.channel.send(Embed3)
        } else {
            message.channel.send(Embed2)
        }
    }
}