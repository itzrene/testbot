const Discord = require("discord.js");
const jimp = require("jimp");
const fs = require('fs')

module.exports.run = async (bot, message, args) => {

    if(!args[0]){
        message.channel.send("Please add arguments!");
    } else {

        let args1 = args.slice(0).join(" ");

        const path = "images/meme/meme_" + message.author.id.toString() + ".png";

        jimp.read("images/meme/meme.png", function (err, test) {
            if (err) throw err;
            test.quality(50)
            jimp.loadFont(jimp.FONT_SANS_16_BLACK).then(font => {
                test.print(
                    font,
                    265,
                    180,
                    {
                        text: args1,
                        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: jimp.VERTICAL_ALIGN_MIDDLE
                    },
                    100,
                    200,
                    console.log("Meme: Font printed!")
                ); // prints 'Hello world!' on an image, middle and center-aligned, when x = 0 and y = 0
                test.write("images/meme/meme_" + message.author.id.toString() + ".png");
                console.log("Meme: Created!");
                message.channel.send("Img sent!", {file: "images/meme/meme_" + message.author.id.toString() + ".png"});
                setTimeout(function () {
                    try {
                        fs.unlinkSync(path)
                    } catch (err) {
                        console.error(err)
                    }
                }, 3000);
            });
            console.log("Meme: Being created!");
        });
    }

}

module.exports.help = {
    name: "meme"
}
