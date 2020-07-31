const Discord = require("discord.js");
const dateFormat = require("dateformat");

module.exports = {
    name: "track",
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

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Track```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>track @user```", true)
            .addField("DESCRIPTION", "```A whois command - Displays a user information.```", true)
            .setColor(InformationColor)

        if (!args[0]) {
            return message.channel.send(Embed3)
        }

        let userToCheck = message.mentions.users.first();

        if (!userToCheck) {
            userToCheck = message.author
        }

        const Embed2 = new Discord.MessageEmbed()
            .setAuthor("USER INFORMATION", `${userToCheck.displayAvatarURL()}`)
            .setColor(0xFAFAFA)
            .setTimestamp()
            .addField(`NICKNAME`, "```" + `${userToCheck.nickname || "none"}` + "```", true)
            .addField(`USER ID`, "```" + `${userToCheck.id}` + "```", true)
            .addField(`USER TAG`, "```" + `${userToCheck.tag}` + "```", true)
            .addField(`STATUS`, "```" + `${userToCheck.presence.status}` + "```", true)
            .addField(`REGISTRATION DATE`, "```" + `${dateFormat(userToCheck.createdAt, "dd/mm/yy")}` + "```", true)

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