const Discord = require("discord.js");
const config = require("../../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    if(!args[0]) {
        let embed = new Discord.RichEmbed()
            .setTitle("**Shop**")
            .setDescription("**Example:** `!shop roles`")
            .addField("**1.**","`roles`")
            .addField("**2.**","`items`")
            .setColor(color)

        message.channel.send(embed);
    } else if(args[0] == "roles"){
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`There are no roles to buy!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else if(args[0] == "items"){
        let embed = new Discord.RichEmbed()
            .setTitle("**Shop**")
            .setDescription("**Example:** `!buy @user <item>`")
            .addField("🥔 **potato**","`10`")
            .addField("🍇 **grape**","`50`")
            .addField("🌵 **cactus**","`150`")
            .addField("🌹 **rose**","`300`")
            .addField("🐚 **shell**","`650`")
            .addField("🦄 **unicorn**","`1250`")
            .addField("💎 **diamond**","`3000`")
            .addField("💍 **ring**","`7000`")
            .addField("🛳 **boat**","`15000`")
            .addField("🏰 **castle**","`30000`")
            .setColor(color)

        message.channel.send(embed);
    }

}

module.exports.help = {
    name: "shop"
}
