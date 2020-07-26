const Discord = require("discord.js");
const dateFormat = require("dateformat");

module.exports = {
    name: "track",
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

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Track```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>track @user```", true)
            .addField("DESCRIPTION", "```A whois command; Displays user information.```", true)
            .setColor(WarnColor)

        if (!args[0]) {
            return message.channel.send(Embed3)
        }

        let userToCheck = message.mentions.users.first();

        if (!userToCheck) {
            userToCheck = message.author
        }

        const Embed2 = new Discord.MessageEmbed()
            .setAuthor("USER INFORMATION", `${userToCheck.displayAvatarURL()}`)
            .setColor(0x000000)
            .setTimestamp()
            .addField(`NICKNAME`, "```" + `${userToCheck.nickname || "none"}` + "```", true)
            .addField(`USER ID`, "```" + `${userToCheck.id}` + "```", true)
            .addField(`USER TAG`, "```" + `${userToCheck.tag}` + "```", true)
            .addField(`ACCOUNT STATUS`, "```" + `${userToCheck.presence.status}` + "```", true)
            .addField(`ACCOUNT CREATION DATE`, "```" + `${dateFormat(userToCheck.createdAt, "dd/mm/yy")}` + "```", true)

        message.channel.send(Embed2)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(AdminNotificationColor)

                    return message.channel.send(ConsoleEmbed)
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
            });
    }
}