const Discord = require("discord.js");
let points = require("./points.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    'use strict';

    let student = {
        name: 'Mike',
        age: 23,
        gender: 'Male',
        department: 'English',
        car: 'Honda'
    };

    let data = JSON.stringify(student);
    fs.writeFileSync('student-2.json', data);
    if(!fs.exists("student-2.json")){
        message.channel.send("created");
    } else {
        message.channel.send("written");
    }

}

module.exports.help = {
    name: "point"
}
