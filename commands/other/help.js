const Discord = require("discord.js"),
disbut = require("discord-buttons");

exports.run = async (client, message, args) => {
    var help = new Discord.MessageEmbed()
    .setTitle ("Hisako Help")
    .setDescription(`I'm Hisako! I am a growing discord Anime bot and can supply your server with lots of anime commands!`)
    .addField(':speech_balloon: Commands :', '`commands`')
    .addField(':question: Help Centre :', '`help`, `web`')
    .setTimestamp()
    .setColor("#FF0000")

    message.channel.send(help)
};

exports.help = {
  name: "help",
  description: "Give all commands of the bot.",
  usage: "help",
  example: "help"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};