const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", function(message) {
  if (message.content === "pok") {
    message.reply("pong");
  }
});

client.login(process.env.BOT_TOKEN);
