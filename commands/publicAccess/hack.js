const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "hack",
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

        const PromptEmbed = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${WarnEmoji}`)}` + " **COMMAND INFO**")
            .addField("COMMAND", "```Hack```", true)
            .addField("PERMISSIONS", "```None```", true)
            .addField("USAGE", "```>hack @user```", true)
            .addField("DESCRIPTION", "```Fake-hacks a user.```", true)
            .setColor(WarnColor)

        if (args[0]) {
            message.channel.send(PromptEmbed)
        }

        const Embed1 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Beginning proccess.")

        const m = await message.channel.send(Embed1);

        const Embed2 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Beginning proccess..")

        const Embed3 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Beginning proccess..")

        const Embed4 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Beginning proccess...")

        const Embed5 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Connecting to API")

        const Embed6 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully connected to API")
            .addField("Breaching fire wall", "Proccess: 1")

        const Embed7 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully connected to API")
            .addField("Breaching fire wall", "Proccess: 2")

        const Embed8 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully connected to API")
            .addField("Breaching fire wall", "Proccess: 3")

        const Embed9 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully breached fire wall")

        const Embed10 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Entering application")

        const Embed11 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Entering application.")
            .addField("Connection", "Secure")

        const Embed12 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Entering application..")
            .addField("Connection", "Insecure")

        const Embed13 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Entering application....")
            .addField("Connection", "Disconnected")

        const Embed14 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully breached application")

        const Embed15 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Returning application info")

        const Embed16 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("Application Name", "Discord")
            .addField("Connection", "Disconnected")
            .addField("Firewall", "Disconnected")
            .addField("Security", "Disconnected")
            .setFooter("Successfully returned application info")

        const Embed17 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Searching for client")

        const Embed18 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Searching for client.")

        const Embed19 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Searching for client..")

        const Embed20 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Searching for client...")

        const Embed21 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully found client")

        const Embed22 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Printing client location.")

        const Embed23 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Printing client location..")

        const Embed24 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully printed client location")

        const Embed25 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("Location:", "Discord")
            .addField("Directory", `Discord.System.Client.USERNAME`)
            .addField("Firewall", "Disconnected")
            .addField("Security", "Disconnected")
            .setFooter("Successfully returned application info")

        const Embed26 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("Location:", "Discord")
            .addField("Directory", `Discord.System.Client.USERNAME`)
            .addField("Firewall", "Disconnected")
            .addField("Security", "Disconnected")
            .setFooter("Closing application info")

        const Embed27 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("Location:", "Discord")
            .addField("Directory", `Discord.System.Client.USERNAME`)
            .addField("Firewall", "Disconnected")
            .setFooter("Closing application info")

        const Embed28 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("Location:", "Discord")
            .addField("Directory", `Discord.System.Client.USERNAME`)
            .setFooter("Closing application info")

        const Embed29 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("Location:", "Discord")
            .setFooter("Closing application info")

        const Embed30 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Closing application info")

        const Embed31 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully closed application info")

        const Embed32 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Getting user info")

        const Embed33 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully received user info")

        const Embed34 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Saving user info")

        const Embed35 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Successfully saved user info")

        const Embed36 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Displaying user info")

        const Passwords = [
            "123456",
            "360noscope",
            "WeLikeFortnite",
            "Robloxian329",
            "Haxor",
            "Cinderella",
            "Iwant1Msubs",
            "TheFortniter",
            "Password",
            "Noobas123"
        ]

        const RandomPassword = Passwords[Math.floor(Math.random() * Passwords.length)];

        const Embed37 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("USERNAME:", `USERNAME`)
            .addField("PASSWORD", `${RandomPassword}`)
            .setFooter("Sucessfully displayed user info")

        const Embed38 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Hacking IP adress")

        const IPs = [
            "192.0. 2.1",
            "201.5. 15.2",
            "1412.2. 12.3",
            "47.0. 3.16",
            "42.1. 64.4",
            "234.12. 21.61",
            "156.6. 1.4",
            "12.8. 9.2",
            "573.132. 0.3",
            "666.6. 6.6"
        ]

        const RandomIP = IPs[Math.floor(Math.random() * IPs.length)];

        const Embed39 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .addField("IP ADDRESS: ", `${RandomIP}`)
            .setFooter("Successfully displayed IP address")

        const Embed40 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Returning all information into injector")

        const Embed41 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Sending information to ||REDACTED||")

        const Embed42 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Finishing tasks")

        const Embed43 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Succesfully returned client information")

        const Embed44 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Running console tasks")

        const Embed45 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("Success!")

        const Embed46 = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setDescription("**PHANTOM X INJECTOR**")
            .setFooter("The hack is now complete.")

        m.edit(Embed2).then
        setTimeout(() => {
            m.edit(Embed2)
        }, 800),
            setTimeout(() => {
                m.edit(Embed3)
            }, 700),
            setTimeout(() => {
                m.edit(Embed4)
            }, 600),
            setTimeout(() => {
                m.edit(Embed5)
            }, 800),
            setTimeout(() => {
                m.edit(Embed6)
            }, 900),
            setTimeout(() => {
                m.edit(Embed7)
            }, 800),
            setTimeout(() => {
                m.edit(Embed8)
            }, 1000),
            setTimeout(() => {
                m.edit(Embed9)
            }, 800),
            setTimeout(() => {
                m.edit(Embed10)
            }, 700),
            setTimeout(() => {
                m.edit(Embed11)
            }, 900),
            setTimeout(() => {
                m.edit(Embed12)
            }, 1000),
            setTimeout(() => {
                m.edit(Embed13)
            }, 1200),
            setTimeout(() => {
                m.edit(Embed14)
            }, 900),
            setTimeout(() => {
                m.edit(Embed15)
            }, 2000)
        setTimeout(() => {
            m.edit(Embed16)
        }, 10000)
        setTimeout(() => {
            m.edit(Embed17)
        }, 800)
        setTimeout(() => {
            m.edit(Embed18)
        }, 900)
        setTimeout(() => {
            m.edit(Embed19)
        }, 900)
        setTimeout(() => {
            m.edit(Embed20)
        }, 800)
        setTimeout(() => {
            m.edit(Embed21)
        }, 900)
        setTimeout(() => {
            m.edit(Embed22)
        }, 700)
        setTimeout(() => {
            m.edit(Embed23)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed24)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed25)
        }, 10000)
        setTimeout(() => {
            m.edit(Embed26)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed27)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed28)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed29)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed30)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed31)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed32)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed33)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed34)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed35)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed36)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed37)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed38)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed39)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed40)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed41)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed42)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed43)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed44)
        }, 1000)
        setTimeout(() => {
            m.edit(Embed45)
            message.channel.send(Embed46)
        }, 8000)
    }
}