const Discord = require("discord.js");

module.exports = {
    name: "crash",
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
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + "Task failed successfully." + "```")
            .setFooter(`${message.createdAt.toLocaleString()}`)
            .setColor(SuccessColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(Embed2)
        }

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        if (message.author.id != "528675367028916224") {
            return message.channel.send(Embed3)
        }

        try {
            await message.channel.send(Embed1)
            console.log("✖️ System Terminated")
            process.exit()
        } catch (e) {
            const ConsoleEmbed = new Discord.MessageEmbed()
                .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                .setDescription("```" + `${e.message}` + "```")
                .setColor(AdminNotificationColor)

            message.channel.send(ConsoleEmbed)
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