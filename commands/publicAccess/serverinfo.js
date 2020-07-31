const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "publicAccess",
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

        const Embed = new Discord.MessageEmbed()
            .setDescription("**SERVER INFORMATION**")
            .setColor(0x000000)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .addField("**SERVER NAME:**", "```" + message.guild.name + "```", true)
            .addField("**SERVER OWNER:**", "```" + message.guild.owner.user.tag + "```", true)
            .addField("**SERVER REGION:**", "```" + message.guild.region + "```", true)
            .addField("**CHANNEL COUNT:**", "```" + message.guild.channels.cache.filter(ch => ch.type == "text").size + "```", true)
            .addField("**CATEGORY COUNT:**", "```" + message.guild.channels.cache.filter(ch => ch.type == "category").size + "```", true)
            .addField("**VOICE CHANNEL COUNT:**", "```" + message.guild.channels.cache.filter(ch => ch.type == "voice").size + "```", true)
            .addField("**CREATED ON:**", "```" + new Intl.DateTimeFormat("en-GB").format(message.guild.createdTimestamp) + "```", true)
            .addField("**TOTAL MEMBERS:**", "```" + message.guild.memberCount + "```", true);

        message.channel.send(Embed)
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