const Discord = require("discord.js");

module.exports = {
    name: "type",
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
            .addField("COMMAND", "```Type```", true)
            .addField("PERMISSIONS", "```MANAGE_MESSAGES```", true)
            .addField("USAGE", "```>type <message>```", true)
            .addField("DESCRIPTION", "```Repeats whatever the user says in Roblox Camping style.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send(Embed2)
        }

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(message.author.username)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setDescription(args.join(" ")[0])
            .setColor(0xFAFAFA)

        message.delete()
        const msg = await message.channel.send(Embed3)
        let cur = "";
        args.join(" ").split("").map(async (d, i) => {
            cur += d;
            const Embed4 = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
                .setDescription(cur)
                .setColor(0xFAFAFA)

            await msg.edit(Embed4)
        })
    }
}