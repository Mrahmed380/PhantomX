const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "cmds",
    category: "publicAccess",
    run: async (bot, message, args) => {
        const publicCommandsImage = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/714096542944067694/722906750583439441/pub.jpg")
        const privateCommandsImage = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/714096542944067694/722906774499491840/pri.jpg")

        const time = 1000 * 1000

        const msg = await message.channel.send(publicCommandsImage).then(async msg => {
            const Emoji = await promptMessage(msg, message.author, time, ["➡️"]);

            if (Emoji === "➡️") {
                let msg = await message.channel.send(privateCommandsImage);

                message.reactions.removeAll().then(async msg => {
                    message.edit(privateCommandsImage)
                }, 100)
            }
        });
    }
}