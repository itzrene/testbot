const Discord = require("discord.js");
var config = require("./quotes.json");
var quotes = config.quotes;


module.exports.run = async (bot, message, args, member) => {
    
    function randomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    message.channel.send(randomQuote());

}

module.exports.help = {
    name: "quote"
}
