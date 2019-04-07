const Discord = require("discord.js");
const request = require('request');

module.exports.run = async (bot, message, args, member) => {

    let cn = request("http://api.adviceslip.com/advice", function (err, res, body) {
        try {
            let cnj = JSON.parse(body)
            message.channel.send(cnj.slip.advice)
        } catch (e) {
            return send("**Something went wrong...**")
        }
    });

}

module.exports.help = {
    name: "advice"
}
