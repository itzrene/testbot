const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const botconfig = require("./botconfig.json");
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;
const prefix = "!";

var jimp = require('jimp');
var images = ["images/wallpaper.jpg", "images/jNW7uL4Q.png"];

var jimps = [];

bot.on("message", function(message) {
  if (message.content.toLowerCase() == "test") {
    message.channel.send("oki " + message.author.toString());

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function (data) {
      return Promise.all(jimps);
    }).then(function (data) {
      data[0].composite(data[1], 0, 0);
      data[0].composite(data[2], 0, 0);
      data[0].write("final-images/980x.png", function () {
        console.log("wrote the image")
        message.channel.send("ok", {file: "final-images/980x.png"});
      });
    });
  }
});

// don't forget to make the thing with discord channel and bot, for example it will send to some channel "the bot is online"
// or something

var leaveMessages = [
  "didn't really like it here :(",
  "has left, bye",
  "what a.. nevermind!",
  "has left the server!",
  "has left, maybe they will come back.."
];

const responseObject = {
  "hit or miss": "**I GuESs ThEY nEVeR MIsS HUH?!**",
  "rene": "Who?",
  "rene?": "Who?",
  "shen": "wha- cucumbers?",
  "shenny": "wha- cucumbers?",
  "shen?": "wha- cucumbers?",
  "shenny?": "wha- cucumbers?",
  "lol": "roflmaotntpmp",
  "do it": "**JUST DO IT!**",
  "jacob": "https://media.giphy.com/media/l0MYAs5E2oIDCq9So/giphy.gif"
};

bot.on("message", (message) => {
  if(responseObject[message.content.toLowerCase()]) {
    message.channel.send(responseObject[message.content.toLowerCase()]);
  }
});

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
  if (message.content.toLowerCase() == "hello") {
    message.channel.send("Hello! 💓 " + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content.toLowerCase() == "hi") {
    message.channel.send("Hello! 💓 " + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content.toLowerCase() == "test") {
    message.channel.send("oki " + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content.toLowerCase() == "no u") {
    message.channel.send("<:notlikemiya:507566109528948744>");
  }
});

bot.on("message", function(message) {
  if (message.content.toLowerCase() == "mc dm me") {
    message.author.send("Do you need anything?");
  }
});

bot.on("message", function(message) {
  if (message.content.toLowerCase() == "mc pm me") {
    message.author.send("Do you need anything?");
  }
});








bot.on("message", function(message) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    message.channel.send("Pong! ```Calculating your ping...```")
        .then((msg) => {
          setTimeout(function() {
            msg.edit("Your ping is: **" + (Date.now() - msg.createdTimestamp) + "** ms");
          }, 1000)});
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

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("| 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸", {type: "WATCHING"});

});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.login(process.env.BOT_TOKEN);
