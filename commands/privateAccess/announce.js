const Discord = require("discord.js");

module.exports = {
    name: "announce",
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
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission: ADMINISTRATOR` + "```")
            .setColor(ErrorColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Announce```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>announce #channel <message>```", true)
            .addField("DESCRIPTION", "```Creates an announcement in the specified channel.```", true)
            .setColor(WarnColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing input: Message` + "```")
            .setColor(ErrorColor)

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(Embed1)
        }

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

        if (!channel) {
            return message.channel.send(Embed2)
        }

        let announcement = message.content.slice(bot.prefix.length + 10 + channel.id.length + 3)

        if (!announcement) {
            return message.channel.send(Embed3)
        }

        const Embed4 = new Discord.MessageEmbed()
            .setTitle("**ANNOUNCEMENT**")
            .setDescription("```" + `${announcement}` + "```")
            .setFooter(`${message.author.username} created this announcement.`)
            .setColor(0x000000)

        let msg = await bot.channels.cache.get(channel.id).send(Embed4)
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