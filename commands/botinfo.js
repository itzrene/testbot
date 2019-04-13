const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os');
const config = require("../botconfig.json");
let color = config.color;

module.exports.run = (bot, msg, args) => {

    const duration = moment.duration(bot.uptime).format("D[d] H[h] m[m] s[s]");
    const sysDuration = moment.duration(os.uptime()*1000).format("D[d] H[h] m[m] s[s]");

    const embed = new Discord.RichEmbed()
        .setTitle("**Magical Creature: 2.0**")
        .addField("Cached Guilds", "`" + bot.guilds.size + "`", true)
        .addField("Cached Channels", "`" + bot.channels.size + "`", true)
        .addField("Cached Members", "`" + bot.users.size + "`", true)
        .addField("Ping", "`" + bot.ping.toFixed(0) + "ms`", true)
        //.addField('Users in Database', bot.storage[1].users, true) // need to add the storage
        //.addField('RAM Usage', `${(bot.memoryUsage().rss / 1048576).toFixed()}MB/${(os.totalmem() > 1073741824 ? `${(os.totalmem() / 1073741824).toFixed(1)} GB` : `${(os.totalmem() / 1048576).toFixed()} MB`)} (${(process.memoryUsage().rss / os.totalmem() * 100).toFixed(2)}%)`, true)
        .addField("System Time", "`" + new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"}) + "`", true)
        .addField("System Uptime", "`" + sysDuration + "`", true)
        .addField("Process Uptime", "`" + duration + "`", true)
        .setFooter("Created by Change yourself ♡ (레네)#8130")
        .setColor(color);
    msg.channel.send({ embed });
};

module.exports.help = {
    name: "botinfo"
};