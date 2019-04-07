const Discord = require("discord.js");
var Jimp = require('jimp');

module.exports.run = async (bot, message, args, member) => {

    var p1 = Jimp.read("images/lenna.png");
    var p2 = Jimp.read("images/mask.png");

    Promise.all([p1, p2]).then(function(images){
        var lenna = images[0];
        var mask = images[1];

        lenna.mask(mask, 0, 0).write("lenna-circle.png");

        var sizes = [256, 128, 64, 60, 48, 32, 30, 16];

        for (var i = 0; i < sizes.length; i++) {
            lenna.clone().resize(sizes[i], Jimp.AUTO)
                .write("lenna-circle" + i + ".png");
        }
    });

    message.channel.send("", {file: "images/lenna-circle.png"});
}

module.exports.help = {
    name: "img"
}

