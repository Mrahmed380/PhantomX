const Discord = require("discord.js");

module.exports = {
    name: "dm",
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

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Dm```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>dm @user <message>```", true)
            .addField("DESCRIPTION", "```DM's the specified user a message from me.```", true)
            .setColor(WarnColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission: ADMINISTRATOR` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing input: Message` + "```")
            .setColor(ErrorColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + `Successfully DM'd` + "```")
            .setColor(SuccessColor)

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed2)
        }

        if (!user) {
            return message.channel.send(Embed1)
        }

        if (!args.slice(1).join(" ")) {
            return message.channel.send(Embed3)
        }

        const Embed5 = new Discord.MessageEmbed()
            .setTitle(`**Direct Message from ${message.author.tag}**`)
            .setDescription("```" + `${args.slice(1).join(" ")}` + "```")
            .setColor(0xFFFFFA)

        user.user.send(Embed5)
    }
}