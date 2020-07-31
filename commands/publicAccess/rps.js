const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");
const Messages1 = ["YOU WIN"];
const Messages2 = ["YOU TIED"];
const Messages3 = ["YOU LOSE"];
const Options = ["⛰️", "🧾", "✂️"];

module.exports = {
    name: "rps",
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
            .setTitle("**ROCK, PAPER, SCISSORS**")
            .setColor(0xFAFAFA)

        const m = await message.channel.send(Embed);
        const Reacted = await promptMessage(m, message.author, 30, Options);

        const BotOptions = Options[Math.floor(Math.random() * Options.length)];

        const Result = await getResult(Reacted, BotOptions)
        await m.reactions.removeAll();

        Embed
            .setTitle(`${Result}`)
            .addField("You    Me", `${Reacted}   vs   ${BotOptions}`)

        m.edit(Embed)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(ErrorColor)

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