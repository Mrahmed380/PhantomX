const Discord = require("discord.js");

module.exports = {
    name: "role",
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

        const EmbedPerms = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing permission: ADMINISTRATOR` + "```")
            .setColor(ErrorColor)

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(EmbedPerms)
        }

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Role```", true)
            .addField("PERMISSIONS", "```Administrator```", true)
            .addField("USAGE 1", "```>role create <color> <name>```", true)
            .addField("USAGE 2", "```>role delete <name>```", true)
            .addField("DESCRIPTION", "```Creates or deletes a role. The color should be in this format: '0x123456'.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Maximnum Hex color limit reached` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Hex number too small` + "```")
            .setColor(ErrorColor)

        const Embed4 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument: color` + "```")
            .setColor(ErrorColor)

        const Embed5 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Missing argument: role name` + "```")
            .setColor(ErrorColor)

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (args[0].toLowerCase() == "create") {
            let rName = message.content.split(`${bot.prefix}role create `).join("")
            let rColor;

            args.forEach(arg => {
                if (arg.startsWith("0x")) {
                    rColor = arg
                }
            })

            if (!rName) {
                return message.channel.send(Embed1)
            }

            if (!rColor) {
                return message.channel.send(Embed4)
            }

            if (rColor >= 16777215) return message.channel.send(Embed2)
            if (rColor <= 0) return message.channel.send(Embed3)

            rName = rName.replace(`${rColor}`, ``)

            let rNew = await message.guild.roles.create({
                data: {
                    name: rName,
                    color: rColor,
                }
            })
            const Embed7 = new Discord.MessageEmbed()
                .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SUCCESS**")
                .setColor(SuccessColor)
                .setDescription(`Successfully created the role: ${rName}`)
                .setFooter(`ROLE ID: ${rNew.id}`)

            message.channel.send(Embed7)
                .catch(err => {
                    if (err) {
                        const ConsoleEmbed = new Discord.MessageEmbed()
                            .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                            .setDescription("```" + `${err}` + "```")
                            .setColor(AdminNotificationColor)

                        return message.channel.send(ConsoleEmbed)
                    }
                });
        } else if (args[0].toLowerCase() == 'delete') {
            let roleDelete = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name == args[1])
            if (!roleDelete) return message.channel.send(Embed5)
            roleDelete.delete();

            const Embed7 = new Discord.MessageEmbed()
                .setTitle(`${emoji(`${SuccessEmoji}`)}` + " **SUCCESS**")
                .setColor(SuccessColor)
                .setDescription(`Successfully deleted the role: ${roleDelete.name}`)
                .setFooter(`ROLE ID: ${roleDelete.id}`)

            message.channel.send(Embed7)
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