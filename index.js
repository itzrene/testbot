const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const botconfig = require("./botconfig.json");

var leaveMessages = [
  "didn't really like it here :(",
  "has left, bye",
  "what a.. nevermind!",
  "has left the server!",
  "has left, maybe they will come back.."
];

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("message", function(message) {
  if (message.content === "hello") {
    message.channel.send("Hello! 💓 " + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "hi") {
    message.channel.send("Hello! 💓 " + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "test") {
    message.channel.send("oki " + message.author.toString());
  }
});

bot.on("message", (message) => {

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "8ball") {
    var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Definitely!",
    "Ask me later..",
    "Fuck u",
    "I'm not sure",
    "Probably",
    "I doubt..",
    "Who? Me?",
    "Sorry, I'm too lazy to answer",
    "I thought you know the answer"
    ];

    var result = Math.floor((Math.random() * fortunes.length) + 0);

    const embed = new Discord.RichEmbed()
  .setColor(0xb798f2)
  .setThumbnail("http://iconbug.com/data/95/256/8696325e0e7407823058632e68fb5970.png")
  .setTitle("Results:")
  .addField("Q:", args)
  .addField("A:", fortunes[result]);
  message.channel.send({embed});

  }

});

bot.on("message", (message) => {

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "pickle") {
    var size = [
    "1 inch",
    "2 inch",
    "3 inch",
    "4 inch",
    "5 inch",
    "6 inch",
    "7 inch",
    "8 inch",
    "9 inch",
    "10 inch",
    "11 inch",
    "You don't have a pickle :("
    ];

    var result = Math.floor((Math.random() * size.length) + 0);

    const embed = new Discord.RichEmbed()
  .setColor(0xb798f2)
  .setTitle("Results:")
  .addField("Your pickle size is: ", size[result]);
  message.channel.send({embed});

  }

});

bot.on("guildMemberAdd", member => {
  member.guild.channels.get("506563742352277507").send(member.user.toString() + " welcome to **ᴄ ʜ ɪ ʟ ʟ    ᴄ ᴏ ᴜ ɴ ᴛ ʏ**! Make sure to check out #welcome for any information, or ask a staff member! 💓 Enjoy your stay!");
});

bot.on("guildMemberRemove", member => {
  member.guild.channels.get("506551891841253406").send("**" + member.user.username + "** " + leaveMessages[Math.floor(Math.random() * leaveMessages.length)]);
});

bot.on("ready", () => {

  client.user.setGame("| 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸")

});

client.login(process.env.BOT_TOKEN);
