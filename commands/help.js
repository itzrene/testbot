const Discord = require("discord.js");
const config = require("../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    /**if(!args[0]) {
        let embed = new Discord.RichEmbed()
            .setTitle("**Help**")
            .setDescription("**Modules**")
            .addField("**1.**","`utility`")
            .addField("**2.**","`currency`")
            .addField("**2.**","`moderation`")
            .setFooter("Example: !help utility")
            .setColor(color)

        message.channel.send(embed);
    } else if(args[0] == "roles"){
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`There are no roles to buy!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else if(args[0] == "currency"){
        let embed = new Discord.RichEmbed()
            .setTitle("**Help for Currency**")
            .addField("!shop","")
            .setColor(color)

        message.channel.send(embed);
    }**/

    if(!args[0]) {
        let embed = new Discord.RichEmbed()
            .setTitle("**Help**")
            .addField("**Utility**", "`8ball, f, lmgtfy, meme, profile, quoote, report`")
            .addField("**Currency**", "`buy, bal, shop, daily (broken), earn, inventory, pay, slots`")
            .addField("**Moderation**", "`help moderation`")
            .setColor(color)

        message.channel.send(embed);
    } else {
        if(args[0] == "moderation"){
            if (!message.member.hasPermission('ADMINISTRATOR')) {
                let embed = new Discord.RichEmbed()
                    .setAuthor("ERROR", message.author.avatarURL)
                    .setDescription("`Insufficient permissions`")
                    .setColor(color);
                message.channel.send(embed).then(msg => msg.delete(5000));
            } else {
                let embed = new Discord.RichEmbed()
                    .setTitle("**Help for Moderation**")
                    .addField("**Moderation**", "`8ball, f, lmgtfy, meme, profile, quoote, report`")
                    .setColor(color)

                message.channel.send(embed);
            }
        }
    }

}

module.exports.help = {
    name: "help"
}
