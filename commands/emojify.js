const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
    const OFFSET = '!'.charCodeAt(0);
    
        if (args.length < 1) {
            return message.channel.send("You must provide text to flip!");
        } else {

        message.channel.send(
            args.join(' ').split('')
                .map(c => c.charCodeAt(0) - OFFSET)
                .map(c => mapping[c] || ' ')
                .reverse().join('')
            );
        } 

}

module.exports.help = {
    name: ["flip", "bitch"]
}

