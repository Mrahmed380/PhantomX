const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "timer",
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

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing input: Time` + "```")
            .setColor(ErrorColor)

        let Timer = args[0];

        if (!args[0]) {
            return message.channel.send(Embed2)
        }

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **TIMER**")
            .setDescription(`Timer set: ` + ms(ms(Timer), { long: true }))
            .setColor(SuccessColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${NotificationEmoji}`)}` + " **ALARM**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .setDescription("Your timer finished")
            .setColor(NotificationColor)

        message.channel.send(Embed3)
        .catch(err => {
            if (err) {
                const ConsoleEmbed = new Discord.MessageEmbed()
                    .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                    .setDescription("```" + `${err}` + "```")
                    .setColor(AdminNotificationColor)

                return message.channel.send(ConsoleEmbed)
            }
        });
        setTimeout(function () {
            message.reply(Embed4)
        }, ms(Timer))
    }
}