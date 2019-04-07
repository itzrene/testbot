const Discord = require("discord.js");
let points = require("./points.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!args[1]) return message.reply("Usage: !point [member] [points]");

    let question = args.slice(0).join(" ");

    fs.writeFile("./points.json", JSON.stringify(points, null, 3), err =>{
        if(err) throw err;
        message.channel.send("Written!")
    });

    message.channel.send(question);

}

module.exports.help = {
    name: "point"
}
