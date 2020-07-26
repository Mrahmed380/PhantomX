const Discord = require("discord.js");
const weather = require("weather-js");

module.exports = {
    name: "weather",
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

        const Embed1 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Weather```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>weather <location>```", true)
            .addField("DESCRIPTION", "```Displays the weather information on the specified place. (No continents/countries)```", true)
            .setColor(WarnColor)

        {
            weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {
                if (err) message.channel.send(Embed1);

                var current = result[0].current;
                var location = result[0].location;

                const Embed3 = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor("WEATHER")
                    .setTitle(`${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .setColor(0xFFFAFA)
                    .addField(`**DATE: **`, "```" + `${message.createdAt.toLocaleString()}` + "```")
                    .addField('**TIMEZONE**', "```" + `UTC${location.timezone}` + "```", true)
                    .addField('**DEGREE TYPE**', "```" + location.degreetype + "```", true)
                    .addField('**TEMPERATURE**', "```" + `${current.temperature} Degrees` + "```", true)
                    .addField('**WINDS**', "```" + current.winddisplay + "```", true)
                    .addField('**HUMIDITY**', "```" + `${current.humidity}%` + "```", true)

                message.channel.send(Embed3)
                    .catch(err => {
                        if (err) {
                            const ConsoleEmbed = new Discord.MessageEmbed()
                                .setTitle(`${emoji(`${AdminNotificationEmoji}`)}` + " **TERMINAL ERROR**")
                                .setDescription("```" + `${err}` + "```")
                                .setColor(AdminNotificationColor)

                            return message.channel.send(ConsoleEmbed)
                        }
                    });
            });
        }
    }
}