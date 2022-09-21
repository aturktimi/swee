const { MessageEmbed } = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setDescription(`**💰Market Linki.**`)
        .setColor("RANDOM")

    const btn = new MessageButton()
        .setStyle("url")
        .setLabel("Market")
        .setURL(`https://www.shopier.com/ShowProductNew/storefront.php?shop=WayWare&sid=UkVLZDlidUNheTBzcm5FTTBfMV8gXyA=`)

    await message.channel.send({
        buttons: btn,
        embed: embed
    })
}
exports.conf = {
    aliases: ["market"]
}

exports.help = {
    name: "market"
}