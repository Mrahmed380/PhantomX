const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "cmds",
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

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```8ball```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>8ball <message>```", true)
            .addField("DESCRIPTION", "```Randomizes a response from 20 different messages from the real 8ball.```", true)
            .setColor(InformationColor)
        const Embed2 = new Discord.MessageEmbed()

        const time = 1000 * 1000

        const msg = await message.channel.send(Embed1).then(async msg => {
            const Emoji = await promptMessage(msg, message.author, time, ["➡️"]);

            if (Emoji === "➡️") {
                let msg = await message.channel.send(Embed2);

                message.reactions.removeAll().then(async msg => {
                    message.edit(Embed2)
                }, 100)
            }
        });
    }
}