const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("582991042739961867")
setInterval(function() {
channel.send(`ما عندي كلام`);
}, 30)
})

client.login("NTgyOTkwMzcxNTA4NzE1NTMy.XO12Vw.UV8uJqQffl2CTro9KxFDBFpGAMo");
