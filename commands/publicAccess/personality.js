const Discord = require("discord.js");

module.exports = {
    name: "personality",
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

        const Number = 100
        const Random = Math.floor(Math.random() * (Number))

        const Number2 = 20
        const Random2 = Math.floor(Math.random() * (Number2))

        const Number3 = -1000
        const Random3 = Math.floor(Math.random() * (Number3))

        const Number4 = 100
        const Random4 = Math.floor(Math.random() * 901) + Number4

        const Field1 = ["Carpenter", "Engineer", "Housewife", "Manga Artist", "Slave", "President", "Cashier", "Manager", "Driver", "Plumber", "Electrician", "YouTuber", "Gold Digger"]
        const RandomField1 = Field1[Math.floor(Math.random() * Field1.length)];

        const Field2 = ["North American", "South American", "African", "European", "Australian", "Asian", "Antartican"]
        const RandomField2 = Field2[Math.floor(Math.random() * Field2.length)];

        const Field3 = ["Rock", "Jass", "Rap,", "Hip Hop", "Heavy Metal", "Reggae", "Classic", "Dubstep", "Electro Swing", "Electronic"]
        const RandomField3 = Field3[Math.floor(Math.random() * Field3.length)];

        const Field4 = ["Satan", "Executioner", "Be-header", "Afton", "Serial Killer", "Zach Nolan", "Jeff The Killer", "Man Behind the Slaughter", "Demon", "Phantom"]
        const RandomField4 = Field4[Math.floor(Math.random() * Field4.length)];

        const Field5 = ["Hip Hop", "Electro Swing", "Trap", "Electronic"]
        const RandomField5 = Field5[Math.floor(Math.random() * Field5.length)];

        const Embed1 = new Discord.MessageEmbed()
            .setTitle("**YOUR PERSONALITY**")
            .addField("FRIENDS", "```" + `${Random}` + "```", true)
            .addField("DEPRESSION", "```" + `${Random}%` + "```", true)
            .addField("DREAM JOB", "```" + `${RandomField1}` + "```", true)
            .addField("NATIONALITY", "```" + `${RandomField2}` + "```", true)
            .addField("FAVORITE MUSIC", "```" + `${RandomField3}` + "```", true)
            .addField("CRIMINAL OFFENCES", "```" + `${Random2}` + "```", true)
            .setColor(0xFAFAFA)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle("**YOUR PERSONALITY**")
            .addField("FRIENDS", "```" + `${Random3}` + "```", true)
            .addField("DEPRESSION", "```" + `${Random4}%` + "```", true)
            .addField("DREAM JOB", "```" + `${RandomField4}` + "```", true)
            .addField("NATIONALITY", "```" + `Hell` + "```", true)
            .addField("FAVORITE MUSIC", "```" + `${RandomField5}` + "```", true)
            .addField("CRIMINAL OFFENCES", "```" + `666` + "```", true)
            .setColor(0xFAFAFA)

        if (message.author.id == "528675367028916224") {
            return message.channel.send(Embed2)
        } else {
            message.channel.send(Embed1)
            message.channel.send(Embed2)
                .catch(err => {
                    if (err) {
                        const ConsoleEmbed = new Discord.MessageEmbed()
                            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **TERMINAL ERROR**")
                            .setDescription("```" + `${err}` + "```")
                            .setColor(ErrorColor)

                        return message.channel.send(ConsoleEmbed)
                    }
                });
        }
    }
}