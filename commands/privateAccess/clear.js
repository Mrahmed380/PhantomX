const Discord = require("discord.js");

module.exports = {
    name: "clear",
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
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send(Embed1)
        }

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Clear```", true)
            .addField("PERMISSIONS", "```Manage Messages```", true)
            .addField("USAGE", "```>clear <number>```", true)
            .addField("DESCRIPTION", "```Bulk-deletes a specified number of messages.```", true)
            .setColor(InformationColor)

        if (!args[0]) {
            return message.channel.send(Embed2)
        }

        message.channel.bulkDelete(args[0])
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