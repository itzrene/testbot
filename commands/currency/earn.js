const Discord = require("discord.js");
const config = require("../../botconfig.json");
var DB = require("../../DB.js");
let color = config.color;

const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {

    if (talkedRecently.has(message.author.id)) {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Please wait 1 minute before using this command!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else {

        var locations = [
            "Magical Forest",
            "Old Bay",
            "witches",
            "trolls",
            "Forgotten Castle"
        ]

        var foundInTheMagicalForest = [
            "a Magical Fairy",
            "a 1000 years old Stone",
            "a Glowing Flower",
            "a Creature with 32 eyes",
            "a Bottle with a Map",
            "nothing"
        ]

        var foundInTheOldBay = [
            "a Fish with wings",
            "a Fish with legs",
            "a Bottle with a Map",
            "an old Anchor",
            "a Ghost of a Captain",
            "nothing"
        ]

        var foundInTheWitches = [
            "a Potion of Invisibility",
            "a Necromancy Book",
            "a Magic Wand",
            "a Hat",
            "a very weird looking Plant",
            "nothing"
        ]

        var foundInTheTrolls = [
            "a very weird looking Stone",
            "30000 years old Stone",
            "a moss",
            "a Wooden Chair",
            "a Horn",
            "nothing"
        ]

        var foundInTheForgottenCastle = [
            "a Crown",
            "a Glass",
            "a Sword",
            "a Rug",
            "a Candle",
            "nothing"
        ]


        let amountMagicalForest = Math.floor(Math.random() * 70) + 1;
        let amountOldBay = Math.floor(Math.random() * 70) + 1;
        let amountWitches = Math.floor(Math.random() * 80) + 1;
        let amountTrolls = Math.floor(Math.random() * 60) + 1;
        let amountForgottenCastle = Math.floor(Math.random() * 120) + 1;


        function loc() {
            return locations[Math.floor(Math.random() * locations.length)];
        };

        var location = loc();


        function inTheMagicalForest() {
            return foundInTheMagicalForest[Math.floor(Math.random() * foundInTheMagicalForest.length)];
        };

        function inTheOldBay() {
            return foundInTheOldBay[Math.floor(Math.random() * foundInTheOldBay.length)];
        };

        function inTheWitches() {
            return foundInTheWitches[Math.floor(Math.random() * foundInTheWitches.length)];
        };

        function inTheTrolls() {
            return foundInTheTrolls[Math.floor(Math.random() * foundInTheTrolls.length)];
        };

        function inTheForgottenCastle() {
            return foundInTheMagicalForest[Math.floor(Math.random() * foundInTheMagicalForest.length)];
        };

        var theMagicalForest = inTheMagicalForest();
        var theOldBay = inTheOldBay();
        var theWitches = inTheWitches();
        var theTrolls = inTheTrolls();
        var theForgottenCastle = inTheForgottenCastle();

        DB.query(`SELECT * FROM currency WHERE id = '${message.author.id}'`, (err, result) => {
            
        let currBal = result[0].bal;
        let sql;
            
        function addCur(howMuch) {
            if(result.length < 1){
                return sql = `INSERT INTO currency (id, bal) VALUES ('${message.author.id}', ${howMuch})`;
            } else {
                return sql = `UPDATE currency SET bal = ${currBal + howMuch} WHERE id = '${message.author.id}';
        }
            
        if (location == "Old Bay") {
            if (theOldBay == "nothing") {
                amountOldBay = 0;
            }
            let embed = new Discord.RichEmbed()
                .setDescription(`${message.author}, you went to the ${location} and found ${theOldBay}! \n Selling for ${amountOldBay} 🍵`)
                .setColor("BLUE");
            message.channel.send(embed);

            addCur(amountOldBay);

        } else if (location == "Magical Forest") {
            if (theMagicalForest == "nothing") {
                amountMagicalForest = 0;
            }
            let embed = new Discord.RichEmbed()
                .setDescription(`${message.author}, you went to the ${location} and found ${theMagicalForest}! \n Selling for ${amountMagicalForest} 🍵`)
                .setColor("GREEN");
            message.channel.send(embed);

            addCur(amountMagicalForest);

        } else if (location == "witches") {
            if (theWitches == "nothing") {
                amountWitches = 0;
            }
            let embed = new Discord.RichEmbed()
                .setDescription(`${message.author}, you went to the ${location} and found ${theWitches}! \n Selling for ${amountWitches} 🍵`)
                .setColor("PURPLE");
            message.channel.send(embed);

            addCur(amountWitches);

        } else if (location == "trolls") {
            if (theTrolls == "nothing") {
                amountTrolls = 0;
            }
            let embed = new Discord.RichEmbed()
                .setDescription(`${message.author}, you went to the ${location} and found ${theTrolls}! \n Selling for ${amountTrolls} 🍵`)
                .setColor("GREEN");
            message.channel.send(embed);

            addCur(amountTrolls);

        } else if (location == "Forgotten Castle") {
            if (theForgottenCastle == "nothing") {
                amountForgottenCastle = 0;
            }
            let embed = new Discord.RichEmbed()
                .setDescription(`${message.author}, you went to the ${location} and found ${theForgottenCastle}! \n Selling for ${amountForgottenCastle} 🍵`)
                .setColor("GRAY");
            message.channel.send(embed);

            addCur(amountForgottenCastle);

        }
        });

        talkedRecently.add(message.author.id);
        setTimeout(() => {
            // Removes the user from the set after a minute
            talkedRecently.delete(message.author.id);
        }, 60000);

        DB.query(sql, "ADDED RECORD SKSKSK");
        });
    }

}

module.exports.help = {
    name: "earn"
}
