const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", function(message) {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.on("message", function(message) {
  if (message.content === "hello") {
    message.channel.send("bye " + message.author.toString());
  }
});

client.on("guildMemberAdd", member => {
  member.guild.channels.get("455016389556568084").send("**" + member.user.toString() + "** has joined the server!");
});

client.on("guildMemberRemove", member => {
  member.guild.channels.get("455016389556568084").send("**" + member.user.toString() + "** has left the server!");
});

client.login(process.env.BOT_TOKEN);
