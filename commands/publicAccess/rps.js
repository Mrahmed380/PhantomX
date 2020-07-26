const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");
const Messages1 = ["You win"];
const Messages2 = ["It's a tie!"];
const Messages3 = ["You lost"];
const Options = ["⛰️", "🧾", "✂️"];

module.exports = {
    name: "rps",
    category: "publicAccess",
    run: async (bot, message, args) => {

        const Embed = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**ROCK, PAPER, SCISSORS**")
            .setFooter("Please wait for all the emojis to load before clicking")
            .setTimestamp();

        const m = await message.channel.send(Embed);
        const Reacted = await promptMessage(m, message.author, 30, Options);

        const BotOptions = Options[Math.floor(Math.random() * Options.length)];

        const Result = await getResult(Reacted, BotOptions)
        await m.reactions.removeAll();

        Embed
            .setDescription("")
            .addField(Result, `${Reacted} vs ${BotOptions}`)
            .setFooter("You       Bot");

        m.edit(Embed)
        .catch(err => {
            if (err) {
                const ConsoleEmbed = new Discord.MessageEmbed()
                    .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                    .setDescription("```" + `${err}` + "```")
                    .setColor(AdminNotificationColor)

                return message.channel.send(ConsoleEmbed)
            }
        });

        function getResult(me, clientchosen) {
            if ((me === "⛰️" && clientchosen === "🧾") ||
                (me === "🧾" && clientchosen === "✂️") ||
                (me === "✂" && clientchosen === "⛰️")) {
                return Messages1[Math.floor(Math.random() * Messages1.length)];
            } else if (me === clientchosen) {
                return Messages2[Math.floor(Math.random() * Messages2.length)];
            } else {
                return Messages3[Math.floor(Math.random() * Messages3.length)]
            }
        }
    }
}