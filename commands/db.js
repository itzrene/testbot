const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../botconfig.json");
const Db = require("../models/db.js");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        socketTimeoutMS: 45000,
        family: 4 // Use IPv4, skip trying IPv6
    });

    const db = new Db({
        _id: mongoose.Types.ObjectId(),
        username: message.author.username
    });

    db.save()
        .then(result => console.log(result))
        .catch(err => console.log(err));

    message.reply("Saved to the database!");

}

module.exports.help = {
    name: "db"
}
