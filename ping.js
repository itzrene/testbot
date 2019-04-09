const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("Pong! ```Calculating your ping...```")
        .then((msg) => {
            setTimeout(function () {
                msg.edit("Your ping is: **" + (Date.now() - msg.createdTimestamp) + "** ms");
            }, 1000)
        });

}

module.exports.help = {
    name: "8ball"
}
