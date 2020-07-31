const Discord = require("discord.js");

module.exports = {
    name: "resetstatus",
    category: "privateAccess",
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

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        if (message.author.id != "528675367028916224") {
            return message.channel.send(Embed1)
        } else {
            bot.user.setActivity("Discord | © Ph4ntomize's Personal Bot")
        }
    }
}