const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", function(message) {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.on("guildMemberAdd", member => {
  member.guild.channels.get("welcome_leave").send("**" + member.user.username + "** has joined the server!");
})

client.login(process.env.BOT_TOKEN);
