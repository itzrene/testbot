const Discord = require("discord.js");
var config = require("./quotes.json");


module.exports.run = async (bot, message, args, member) => {
    
    var quotes = config.quotes;

    function randomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    message.channel.send(randomQuote());

}

module.exports.help = {
    name: "quote"
}
