const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args.length < 1) {
        message.send(args.join(' ').split('').reverse().join(''));
    } else {
        message.send("Please input some text!");
    }

}

module.exports.help = {
  name: "reverse"
}
