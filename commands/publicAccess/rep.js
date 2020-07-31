const Discord = require("discord.js");

module.exports = {
    name: "rep",
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

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Say```", true)
            .addField("PERMISSIONS", "```ADMINISTRATOR```", true)
            .addField("USAGE", "```>say <message>```", true)
            .addField("DESCRIPTION", "```Repeats whatever the user says.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed2)
        }

        let BotMessage = args.join(" ")
        message.delete().catch();
        message.channel.send(BotMessage)
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