const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if (args.length < 1) {
             'Please input some text!';
        }
        msg.reply(args.join(' ').split('').reverse().join(''));

}

module.exports.help = {
  name: "reverse"
}
