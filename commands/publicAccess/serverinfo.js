const Discord = require('discord.js');

module.exports = {
    name: "serverinfo",
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

        const Embed = new Discord.MessageEmbed()
            .setDescription("**SERVER INFORMATION**")
            .setColor(0xFAFAFA)
            .setThumbnail(bot.imageURL)
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
                        .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(ErrorColor)

                    return message.channel.send(ConsoleEmbed)
                }
            });
    }
}