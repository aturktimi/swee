const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle(client.user.username+" Yardım Menüsü")
          .setDescription(
    `             **SA:MP Türkiye CnR**
\`🔴/kb🔴\` : **DC kullanıcı bilgilerini gösterir.**\n
\`🔴/sip-/ip🔴\` : **Sunucu İP gösterir.**\n
\`🔴/yt🔴\` : **Youtube kanal link gösterir.**\n
\`🔴/market🔴\` : **Market link gösterir.**\n
\`🔴/gta🔴\` : **Gta link gösterir.**\n
\`🔴/iliskilendir [kod]🔴\` : **Oyun hesabını discord ile ilişkilendirme.**\n
\`🔴/bilgi [nick]🔴\` : **Kisinin istatisliklerini gosterir.**\n
\`🔴/Kaçcm🔴\` : **Malafatınızı ölçer.**\n
\`🔴/gay🔴\` : **Yüzde Kaç Gay olduğunuzu gösterir.**\n

`)
    .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://2.bp.blogspot.com/-rE8MrO_9OPE/UhH_f_7T6nI/AAAAAAAAHig/YLIuv_bYiCE/s400/267.gif')
    .setColor("BLUE")
   if(message.channel.id === "887751884033622046")
    
     await message.channel.send({
        embed: embed
    })
}
exports.conf = {
    aliases: ["yardım"]
}

exports.help = {
    name: "yardım"
}