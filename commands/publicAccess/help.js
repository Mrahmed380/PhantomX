const Discord = require("discord.js");
const { trimResultTransformer } = require("common-tags");

module.exports = {
    name: "help",
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
            .setTitle("**HELP**")
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
            .addField("INVITE: https://discord.com/oauth2/authorize?client_id=696017289044164648&permissions=8&scope=bot", `\u200b`)
            .addField("COMMANDS: Say `>cmds` to view all the commands", `\u200b`)
            .addField("PREFIX: `>`", `\u200b`)
            .setColor(0xFAFAFA);

        message.author.send(Embed)
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