const Discord = require("discord.js");
const { trimResultTransformer } = require("common-tags");

module.exports = {
    name: "help",
    category: "publicAccess",
    run: async (bot, message, args) => {
        const Embed = new Discord.MessageEmbed()
            .setTitle("**HELP**")
            .addField("**DESCRIPTION**", "```I was made by Phantom and acts as his loyal servant.```", true)
            .addField("**COMMANDS**", "```Say '>commands' to view all the commands.```", true)
            .addField("**PREFIX**", "```>```", true)
            .addField("**INVITE**", "```https://discord.com/oauth2/authorize?client_id=696017289044164648&permissions=8&scope=bot```", true)
            .setColor(0x000000);

        message.author.send(Embed)
            .catch(err => {
                if (err) {
                    const ConsoleEmbed = new Discord.MessageEmbed()
                        .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                        .setDescription("```" + `${err}` + "```")
                        .setColor(AdminNotificationColor)

                    return message.channel.send(ConsoleEmbed)
                }
            });
    }
}