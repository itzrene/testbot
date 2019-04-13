const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    let author = db.get(`currency_${message.author.id}`);

    var star = message.guild.roles.find("name", "⭐");
    var appreciateme = message.guild.roles.find("name", "appreciate me");
    var muted = message.guild.roles.find("name", "muted");

    if (args[0] == '1') {
        if (!star) {
            return message.channel.send('I could not find a role by the name of `⭐️`, check with the owners.')
        }
        if (author < 700) {
            return message.channel.send('You need at least `700$` to purchase the ⭐️ role.')
        } // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        if (message.member.roles.has(star.id)) {
            message.channel.send(message.author.tag + ' You already own this role!');
        } else if (!message.member.roles.has(star.id)) {
            if (author >= 700) {
                message.member.addRole(star);

                currency[message.author.id] = {
                    currency: currency[message.author.id].currency - 700
                };
                fs.writeFile("./currency.json", JSON.stringify(currency), (err) => {
                    if (err) console.log(err)
                });
                message.channel.send(message.author.tag + ' You successfully bought the ⭐ role for `700$`');
            }
        }
    } else if (args[0] == '2') {
        if (!appreciateme) {
            return message.channel.send('I could not find a role by the name of `appreciate me`, check with the owners.')
        }
        if (author < 1800) {
            return message.channel.send('You need at least `1800$` to purchase the appreciate me role.')
        } // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        if (author >= 1800) {
            message.member.addRole(appreciateme); // get the role & add it

            currency[message.author.id] = {
                currency: currency[message.author.id].currency - 1800
            };
            fs.writeFile("./currency.json", JSON.stringify(currency), (err) => {
                if (err) console.log(err)
            });
            message.channel.send(message.author.tag + ' You successfully bought the appreciate me role for `1800$`');
        }
        if (message.member.roles.find(appreciateme)) {
            message.channel.send(message.author.tag + ' You already own this role!');
        }
    } else if (args[0] == '3') {
        if (!muted) {
            return message.channel.send('I could not find a role by the name of `muted`, check with the owners.')
        }
        if (author < 1800) {
            return message.channel.send('You need at least `1800$` to purchase the muted role.')
        } // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        if (author >= 1800) {
            message.member.addRole(muted); // get the role & add it

            db.remove()
            message.channel.send(message.author.tag + ' You successfully bought the muted role for `1800$`');
        }
        if (message.member.roles.find(appreciateme)) {
            message.channel.send(message.author.tag + ' You already own this role!');
        }
    }

}

module.exports.help = {
    name: "buy"
}
