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
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

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
