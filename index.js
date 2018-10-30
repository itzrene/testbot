const Discord = require("discord.js");
const client = new Discord.Client();

var leaveMessages = [
  "didn't really like it here :(",
  "has left, bye",
  "what a.. nevermind!",
  "has left the server!",
  "has left, maybe they will come back.."
];

client.on("message", function(message) {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.on("message", function(message) {
  if (message.content === "hello") {
    message.channel.send("Hello! <3 " + message.author.toString());
  }
});

client.on("guildMemberAdd", member => {
  member.guild.channels.get("455016389556568084").send(member.user.toString() + " welcome to **ᴄ ʜ ɪ ʟ ʟ    ᴄ ᴏ ᴜ ɴ ᴛ ʏ**! Make sure to check out #welcome for any information, or ask a staff member! <3 Enjoy your stay!");
});

client.on("guildMemberRemove", member => {
  member.guild.channels.get("455016389556568084").send("**" + member.user.username + "** " + leaveMessages);
});

client.login(process.env.BOT_TOKEN);
