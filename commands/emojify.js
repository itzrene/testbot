const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    const specialCodes = {
      '0': ':zero:',
      '1': ':one:',
      '2': ':two:',
      '3': ':three:',
      '4': ':four:',
      '5': ':five:',
      '6': ':six:',
      '7': ':seven:',
      '8': ':eight:',
      '9': ':nine:',
      '#': ':hash:',
      '*': ':asterisk:',
      '?': ':grey_question:',
      '!': ':grey_exclamation:',
      ' ': '   '
    }

    async run ({ t, author, channel }, text) {
        const emojified = text.toLowerCase().split('').map(letter => {
          if (/[a-z]/g.test(letter)) {
            return `:regional_indicator_${letter}: `
          } else if (specialCodes[letter]) {
            return `${specialCodes[letter]} `
          }
          return letter
        }).join('')
        channel.send(emojified)
      }

}

module.exports.help = {
    name: "emojify"
}

