const Discord = require("discord.js");

module.exports = {
    name: "howgay",
    category: "publicAccess",
    run: async (bot, message, args) => {
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
}