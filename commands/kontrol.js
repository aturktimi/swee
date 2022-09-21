const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {

let csonline = message.guild.members.cache.filter(cs => cs.presence.status === "online").size
let csdnd = message.guild.members.cache.filter(cs => cs.presence.status === "dnd").size
let csidle = message.guild.members.cache.filter(cs => cs.presence.status === "idle").size
let csoff = message.guild.members.cache.filter(cs => cs.presence.status === "offline").size

let css = csonline+csidle+csdnd
let cse = new Discord.MessageEmbed()
.setTitle(message.guild.name+" Üye Durumları")
.setColor("GREEN")
.setThumbnail(message.guild.iconURL())
.addField("Toplam Online", `\`${csonline}\``)
.addField("Toplam DND", `\`${csdnd}\``)
.addField("Toplam Idle", `\`${csidle}\``)
.addField("Toplam Offline", `\`${csoff}\``)
.addField("Toplam Durum", `\`${css}\``)
.addField("Toplam Üye", `\`${message.guild.memberCount}\``)
.setFooter('cnr')
.setTimestamp()
if(message.channel.id === "887751884033622046")
message.channel.send(cse)
}
module.exports.conf = {
aliases: [],
permLevel: 2
}

module.exports.help = {
name: "kontrol"
}