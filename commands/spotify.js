const Discord = require("discord.js");
const config = require("../botconfig.json");
let color = config.color;


module.exports.run = async (bot, message, args, member) => {
    var user = message.mentions.users.first() || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify track info')
                .setThumbnail(trackImg)
                .setDescription(`**Song name :**  \`${trackName}\`\n**Album :**  \`${trackAlbum}\`\n**Author(s) :**  \`${trackAuthor}\``)
                .addField('Listen to this track :', `[${trackUrl}](${trackUrl})`, false)
                .setColor(color);
            return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, ${user.username} may not be listening to a registered sound`);
        }

    } else {
        return message.channel.send(`${user.username} is not listening to spotify`);
    }
}

module.exports.help = {
    name: "spotify"
}