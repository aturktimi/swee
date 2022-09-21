const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**:video_game:Gta Linki.**`)
        .setColor("RANDOM")

    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("Gta Link")
        .setURL(`https://dosya.co/gsqr4y627svt/SAMP_Turkiye_CnR.rar.html`)

    await message.channel.send({
        buttons: btn,
        embed: embed
    })
}
exports.conf = {
    aliases: ["gta"]
}

exports.help = {
    name: "gta"
}