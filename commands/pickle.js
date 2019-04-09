const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var size = [
        "1 inch",
        "2 inch",
        "3 inch",
        "4 inch",
        "5 inch",
        "6 inch",
        "7 inch",
        "8 inch",
        "9 inch",
        "10 inch",
        "11 inch",
        "You don't have a pickle :("
    ];

    var result = Math.floor((Math.random() * size.length) + 0);

    const embed = new Discord.RichEmbed()
        .setColor(0xb798f2)
        .setTitle("Results:")
        .addField("Your pickle size is: ", size[result]);
    message.channel.send({embed});

}

module.exports.help = {
    name: "pickle"
}
