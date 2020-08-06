const Discord = require("discord.js");

module.exports = {
    name: "bans",
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

        const Emoji1 = message.guild.emojis.cache.find(x => x.name == "1_")
        const Emoji2 = message.guild.emojis.cache.find(x => x.name == "2_")
        const Emoji3 = message.guild.emojis.cache.find(x => x.name == "3_")
        const Emoji4 = message.guild.emojis.cache.find(x => x.name == "4_")
        const Emoji5 = message.guild.emojis.cache.find(x => x.name == "5_")
        const Emoji6 = message.guild.emojis.cache.find(x => x.name == "6_")
        const Emoji7 = message.guild.emojis.cache.find(x => x.name == "7_")
        const Emoji8 = message.guild.emojis.cache.find(x => x.name == "8_")
        const Emoji9 = message.guild.emojis.cache.find(x => x.name == "9_")
        const Emoji10 = message.guild.emojis.cache.find(x => x.name == "10_")

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(Embed1)
        }

        const fetchedLogs = await message.guild.fetchAuditLogs({
            limit: 4,
            type: 'MEMBER_BAN_ADD',
        });

        const banLog = fetchedLogs.entries.first()
        const { target } = banLog

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **BANS**")
            .setDescription("Recent Bans")
            .addField(`${Emoji1} ${target.tag}`, `**${Emoji2} ${"~"}**`)
            .addField(`${Emoji3} ${"~"}`, `**${Emoji4} ${"~"}**`)
            .setColor(InformationColor)

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