const Discord = require("discord.js");
const weather = require("weather-js");

module.exports = {
    name: "weather",
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
            .addField("COMMAND", "```Weather```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>weather <location>```", true)
            .addField("DESCRIPTION", "```Displays the weather information on the specified place. (No continents/countries)```", true)
            .setColor(InformationColor)

        const Number = 100
        const RandomNumber = Math.floor(Math.random() * 901) + Number

        if (!args[0]) {
            return message.channel.send(Embed1)
        } else {
            weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {
                const Messages = [
                    `Unfortunately, " ${args.join(" ")}" isn't a place.`,
                    "That place does not exist.",
                    `Could not find "${args.join(" ")}".`,
                    "Unauthorized access to show location.",
                    "The location you entered may be spelled wrong, or does not exist.",
                    "Location found, but I could not display it due to the harsh environment.",
                    `According to Google, this location last existed ${RandomNumber} years ago.`,
                    "Task failed successfully.",
                    "You need to stop putting invalid locations",
                    `"${args.join(" ")}" is too big for my memory file.`,
                    "Could not load location.",
                    "Failed to display location",
                    `"${args.join(" ")}" does not exist.`,
                    `"${args.join("")}" is not a place on "Earth".`
                ]

                const RandomMessage = Messages[Math.floor(Math.random() * Messages.length)];

                const Embed2 = new Discord.MessageEmbed()
                    .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
                    .setDescription("```" + `${RandomMessage}` + "```")
                    .setColor(ErrorColor)

                if (err) {
                    return message.channel.send(Embed2)
                }

                var current = result[0].current;
                var location = result[0].location;

                const Embed3 = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor("WEATHER")
                    .setTitle(`${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .setColor(0xFAFAFA)
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
                                .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                                .setDescription("```" + `${err}` + "```")
                                .setColor(ErrorColor)

                            return message.channel.send(ConsoleEmbed)
                        }
                    });
            });
        }
    }
}