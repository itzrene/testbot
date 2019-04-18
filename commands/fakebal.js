const Discord = require("discord.js");
const mongoose = require("mongoose");
const Money = require("../models/money.js");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    host: 'magicalcreature-jfi8q.mongodb.net',
    port: 27017,
    path: '/'
};
console.log(process.env.MONGODB_URI);
let uri = process.env.MONGODB_URI;
mongoose.connect(uri, options).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

module.exports.run = async (bot, message, args) => {
    Money.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, money) => {
        if (err) console.log(err);
        console.log("1");
        let embed = new Discord.RichEmbed()
            .setTitle("Coins")
            .setColor("#4000FF")
            .setThumbnail(message.author.displayAvatarURL);
        if (!money) {
            embed.addField("Coins", "0", true);
            return message.channel.send(embed);
        } else {
            embed.addField("Coins", money.money, true);
            return message.channel.send(embed);
        }
    })
}

module.exports.help = {
    name: "fakebal"
}
