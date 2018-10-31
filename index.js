const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

if(cmd === `${prefix}report`){

  module.exports.run = async (bot, message, args) => {
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let rreason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);

      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);

      return;

    }

var leaveMessages = [
  "didn't really like it here :(",
  "has left, bye",
  "what a.. nevermind!",
  "has left the server!",
  "has left, maybe they will come back.."
];

client.on("message", function(message) {
  if (message.content === "hello") {
    message.channel.send("Hello! 💓 " + message.author.toString());
  }
});

client.on("message", function(message) {
  if (message.content === "hi") {
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

client.on("guildMemberAdd", member => {
  member.guild.channels.get("506563742352277507").send(member.user.toString() + " welcome to **ᴄ ʜ ɪ ʟ ʟ    ᴄ ᴏ ᴜ ɴ ᴛ ʏ**! Make sure to check out #welcome for any information, or ask a staff member! 💓 Enjoy your stay!");
});

client.on("guildMemberRemove", member => {
  member.guild.channels.get("506551891841253406").send("**" + member.user.username + "** " + leaveMessages[Math.floor(Math.random() * leaveMessages.length)]);
});

client.on("ready", () => {

  client.user.setGame("| 𝒶𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸")

});

client.login(process.env.BOT_TOKEN);
