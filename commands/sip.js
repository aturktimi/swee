const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**Sunucu IP** **:** **server.sampturkiyecnr.com**\n
                         **Sunucu Sayısal IP** **:** **195.85.201.182**`)
        .setColor("RANDOM")
    
     await message.channel.send({
        embed: embed
    })
}
exports.conf = {
    aliases: ["sip","ip"]
}

exports.help = {
    name: "sip"
}