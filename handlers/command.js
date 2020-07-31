const { readdirSync } = require("fs");
module.exports = (client) => {
    readdirSync("./commands/").filter(x => x.includes(".DS_Store") == false).map(dir => {
       const commands = readdirSync(`./commands/${dir}/`).filter(f => f.includes(".DS_store") == false).map(cmd=>{
           let pull = require(`../commands/${dir}/${cmd}`)
           console.log(`Loaded command ${pull.name}`)
           client.commands.set(pull.name,pull)
           if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
       })
    })
}