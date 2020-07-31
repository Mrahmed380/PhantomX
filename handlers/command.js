const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Output");

module.exports = (client) => {
    readdirSync("./commands/").filter(x => x.includes(".DS_Store") == false).map(dir => {
       const commands = readdirSync(`./commands/${dir}/`).filter(f => f.includes(".DS_store") == false).map(cmd=>{
           let pull = require(`../commands/${dir}/${cmd}`)
           for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if (pull.name) {
                bot.commands.set(pull.name, pull);
                table.addRow(file, "✔️")
            } else {
                table.addRow(file, "✖️ -> ERROR")
                setTimeout(() => {
                    console.log("✖️ ERROR DETECED")
                }, 100);
                setTimeout(() => {
                    console.log("------------------------------------------")
                }, 300);
                continue;

            } if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach(alias => bot, aliases.set(alias, pull.name))
            }
        }
           client.commands.set(pull.name,pull)
           if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
       })
    })
}