const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
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
            .addField("COMMAND", "```Report```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE", "```>report @user <message>```", true)
            .addField("DESCRIPTION", "```Sends an embed to the 'reports' channel and attaches a message.```", true)
            .setColor(InformationColor)

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing input: reason` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permissions.` + "```")
            .setColor(ErrorColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing channel: "reports"/"🔒│reports"` + "```")
            .setColor(ErrorColor)

        const Embed5 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SUCCESS**")
            .setDescription("```" + `Successfully reported ${rMember}.` + "```")
            .setColor(SuccessColor)

        const Embed7 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Illegal report.` + "```")
            .setColor(ErrorColor)

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(Embed3)
        }

        if (!rMember) {
            return message.channel.send(Embed1);
        }

        if (!args[0]) {
            return message.channel.send(Embed2);
        }

        if (rMember.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(Embed7);
        }

        const Channel = message.guild.channels.cache.find(c => c.name === "reports" || c.name === "🔒│reports");

        if (!Channel) {
            return message.channel.send(Embed4);
        }

        message.channel.send(Embed5)

        const Embed6 = new Discord.MessageEmbed()
            .setAuthor("ADMIN REPORT", rMember.user.displayAvatarURL())
            .setThumbnail(message.guild.iconURL())
            .setTimestamp()
            .setColor(0x000000)
            .setDescription(stripIndents`MEMBER: ${rMember} (${rMember.user.id})
            REPORTED BY: ${message.member}, ${message.member.user.id}
            REPORTED IN: ${message.channel}
            REASON: ${args.slice(1).join(" ")}`);

        return Channel.send(Embed6)
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