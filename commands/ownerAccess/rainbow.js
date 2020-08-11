const Discord = require("discord.js");

module.exports = {
    name: "rainbow",
    category: "ownerAccess",
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
            .addField("COMMAND", "```Rainbow```", true)
            .addField("PERMISSIONS", "```Owner```", true)
            .addField("USAGE", "```>rainbow <rolename>```", true)
            .addField("DESCRIPTION", "```Changes a role's color every 10 seconds (Bannable).'.```", true)
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `Could not find role.` + "```")
            .setColor(ErrorColor)

        if (!args[0]) {
            return message.channel.send(Embed1)
        }

        if (message.author.id != "528675367028916224") {
            return message.channel.send(Embed2)
        } else {
            let Role = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => r.name == args[1])
            const MaxHex = 999999
            const RandomHex = Math.floor(Math.random() * (MaxHex))
            
            if(!args[0]) {
                return message.channel.send(Embed3)
            }

            setInterval(() => {
                Role.edit({
                    color: `0x${RandomHex}`
                })
            }, 10000);
        }
    }
} 