const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "kick",
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
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Kick```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>kick @user <message>```", true)
            .addField("DESCRIPTION", "```Kicks a specified user and attaches a message.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing input: Reason` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission: ADMINISTRATOR` + "```")
            .setColor(ErrorColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Illegal kick.` + "```")
            .setColor(ErrorColor)

        const Embed7 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + `Successfully aborted kick.` + "```")
            .setColor(SuccessColor)

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (!args[1]) {
            return message.channel.send(Embed2)
        }

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(Embed3)
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        const Embed8 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + "**KICK COMMAND**")
            .setDescription("```" + `Successfully kicked ${toKick}.` + "```")
            .setColor(SuccessColor)

        const Embed9 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **KICK COMMAND**")
            .setDescription("```" + `Verification has expired.` + "```")
            .setFooter("You can no longer interact with the verification promp.t")
            .setColor(SuccessColor)

        if (!toKick) {
            return message.channel.send(Embed1)
        }

        if (toKick.id === message.author.id) {
            return message.channel.send(Embed4)
        }

        if (!toKick.kickable) {
            return message.channel.send(Embed4)
        }

        const Embed5 = new Discord.MessageEmbed()
            .setColor(AdminNotificationColor)
            .setThumbnail(toKick.user.displayAvatarURL())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " ADMIN NOTIFICATION")
            .setDescription(stripIndents`**KICKED USER:** ${toKick} (${toKick.id})
            **KICKED BY:** ${message.member} (${message.member.id})
            **REASON:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **KICK AUTHORIZATION**")
            .setColor(AdminNotificationColor)
            .setDescription("*Verification expires in 60 seconds.*")
            .addField("USER:", `${toKick}, ${toKick.id}`)
            .setFooter("You must have the ADMINISTRATOR permission.")

        await message.channel.send(promptEmbed).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 60, ["✅", "❎"]);

            if (emoji === "✅") {

                toKick.kick(args.slice(1).join(" "))
                message.channel.send(Embed8)
                    .catch(err => {
                        if (err) {
                            const Embed6 = new Discord.MessageEmbed()
                                .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                                .setDescription("```" + `${err}` + "```")
                                .setColor(AdminNotificationColor)

                            return message.channel.send(Embed6)
                        }
                    });
                const logChannel = message.guild.channels.cache.find(c => c.name === "logs")
                logChannel.send(Embed5);

            } else if (emoji === "❎") {
                return message.channel.send(Embed7)
            }

            if (!emoji) {
                return message.channel.send(Embed9)
            }

        });
    }
};