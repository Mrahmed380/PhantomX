const Discord = require("discord.js");

module.exports = {
    name: "chance",
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

        const Number = args[0]
        const Random = Math.floor(Math.random() * (Number))

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Chance```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>random <number>```", true)
            .addField("DESCRIPTION", "```Picks a number from 0 to the number you have chosen.```", true)
            .setColor(InformationColor)

        if (!args[0]) {
            message.channel.send(Embed1)
        } else {
            const Embed2 = new Discord.MessageEmbed()
                .setTitle("RANDOMIZER")
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
                .addField("YOUR RANDOM NUMBER", "```" + `${Random}` + "```")
                .setFooter(`Randomized from 0-${args[0]}`)
                .setColor(0xFAFAFA)

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