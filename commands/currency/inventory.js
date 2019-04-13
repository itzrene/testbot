const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    let author = message.author.id;


    let aPotato = db.get(`inventoryPotato_${message.author.id}`);
    let aGrape = db.get(`inventoryGrape_${message.author.id}`);
    let aCactus = db.get(`inventoryCactus_${message.author.id}`);
    let aRose = db.get(`inventoryRose_${message.author.id}`);
    let aShell = db.get(`inventoryShell_${message.author.id}`);
    let aUnicorn = db.get(`inventoryUnicorn_${message.author.id}`);
    let aDiamond = db.get(`inventoryDiamond_${message.author.id}`);
    let aRing = db.get(`inventoryRing_${message.author.id}`);
    let aBoat = db.get(`inventoryBoat_${message.author.id}`);
    let aCastle = db.get(`inventoryCastle_${message.author.id}`);

    let tPotato = db.get(`inventoryPotato_${message.author.id}`);
    let tGrape = db.get(`inventoryGrape_${message.author.id}`);
    let tCactus = db.get(`inventoryCactus_${message.author.id}`);
    let tRose = db.get(`inventoryRose_${message.author.id}`);
    let tShell = db.get(`inventoryShell_${message.author.id}`);
    let tUnicorn = db.get(`inventoryUnicorn_${message.author.id}`);
    let tDiamond = db.get(`inventoryDiamond_${message.author.id}`);
    let tRing = db.get(`inventoryRing_${message.author.id}`);
    let tBoat = db.get(`inventoryBoat_${message.author.id}`);
    let tCastle = db.get(`inventoryCastle_${message.author.id}`);

    if(aPotato == null) {
        db.set(`inventoryPotato_${message.author.id}`, 0);
    }
    if(aGrape == null) {
        db.set(`inventoryGrape_${message.author.id}`, 0);
    }
    if(aCactus == null){
        db.set(`inventoryCactus_${message.author.id}`, 0);
    }
    if(aRose == null){
      db.set(`inventoryRose_${message.author.id}`, 0);
    }
    if(aShell == null){
       db.set(`inventoryShell_${message.author.id}`, 0);
    }
    if(aUnicorn == null){
       db.set(`inventoryUnicorn_${message.author.id}`, 0);
    }
    if(aDiamond == null){
       db.set(`inventoryDiamond_${message.author.id}`, 0);
    }
    if(aRing == null){
       db.set(`inventoryRing_${message.author.id}`, 0);
    }
    if(aBoat == null){
       db.set(`inventoryBoat_${message.author.id}`, 0);
    }
    if(aCastle == null){
        db.set(`inventoryCastle_${message.author.id}`, 0);
    }

//db.get(`inventoryPotato_${author}`
    if(!args[0]) {
        let embed = new Discord.RichEmbed()
            .setAuthor("Your inventory", message.author.avatarURL)
            .addField("🥔 **potato**", `${aPotato}`, true)
            .addField("🍇 **grape**", `${aGrape}`, true)
            .addField("🌵 **cactus**",`${aCactus}`, true)
            .addField("🌹 **rose**", `${aRose}`, true)
            .addField("🐚 **shell**", `${aShell}`, true)
            .addField("🦄 **unicorn**", `${aUnicorn}`,true)
            .addField("💎 **diamond**", `${aDiamond}`,true)
            .addField("💍 **ring**", `${aRing}`, true)
            .addField("🛳 **boat**",`${aBoat}`,true)
            .addField("🏰 **castle**", `${aCastle}`, true)
            .setFooter("Example how to buy someone a gift: !buy @user <item>")
            .setColor(color);

        message.channel.send(embed);

    } else {
        let target = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
            .setAuthor( target.user.username + "'s inventory", target.user.avatarURL)
            .addField("🥔 **potato**", `${tPotato}`,true)
            .addField("🍇 **grape**", `${tGrape}`,true)
            .addField("🌵 **cactus**", `${tCactus}`,true)
            .addField("🌹 **rose**", `${tRose}`,true)
            .addField("🐚 **shell**",`${tShell}`,true)
            .addField("🦄 **unicorn**",`${tUnicorn}`,true)
            .addField("💎 **diamond**", `${tDiamond}`,true)
            .addField("💍 **ring**", `${tRing}`,true)
            .addField("🛳 **boat**", `${tBoat}`,true)
            .addField("🏰 **castle**", `${tCastle}`,true)
            .setFooter("Example how to buy someone a gift: !buy @user <item>")
            .setColor(color);

        message.channel.send(embed);

        if(tPotato == null) {
            db.set(`inventoryPotato_${target.id}`, 0);
        }
        if(tGrape == null) {
            db.set(`inventoryGrape_${target.id}`, 0);
        }
        if(tCactus == null){
            db.set(`inventoryCactus_${target.id}`, 0);
        }
        if(tRose == null){
            db.set(`inventoryRose_${target.id}`, 0);
        }
        if(tShell == null){
            db.set(`inventoryShell_${target.id}`, 0);
        }
        if(tUnicorn == null){
            db.set(`inventoryUnicorn_${target.id}`, 0);
        }
        if(tDiamond == null){
            db.set(`inventoryDiamond_${target.id}`, 0);
        }
        if(tRing == null){
            db.set(`inventoryRing_${target.id}`, 0);
        }
        if(tBoat == null){
            db.set(`inventoryBoat_${target.id}`, 0);
        }
        if(tCastle == null){
            db.set(`inventoryCastle_${target.id}`, 0);
        }
    }

}

module.exports.help = {
    name: "inventory"
}
