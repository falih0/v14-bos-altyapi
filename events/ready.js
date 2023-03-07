const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
client.user.setActivity(`Bu altyapı faliho tarafından yapıldı.`)

client.src = new Collection();
client.aliases = new Collection();
fs.readdir("./src/prefix", (err, files) => {
if (err) console.error(err);
files.forEach(f => {
let props = require(`../src/prefix/${f}`);

console.log(`${props.help.name} Named Command Online!`);
    
client.src.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});