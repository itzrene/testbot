const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

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
    message.channel.send("Hello! 💓 " + message.author.toString());
  }
});

client.on("message", function(message) {
  if (message.content === "test") {
    message.channel.send("ok " + message.author.toString());
  }
});

client.on("message", (message) => {

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "8ball") {
    var fortunes = ["Yes", "No", "Maybe", "Probably no", "Probably yes"]

    var result = Math.floor((Math.random() * fortunes.length) + 0);

    const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setThumbnail("http://iconbug.com/data/95/256/8696325e0e7407823058632e68fb5970.png")
  .setTitle("Results:")
  .addField(args, fortunes[result], true)
  message.channel.send({embed});

  }

});

client.on("guildMemberAdd", member => {
  member.guild.channels.get("455016389556568084").send(member.user.toString() + " welcome to **ᴄ ʜ ɪ ʟ ʟ    ᴄ ᴏ ᴜ ɴ ᴛ ʏ**! Make sure to check out #welcome for any information, or ask a staff member! 💓 Enjoy your stay!");
});

client.on("guildMemberRemove", member => {
  member.guild.channels.get("455016389556568084").send("**" + member.user.username + "** " + leaveMessages[Math.floor(Math.random() * leaveMessages.length)]);
});

client.on("ready", () => {

  client.user.setGame("| 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸")

});

client.login(process.env.BOT_TOKEN);
