const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });

})

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

client.on("guildMemberAdd", member => {
  member.guild.channels.get("455016389556568084").send(member.user.toString() + " welcome to **ᴄ ʜ ɪ ʟ ʟ    ᴄ ᴏ ᴜ ɴ ᴛ ʏ**! Make sure to check out #welcome for any information, or ask a staff member! 💓 Enjoy your stay!");
});

client.on("guildMemberRemove", member => {
  member.guild.channels.get("455016389556568084").send("**" + member.user.username + "** " + leaveMessages[Math.floor(Math.random() * leaveMessages.length)]);
});

client.login(process.env.BOT_TOKEN);
