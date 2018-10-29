const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log("Help please")
});

bot.on("message", function(message) {
  if (message.content === "ping me") {
    message.channel.sendMessage("Sure! <3 " + message.author.toString());
  }
});

bot.login(token);
