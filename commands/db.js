const Discord = require("discord.js");
const mongoose = require("mongoose");
const config = require("../botconfig.json");
const Db = require("../models/ohmygod.js");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    });

    const db = new Db({
        _id: mongoose.Types.ObjectId(),
        username: message.author.username
    });

    db.save()
        .then(result => console.log(result))
        .catch(err => console.log(err));

    message.reply("Saved to the database!")

}

module.exports.help = {
    name: "db"
}
