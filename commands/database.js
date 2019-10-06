const Discord = require("discord.js");
let sa = require("superagent");
const config = require("../botconfig.json");
let color = config.color;
const mysql = require("mysql");

module.exports.run = async (bot, message, args, con) => {

    channel.send("1");
    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
        if (err) {
            console.log("frick");
        }
        console.log(rows);
    });

}

module.exports.help = {
    name: "database"
}
