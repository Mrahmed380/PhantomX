const Discord = require("discord.js");

module.exports = {
    name: "createserver",
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
            .setTitle(`${emoji(`${ErrorEmoji}`)}` + " **ERROR**")
            .setDescription("```" + `This command has been restricted to the owner.` + "```")
            .setColor(ErrorColor)

        const Embed2 = new Discord.MessageEmbed()
            .setTitle(`${emoji(`${InformationEmoji}`)}` + " **BOT INVITE LINKS**")
            .addField("**Dyno:**", "https://discord.com/oauth2/authorize?client_id=161660517914509312&scope=bot+identify+guilds&response_type=code&redirect_uri=https%3A%2F%2Fdyno.gg%2Freturn&permissions=2134207679")
            .addField("**MEE6:**", "https://discord.com/oauth2/authorize?scope=bot&response_type=code&redirect_uri=https%3A%2F%2Fmee6.xyz%2Fguild-oauth&permissions=1916267615&client_id=159985415099514880&guild_id=661170382111375384")
            .addField("**OwO:**", "https://discord.com/oauth2/authorize?client_id=408785106942164992&permissions=1074120776&scope=bot")
            .addField("**Dank Memer:**", "https://discord.com/oauth2/authorize?scope=identify+email&response_type=code&client_id=270904126974590976&redirect_uri=https%3A%2F%2Fdankmemer.lol%2Foauth%2Fcallback")
            .setColor(InformationColor)

        if (message.author.id != "528675367028916224") {
            return message.channel.send(Embed1)
        } else {

            await message.guild.roles.create({
                data: {
                    name: "Owner",
                    color: 0xFF6B6B,
                    permissions: [
                        "ADMINISTRATOR",
                        "KICK_MEMBERS",
                        "BAN_MEMBERS",
                        "MANAGE_CHANNELS",
                        "MANAGE_GUILD",
                        "MANAGE_MESSAGES",
                        "MANAGE_ROLES",
                        "MANAGE_WEBHOOKS",
                        "MANAGE_EMOJIS",
                        "VIEW_CHANNEL",
                        "MANAGE_NICKNAMES",
                        "VIEW_AUDIT_LOG",
                        "CHANGE_NICKNAME",
                        "SEND_MESSAGES",
                        "SEND_TTS_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "READ_MESSAGE_HISTORY",
                        "USE_EXTERNAL_EMOJIS",
                        "ADD_REACTIONS",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "MOVE_MEMBERS",
                        "PRIORITY_SPEAKER",
                        "STREAM",
                        "CREATE_INSTANT_INVITE",
                        "MENTION_EVERYONE",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "Admin",
                    color: 0xFF836B,
                    permissions: [
                        "ADMINISTRATOR",
                        "KICK_MEMBERS",
                        "BAN_MEMBERS",
                        "MANAGE_CHANNELS",
                        "MANAGE_GUILD",
                        "MANAGE_MESSAGES",
                        "MANAGE_ROLES",
                        "MANAGE_WEBHOOKS",
                        "MANAGE_EMOJIS",
                        "VIEW_CHANNEL",
                        "MANAGE_NICKNAMES",
                        "VIEW_AUDIT_LOG",
                        "CHANGE_NICKNAME",
                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "READ_MESSAGE_HISTORY",
                        "USE_EXTERNAL_EMOJIS",
                        "ADD_REACTIONS",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "MOVE_MEMBERS",
                        "STREAM",
                        "MENTION_EVERYONE",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "Bots",
                    color: 0xFFA86B,
                    permissions: [
                        "ADMINISTRATOR",
                        "KICK_MEMBERS",
                        "BAN_MEMBERS",
                        "MANAGE_CHANNELS",
                        "MANAGE_GUILD",
                        "MANAGE_MESSAGES",
                        "MANAGE_ROLES",
                        "MANAGE_WEBHOOKS",
                        "MANAGE_EMOJIS",
                        "VIEW_CHANNEL",
                        "MANAGE_NICKNAMES",
                        "VIEW_AUDIT_LOG",
                        "CHANGE_NICKNAME",
                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "READ_MESSAGE_HISTORY",
                        "USE_EXTERNAL_EMOJIS",
                        "ADD_REACTIONS",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "MOVE_MEMBERS",
                        "STREAM",
                        "MENTION_EVERYONE",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "Moderator",
                    color: 0xFFC86B,
                    permissions: [
                        "KICK_MEMBERS",
                        "MANAGE_MESSAGES",
                        "VIEW_CHANNEL",
                        "MANAGE_NICKNAMES",
                        "VIEW_AUDIT_LOG",
                        "CHANGE_NICKNAME",
                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "READ_MESSAGE_HISTORY",
                        "USE_EXTERNAL_EMOJIS",
                        "ADD_REACTIONS",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "MOVE_MEMBERS",
                        "STREAM",
                        "MENTION_EVERYONE",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "YouTuber {10,000}",
                    color: 0xFFEC6B,
                    permissions: [
                        "VIEW_CHANNEL",
                        "SEND_MESSAGES",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                        "SPEAK",
                        "STREAM",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "YouTuber {5,000}",
                    color: 0xDDFF6B,
                    permissions: [
                        "VIEW_CHANNEL",
                        "SEND_MESSAGES",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                        "SPEAK",
                        "STREAM",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "YouTuber {1,000}",
                    color: 0xADFF6B,
                    permissions: [
                        "VIEW_CHANNEL",
                        "SEND_MESSAGES",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                        "SPEAK",
                        "STREAM",
                        "USE_VAD"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "Loyal Member",
                    color: 0x81FF6B,
                    permissions: [
                        "VIEW_CHANNEL",
                        "SEND_MESSAGES",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                        "SPEAK",
                        "STREAM",
                        "USE_VAD",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "USE_EXTERNAL_EMOJIS",
                        "CHANGE_NICKNAME"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "Dedicated Member",
                    color: 0x6BFF92,
                    permissions: [
                        "VIEW_CHANNEL",
                        "SEND_MESSAGES",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                        "SPEAK",
                        "STREAM",
                        "USE_VAD",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CHANGE_NICKNAME"
                    ]
                }
            })

            await message.guild.roles.create({
                data: {
                    name: "Active Member",
                    color: 0x6BFFCB,
                    permissions: [
                        "VIEW_CHANNEL",
                        "SEND_MESSAGES",
                        "READ_MESSAGE_HISTORY",
                        "CONNECT",
                        "SPEAK",
                        "USE_VAD",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                    ]
                }
            })

            const ImportantC = await message.guild.channels.create("📌│important", { type: "category" })
            const LoungeC = await message.guild.channels.create("[💬] Lounge", { type: "category" })
            const VCC = await message.guild.channels.create("[🔊] Voice Chat", { type: "category" })
            const APC = await message.guild.channels.create("[🔒] Authorized Personnel", { type: "category" })

            message.guild.channels.create("📌│rules", { parent: ImportantC.id })
            message.guild.channels.create("📌│announcements", { parent: ImportantC.id })
            message.guild.channels.create("📌│boosts", { parent: ImportantC.id })

            message.guild.channels.create("💬│general", { parent: LoungeC.id })
            message.guild.channels.create("💬│bot-commands", { parent: LoungeC.id })
            message.guild.channels.create("💬│memes", { parent: LoungeC.id })
            message.guild.channels.create("💬│memes", { parent: LoungeC.id })

            message.guild.channels.create("🖥│Streams", { parent: VCC.id }, { type: "voice" })
            message.guild.channels.create("🔊│Hangout [1]", { parent: VCC.id }, { type: "voice" })
            message.guild.channels.create("🔊│Hangout [2]", { parent: VCC.id }, { type: "voice" })
            message.guild.channels.create("🔊│Lonely Corner", { parent: VCC.id }, { type: "voice" })
            message.guild.channels.create("🔒│Staff", { parent: VCC.id }, { type: "voice" })

            message.guild.channels.create("🔒│private-chat", { parent: APC.id })
            message.guild.channels.create("🔒│logs", { parent: APC.id })

            message.channel.send(Embed2)
        }
    }
}