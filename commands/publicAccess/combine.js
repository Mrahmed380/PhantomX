const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "combine",
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
            .addField("COMMAND", "```Combine```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>combine @user @user```", true)
            .addField("DESCRIPTION", "```Combines 2 people's names.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument: user` + "```")
            .setColor(ErrorColor)

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (!args[1]) {
            return message.channel.send(Embed2)
        }

        const FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const FirstUsername = FirstUser.user.username

        const SecondUser = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        const SecondUsername = SecondUser.user.username

        const FirstUsernameSplit = FirstUsername.slice(FirstUsername.length / 2).join("")

        if (!FirstUser) {
            return message.channelsend(Embed2)
        }

        if (!FirstUser) {
            return message.channelsend(Embed2)
        }

        const Embed = new Discord.MessageEmbed()
            .setTitle("NAME COMBINING MACHINE")
            .setDescription(`${FirstUser} + ${SecondUser} = ${FirstUsername}${SecondUsername}`)
            .setColor(0xFAFAFA)

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
};