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
            .setDescription("Required Permissions: NONE")
            .addField("8ball", "**anime**", true)
            .addField("chance", "**cmds**", true)
            .addField("combine", "**help**", true)
            .addField("help", "**howgay**", true)
            .addField("joindate", "**members**", true)
            .addField("personality", "**ping**", true)
            .addField("rps", "**servers**", true)
            .addField("servers", "**stats**", true)
            .addField("stonks", "**timer**", true)
            .addField("track", "**uptime**", true)
            .addField("version", `**weather**`, true)
            .setFooter("Page 1/3")
            .setColor(InformationColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMANDS LIST**")
            .setDescription("Required Permissions: MANAGE_MESSAGES")
            .addField("announce", "**ban**", true)
            .addField("bans", "**clean**", true)
            .addField("clear", "**dm**", true)
            .addField("kick", "**rep**", true)
            .addField("report", "**role**", true)
            .addField("slowmode", "**vote**", true)
            .setFooter("Page 2/3")
            .setColor(InformationColor)

        const Embed3 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **COMMANDS LIST**")
            .setDescription("Required Permissions: CREATOR")
            .addField("crash", "**createserver**", true)
            .addField("resetstatus", "**setstatus**", true)
            .addField("type", "vote", true)
            .setFooter("Page 3/3")
            .setColor(InformationColor)

        const time = 1000 * 1000

        await message.channel.send(Embed1).then(async msg => {
            const Emoji = await promptMessage(msg, message.author, time, ["➡️"]);

            if (Emoji === "➡️") {

                msg.reactions.removeAll().then(async msg => {
                    msg.edit(Embed2)
                }, 100)
            }

            await msg.edit(Embed2).then(async msg2 => {
                const Emoji2 = await promptMessage(msg2, message.author, time, ["➡️"]);

                if (Emoji2 === "➡️") {

                    msg2.reactions.removeAll().then(async msg2 => {
                        msg2.edit(Embed3)
                    }, 100)
                }
            })

            await msg.edit(Embed3).then(async msg3 => {
                const Emoji3 = await promptMessage(msg3, message.author, time, ["⬅️"]);

                if (Emoji3 === "⬅️") {

                    msg3.reactions.removeAll().then(async msg3 => {
                        msg3.edit(Embed2)
                    }, 100)
                }
            })

            await msg.edit(Embed2).then(async msg3 => {
                const Emoji2 = await promptMessage(msg3, message.author, time, ["⬅️"]);

                if (Emoji2 === "⬅️") {

                    msg3.reactions.removeAll().then(async msg2 => {
                        msg2.edit(Embed1)
                    }, 100)
                }
            })
        });

        await message.channel.send(Embed1).then(async msg => {
            const Emoji = await promptMessage(msg, message.author, time, ["➡️"]);

            if (Emoji === "➡️") {

                msg.reactions.removeAll().then(async msg => {
                    msg.edit(Embed2)
                }, 100)
            }

            await msg.edit(Embed2).then(async msg2 => {
                const Emoji2 = await promptMessage(msg2, message.author, time, ["➡️"]);

                if (Emoji2 === "➡️") {

                    msg2.reactions.removeAll().then(async msg2 => {
                        msg2.edit(Embed3)
                    }, 100)
                }
            })

            await msg.edit(Embed3).then(async msg3 => {
                const Emoji3 = await promptMessage(msg3, message.author, time, ["⬅️"]);

                if (Emoji3 === "⬅️") {

                    msg3.reactions.removeAll().then(async msg3 => {
                        msg3.edit(Embed2)
                    }, 100)
                }
            })

            await msg.edit(Embed2).then(async msg3 => {
                const Emoji2 = await promptMessage(msg3, message.author, time, ["⬅️"]);

                if (Emoji2 === "⬅️") {

                    msg3.reactions.removeAll().then(async msg2 => {
                        msg2.edit(Embed1)
                    }, 100)
                }
            })
            await msg.edit(Embed2).then(async msg2 => {
                const Emoji2 = await promptMessage(msg2, message.author, time, ["➡️"]);

                if (Emoji2 === "➡️") {

                    msg2.reactions.removeAll().then(async msg2 => {
                        msg2.edit(Embed3)
                    }, 100)
                }
            })

            await msg.edit(Embed3).then(async msg3 => {
                const Emoji3 = await promptMessage(msg3, message.author, time, ["⬅️"]);

                if (Emoji3 === "⬅️") {

                    msg3.reactions.removeAll().then(async msg3 => {
                        msg3.edit(Embed2)
                    }, 100)
                }
            })

            await msg.edit(Embed2).then(async msg3 => {
                const Emoji2 = await promptMessage(msg3, message.author, time, ["⬅️"]);

                if (Emoji2 === "⬅️") {

                    msg3.reactions.removeAll().then(async msg2 => {
                        msg2.edit(Embed1)
                    }, 100)
                }
            })
        })
    }
}