const Discord = require("discord.js");
let sa = require("superagent");
const config = require("../botconfig.json");
let color = config.color;
const mysql = require("mysql");

let con = mysql.createConnection({
    port: "3306",
    host: "remotemysql.com",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

con.connect(err => {
   if(err) {
       //throw err;
       console.log("fuck");
   }
   console.log("AAAAAAAAA Connected to the database of database.js!");
   //con.query("SHOW TABLES", console.log);
});

module.exports.run = async (bot, message, args, con) => {

    message.channel.send("1");
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
