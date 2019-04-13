const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
let color = config.color;

const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {

    let author = db.get(`currency_${message.author.id}`);

    if (talkedRecently.has(message.author.id)) {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Please wait 3 seconds before using this command!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else {
        if (author <= 0) {
            let embed = new Discord.RichEmbed()
                .setAuthor( "ERROR", message.author.avatarURL)
                .setDescription("`You don't have enough money!`")
                .setColor(color)

            message.channel.send(embed).then(m => m.delete(5000));
        } else {

            db.subtract(`currency_${message.author.id}`, 25);

            let symbols = [
                ":cherries:",
                ":grapes:",
                ":cherries:",
                ":lemon:",
                ":gem:",
                ":moneybag:",
                ":grapes:",
                ":cherries:",
                ":lemon:",
                ":moneybag:",
                ":lemon:",
                ":grapes:",
            ];

            function spin() {
                return symbols[Math.floor(Math.random() * symbols.length)];
            };

            let sym = [];
            for (let i = 0; i < 3; i++) {
                sym.push(spin());
            }

            let result = 'You lost.';

            //diamond
            if (sym[0] == ":diamond:" && sym[1] == ":diamond:" && sym[2] == ":diamond:" || sym[0] == ":diamond:" && sym[1] == ":diamond:" || sym[1] == ":diamond:" && sym[2] == ":diamond:") {
                if (sym[0] == sym[1] && sym[1] == sym[2]) {
                    result = 'Congratulations! You won 300!';
                    db.add(`currency_${message.author.id}`, 300);
                    //give 300
                } else if (sym[0] == sym[1]) {
                    result = 'Congratulations! You won 150!';
                    db.add(`currency_${message.author.id}`, 150);
                    //give 300
                } else if (sym[1] == sym[2]) {
                    result = 'Congratulations! You won 150!';
                    db.add(`currency_${message.author.id}`, 150);
                    //give 300
                } else if (sym[0] == sym[2]) {
                    result = 'Congratulations! You won 75!';
                    db.add(`currency_${message.author.id}`, 75);
                    //give 75
                }
            }

            //moneybag
            if (sym[0] == ":moneybag:" && sym[1] == ":moneybag:" && sym[2] == ":moneybag:" || sym[0] == ":moneybag:" && sym[1] == ":moneybag:" || sym[1] == ":moneybag:" && sym[2] == ":moneybag:") {
                if (sym[0] == sym[1] && sym[1] == sym[2]) {
                    result = 'Congratulations! You won 75!';
                    db.add(`currency_${message.author.id}`, 75);
                    //give 75
                } else if (sym[0] == sym[1]) {
                    result = 'Congratulations! You won 35!';
                    db.add(`currency_${message.author.id}`, 35);
                    //give 35
                } else if (sym[1] == sym[2]) {
                    result = 'Congratulations! You won 35!';
                    db.add(`currency_${message.author.id}`, 36);
                    //give 35
                } else if (sym[0] == sym[2]) {
                    result = 'Congratulations! You won 15!';
                    db.add(`currency_${message.author.id}`, 15);
                    //give 15
                }
            }

            //cherries
            if (sym[0] == ":cherries:" && sym[1] == ":cherries:" && sym[2] == ":cherries:" || sym[0] == ":cherries:" && sym[1] == ":cherries:" || sym[1] == ":cherries:" && sym[2] == ":cherries:") {
                if (sym[0] == sym[1] && sym[1] == sym[2]) {
                    result = 'Congratulations! You won 15!';
                    db.add(`currency_${message.author.id}`, 15);
                    //give 300
                } else if (sym[0] == sym[1]) {
                    result = 'Congratulations! You won 10!';
                    db.add(`currency_${message.author.id}`, 10);
                    //give 300
                } else if (sym[1] == sym[2]) {
                    result = 'Congratulations! You won 10!';
                    db.add(`currency_${message.author.id}`, 10);
                    //give 300
                } else if (sym[0] == sym[2]) {
                    result = 'Congratulations! You won 5!';
                    db.add(`currency_${message.author.id}`, 5);
                    //give 75
                }
            }

            //grapes
            if (sym[0] == ":grapes:" && sym[1] == ":grapes:" && sym[2] == ":grapes:" || sym[0] == ":grapes:" && sym[1] == ":grapes:" || sym[1] == ":grapes:" && sym[2] == ":grapes:") {
                if (sym[0] == sym[1] && sym[1] == sym[2]) {
                    result = 'Congratulations! You won 5!';
                    db.add(`currency_${message.author.id}`, 5);
                    //give 5
                } else if (sym[0] == sym[1]) {
                    result = 'Congratulations! You won 5!';
                    db.add(`currency_${message.author.id}`, 5);
                    //give 5
                } else if (sym[1] == sym[2]) {
                    result = 'Congratulations! You won 5!';
                    db.add(`currency_${message.author.id}`, 5);
                    //give 5
                } else if (sym[0] == sym[2]) {
                    result = 'Congratulations! You won 5!';
                    db.add(`currency_${message.author.id}`, 5);
                    //give 5
                }
            }

            //lemon
            if (sym[0] == ":lemons:" && sym[1] == ":lemons:" && sym[2] == ":lemons:" || sym[0] == ":lemons:" && sym[1] == ":lemons:" || sym[1] == ":lemons:" && sym[2] == ":lemons:") {
                if (sym[0] == sym[1] && sym[1] == sym[2]) {
                    result;
                    //give 0
                } else if (sym[0] == sym[1]) {
                    result;
                    //give 0
                } else if (sym[1] == sym[2]) {
                    result;
                    //give 0
                } else if (sym[0] == sym[2]) {
                    result;
                    //give 0
                }
            }

            let embed = new Discord.RichEmbed()
                .setTitle("Slot Machine")
                .setDescription(sym.join(" \u05C0 "))
                .setFooter("🎰 " + result)
                .setColor("0xb798f2")

            message.channel.send(embed);

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                talkedRecently.delete(message.author.id);
            }, 3000);
        }
    }

}

module.exports.help = {
    name: "slots"
}
