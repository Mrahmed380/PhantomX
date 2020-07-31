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
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMANDS LIST**")
            .addField("8ball", "**cmds**", true)
            .addField("emojis", "**help**", true)
            .addField("howgay", "**joindate**", true)
            .addField("members", "**personality**", true)
            .addField("ping", "**random**", true)
            .addField("rep", "**rps**", true)
            .addField("serverinfo", "**servers**", true)
            .addField("stats", "**stonks**", true)
            .addField("timer", "**track**", true)
            .addField("uptime", "**version**", true)
            .addField("weather", `\u200b`, true)
            .setFooter("Page 1/2")
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMANDS LIST**")
            .addField("announce", "**ban**", true)
            .addField("clean", "**clear**", true)
            .addField("crash", "**dm**", true)
            .addField("kick", "**report**", true)
            .addField("resetstatus", "**role**", true)
            .addField("setstatus", "**rps**", true)
            .addField("serverinfo", "**slowmode**", true)
            .addField("spam", "**vote**", true)
            .setFooter("Page 2/2")
            .setColor(InformationColor)

        const time = 1000 * 1000

        const msg = await message.channel.send(Embed1).then(async msg => {
            const Emoji = await promptMessage(msg, message.author, time, ["➡️"]);

            if (Emoji === "➡️") {

                msg.reactions.removeAll().then(async msg => {
                    msg.edit(Embed2)
                }, 100)
            }
        });

        const msg2 = await message.channel.send(Embed1).then(async msg => {
            const Emoji = await promptMessage(msg2, message.author, time, ["⬅️"]);

            if (Emoji === "⬅️") {

                msg2.reactions.removeAll().then(async msg => {
                    msg.edit(Embed1)
                }, 100)
            }
        });
    }
}