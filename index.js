const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Help please")
});

client.on("message", function(message) {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login(process.env.BOT_TOKEN);
