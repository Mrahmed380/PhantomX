const { Collection, Client, client, Discord } = require("discord.js");
const fs = require("fs");
const config = require("./token.json")
const prefix = config.prefix;
const token = config.token;
const bot = new Client({
    disableEveryone: true
})

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
bot.prefix = ">";

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

bot.on("ready", () => {
    setTimeout(() => {
        bot.user.setActivity(`Discord | © Ph4ntomize's Personal Bot`)
        console.log("✔️ UPDATED BOT SUCCESSFULLY")
    }, 600);
    setTimeout(() => {
        console.log('------------------------------------------')
    }, 700);
})


bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = bot.commands.get(cmd)
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    if (command)

        command.run(bot, message, args)
})

bot.login(token)