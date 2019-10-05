const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const botconfig = require("./botconfig.json");
bot.commands = new Discord.Collection();
const db = require('quick.db');
let cooldown = new Set();
let cdseconds = 5;
const prefix = "!";
let color = botconfig.color;

//HALLOWEEN SPECIAL
bot.on("message", function(message) {
   if (message.content.toLowerCase() == "happy halloween") {
   let ok = Math.floor(Math.random() * 3) + 1;
     message.channel.send("Happy halloween! 🎃", {files: ["images/halloween/" + ok.toString() + ".jpg"]});
   }
});

bot.on("message", function(message) {
   if (message.content.toLowerCase() == "trick or treat") {
       let candies = Math.floor(Math.random() * 50) + 1;

        let embed = new Discord.RichEmbed()
        .setColor("0xEB6123")
        .setThumbnail("https://images-ext-2.discordapp.net/external/1AZHVkuyQjkYr0zxqUu2vWUP5RDW8mQo_8nryHS6pu4/https/media2.s-nbcnews.com/j/newscms/2014_40/695336/141001-halloween-candy-corn-1700_539e2169509dc704b46829727907d138.fit-760w.jpg")
        .setTitle("Happy halloween! 🎃")
        .addField("You got " + candies.toString() + " candies!", "🍫 🍬 🍬 🍭 🍫 🍬 🍭")

  message.channel.send(embed);
   }
});
//------------------------

bot.on("message", function(message) {
   if((message.channel.type === "dm" || message.channel.type === "group") && message.content.includes("feedback"))
    {
        message.author.send("Would you like to give feedback? (Yes/No)");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 30000});
        console.log(collector);
        collector.on('collect', newMessage => {
            if (newMessage.content.includes('yes') || newMessage.content.includes('Yes'))
            {
                message.author.send("Would you like to be anonymous? (Yes / No)");
                const anonCollect = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 30000});
                var nameString = "ANONYMOUS";
                console.log(anonCollect);
                anonCollect.on('collect', anonMessage => {
                    if (anonMessage.content.includes('yes') || anonMessage.content.includes('Yes'))
                    {
                        message.author.send("Your name will be kept in confidentiality.");
                    }
                    else if (anonMessage.content.includes('no') || anonMessage.content.includes('No'))
                    {
                        message.author.send("What's your name? Please don't put anything stupid. ");
                        const nameCollect = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 30000});
                        console.log(nameCollect);
                        nameCollect.on('collect', nameMessage => {
                            nameString = nameMessage.toString();
                        });
                    }
                });
                nameString += "\n\n";
                var responseString = "None.";
                message.channel.send("What would you like to give as feedback? You have 5 minutes to write whatever you need. (I highly recommend writing what you need to say before hand and pasting it into the chat with me) :");
                const responseCollect = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 1000 * 60 * 5});
                console.log(responseCollect);
                responseCollect.on('collect', responseMessage => {
                    responseString = responseMessage.toString();
                });
                message.channel.send("Wonderful! Thanks for your feedback! Your message will be sent to the Protocol Officer for review. Have a wonderful day! :smile: :heart: ");
                nameString += responseString;
               
            }
            else if (newMessage.content.includes('no') || newMessage.content.includes('No'))
            {
                message.author.send("Then have a great rest of your day! Here's a cat picture to make you feel wonderful! :smile: :heart:");
            }
        });
    }
});

bot.on("messageDelete", async message => {
  let logs = await message.guild.fetchAuditLogs({type: 72});

  let embed = new Discord.RichEmbed()
    .setTitle("**DELETED MESSAGE**")
    .addField("User:", message.author.tag, true)
    .addField("In:", message.channel, true)
    .addField("Message:", message.content)
    .setColor(color);

  let channel = message.guild.channels.find(x => x.name === 'magical-creature-logs');
  channel.send({embed});
});

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
  //"lol": "roflmaotntpmp",
  "do it": "**JUST DO IT!**",
  "jacob": "<:plshug:568758192558047242> https://media.giphy.com/media/l0MYAs5E2oIDCq9So/giphy.gif",
  "no u": "<:notlikemiya:507566109528948744>",
  "alex": "Which one?",
  "alex?": "Which one?"
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

fs.readdir("./commands/currency/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands/currency/.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/currency/${f}`);
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

bot.on("guildMemberAdd", member => {
  member.guild.channels.get("506563742352277507").send(member.user.toString() + " welcome to **ᴄ ʜ ɪ ʟ ʟ    ᴄ ᴏ ᴜ ɴ ᴛ ʏ**! Make sure to check out #welcome for any information, or ask a staff member! 💓 Enjoy your stay!");
});

bot.on("guildMemberRemove", member => {
  member.guild.channels.get("506551891841253406").send("**" + member.user.username + "** " + leaveMessages[Math.floor(Math.random() * leaveMessages.length)]);
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("| 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸", {type: "WATCHING"});
  let channel = bot.channels.get('508762004505362471');
  channel.sendMessage("Connected!");
  channel.sendMessage(`${bot.user.username} is online on ${bot.guilds.size} servers`);

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
