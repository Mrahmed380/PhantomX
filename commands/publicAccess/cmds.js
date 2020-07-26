const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "cmds",
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

        const publicCommandsImage = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/714096542944067694/722906750583439441/pub.jpg")
        const privateCommandsImage = new Discord.MessageAttachment("https://cdn.discordapp.com/attachments/714096542944067694/722906774499491840/pri.jpg")

        const time = 1000 * 1000

        const msg = await message.channel.send(publicCommandsImage).then(async msg => {
            const LEmoji = await promptMessage(msg, message.author, time, ["➡️"]);

            if (LEmoji === "➡️") {
                let msg = await message.channel.send(privateCommandsImage);

                message.reactions.removeAll().then(async msg => {
                    msg.edit(privateCommandsImage)
                }, 100)
            }
        });
    }
}