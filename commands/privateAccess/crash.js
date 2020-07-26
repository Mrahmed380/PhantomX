const Discord = require("discord.js");

module.exports = {
    name: "crash",
    category: "privateAccess",
    run: async (bot, message, args) => {
        function emoji(id) {
            return bot.emojis.cache.get(id).toString();
        }

        const ErrorEmoji = "701898742151905432";
        const SuccessEmoji = "702138405429051415";
        const WarnEmoji = "702089902766161990";
        const NotificationEmoji = "702091124113932336";
        const AdminNotificationEmoji = "702118504819851324";
        const ErrorColor = "0xFF4A4A";
        const SuccessColor = "0x52C235";
        const WarnColor = "0xFFB700";
        const NotificationColor = "0x0098DE";
        const AdminNotificationColor = "0x000000";

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + "Task failed successfully." + "```")
            .setFooter(`${message.createdAt.toLocaleString()}`)
            .setColor(SuccessColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission: Owner` + "```")
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
                            .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                            .setDescription("```" + `${err}` + "```")
                            .setColor(AdminNotificationColor)

                        return message.channel.send(ConsoleEmbed)
                    }
                });
        }
    }
}