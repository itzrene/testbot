const Discord = require("discord.js");
var Jimp = require('jimp');
const config = require("../botconfig.json");
let color = config.color;
const google = require("google");
const cheerio = require("cheerio");
const request = require("request");

module.exports.run = async (bot, message, args, member) => {

    google.resultsPerPage = 1
    google.protocol = 'https'
    var nextCounter = 0

    if(!args[0]){
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Missing arguments!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else {

        google(args, function (err, res) {
            if (err) console.log(err);

            for (var i = 0; i < 1; ++i) {
                var link = res.links[i];

                message.channel.send(link.title + " " + link.href);
            }

        });
    }

}


module.exports.help = {
    name: "google"
}
