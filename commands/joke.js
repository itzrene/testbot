const Discord = require("discord.js");
let sa = require("superagent");
const config = require("../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    let {body} = await sa
        .get(`https://icanhazdadjoke.com/slack`);

    let embed = new Discord.RichEmbed()
        .setDescription("`" + body.attachments.map(a => a.text) + "`")
        .setColor(color);
    message.channel.send(embed);

}

module.exports.help = {
    name: "joke"
}
