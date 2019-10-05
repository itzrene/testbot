const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    function emojify(str) {
    	if (typeof str === 'string') {
    		return Array.prototype.map.call(str, (e, i, a) => {
    			if (/[aA][bB]/.test(e+a[i+1])) {
    				return ':ab:';
    			} else if (/[oO]/.test(e)) {
    				return ':o2:';
    			} else if (/[aA]/.test(e)) {
    				return ':a:';
    			} else if (/[bB]/.test(e)) {
    				if (/[aA]/.test(a[i-1])) {
    					return;
    				} else {
    					return ':b:';
    				}
    			} else if (/[a-zA-Z]/.test(e)) {
    				return ':regional_indicator_' + e.toLowerCase() + ':'
    			} else {
    				return e;
    			}
    		}).join('\u200C');
    	} else {
    		throw new TypeError('argument is not a string');
    	}
    }
    
    if (args.length >= 0) {
        emojify("hi");
        message.channel.send(embed);
    }

}

module.exports.help = {
    name: "emojify"
}

