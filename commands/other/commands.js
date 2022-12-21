const Discord = require("discord.js"),
disbut = require("discord-buttons");

exports.run = async (client, message, args) => {
    var help = new Discord.MessageEmbed()
    .setTitle ('Hisako Commands :')
    .setDescription(`Bot Prefix : ${client.config.prefix}\nList of commands :`)
    .addField('NSFW Commands :underage: :', '`ass`, `boobs`, `hanal`, `hass`, `hboobs`, `hentai`, `hkitsune`, `hmidriff`, `hneko`, `neko`, `pgif`, `pussy`, `yaoi`')
    .addField('Other Commands :', '`help`, `stats`')
    .setTimestamp()
    .setColor("#FF0000")

    message.channel.send(help)
};

exports.help = {
  name: "commands",
  description: "Give all commands of the bot.",
  usage: "commands",
  example: "commands"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};