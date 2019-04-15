const Discord = require("discord.js");
var config = require("./quotes.json");
const snek = require('snekfetch');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const configb = require("../botconfig.json");
let color = configb.color;

module.exports.run = async (bot, message, args, member) => {

    var quotes = config.quotes;

    function randomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    if(!args[0]) {
        let embed = new Discord.RichEmbed()
            .setDescription("*" + randomQuote() + "*")
            .setColor(color);
        message.channel.send(embed)
    } else if(args[0] == "trump"){
        snek.get(api).then(r => {
            let embed = new Discord.RichEmbed()
                .setDescription("*" + r.body.message + "*")
                .setColor(color);
            message.channel.send(embed)
        })
    }

}

module.exports.help = {
    name: "quote"
}