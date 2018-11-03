const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const botconfig = require("./botconfig.json");
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;
const prefix = "!";

var options = [
  "Hello! 💓 ",
  "Hey there! 💓 ",
  "Hi! 💓 "
];

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
    var response = Math.floor((Math.random() * options.length) + 0);
    message.channel.send(response + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "hi") {
    var response = Math.floor((Math.random() * options.length) + 0);
    message.channel.send(response + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "test") {
    message.channel.send("oki " + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "no u") {
    message.channel.send("<:notlikemiya:507566109528948744>");
  }
});

bot.on("message", function(message) {
  if (message.content === "Hi") {
    var response = Math.floor((Math.random() * options.length) + 0);
    message.channel.send(response + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "Hello") {
    var response = Math.floor((Math.random() * options.length) + 0);
    message.channel.send(response + message.author.toString());
  }
});

bot.on("message", function(message) {
  if (message.content === "mc dm me") {
    message.author.send("Do you need something?");
  }
});

bot.on("message", function(message) {
  if (message.content === "mc pm me") {
    message.author.send("Do you need something?");
  }
});

bot.on("message", function(message) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === "ping") {
message.channel.send("Pong! ```Calculating your ping...```")
  .then((msg) => {
    setTimeout(function() {
    msg.edit("Your ping is: ```" + new Date().getTime() - message.createdTimestamp + "```" + " ms");
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
