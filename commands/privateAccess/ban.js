const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "ban",
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
            .addField("COMMAND", "```Ban```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>ban @user <message>```", true)
            .addField("DESCRIPTION", "```Bans a specified user and attaches a message.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument: reason` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Illegal ban.` + "```")
            .setColor(ErrorColor)

        const Embed7 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + `Successfully aborted ban.` + "```")
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

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        const Embed8 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + "**BAN**")
            .setDescription("```" + `Successfully banned ${toBan}.` + "```")
            .setColor(SuccessColor)

        const Embed9 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **BAN**")
            .setDescription("```" + `Verification has expired.` + "```")
            .setFooter("You can no longer interact with the verification prompt.")
            .setColor(ErrorColor)

        if (!toBan) {
            return message.channel.send(Embed1)
        }

        if (toBan.id === message.author.id) {
            return message.channel.send(Embed4)
        }

        if (!toBan.bannable) {
            return message.channel.send(Embed4)
        }

        const Embed5 = new Discord.MessageEmbed()
            .setColor(SuccessColor)
            .setThumbnail(toBan.user.displayAvatarURL())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " BAN")
            .setDescription(stripIndents`**BANNED USER:** ${toBan} (${toBan.id})
            **BANNED BY:** ${message.member} (${message.member.id})
            **REASON:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **BAN AUTHORIZATION**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setColor(InformationColor)
            .setDescription("*Verification expires in 60 seconds.*")
            .addField("USER:", `${toBan}`)
            .setFooter("Only the author can take action.")

        await message.channel.send(promptEmbed).then(async msg => {
            const Emoji1 = message.guild.emojis.cache.find(x => x.name == ":Success_Phantomizer:");
            const emoji = await promptMessage(msg, message.author, 60, ["<:Success_Phantomizer:738675745693630474>", "738675252246085691"]);

            if (emoji === "<:Success_Phantomizer:738675745693630474>") {

                toBan.ban(args.slice(1).join(" "))
                message.channel.send(Embed8)
                    .catch(err => {
                        if (err) {
                            const ConsoleEmbed = new Discord.MessageEmbed()
                                .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                                .setDescription("```" + `${err}` + "```")
                                .setColor(ErrorColor)

                            return message.channel.send(ConsoleEmbed)
                        }
                    });
                const banChannel = message.guild.channels.cache.find(c => c.name === "bans");
                banChannel.send(Embed5);

            } else if (emoji === "738675252246085691") {
                return message.channel.send(Embed7)
            }

            if (!emoji) {
                return message.channel.send(Embed9)
            }

        });
    }
};