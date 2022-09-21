
const Discord = require("discord.js");
const db = require("quick.db")
const client = new Discord.Client();
const { Client, Util } = require("discord.js");
const disbut = require('discord-buttons')(client);
const fs = require("fs");
require("./util/eventLoader")(client);

client.ayarlar = { 
"prefix": "/", // prefix
"sahip": "951158611910991913",// sahip
} 


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  const data = require('quick.db');
  console.log('')
  console.log(`${files.length} kadar komut yüklenecek.`)
  files.forEach(async f => {
    let props = require(`./commands/${f}`);
    console.log(`Yüklendi: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log('Hazır')

});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.permissions.has("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2;
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 2;
  if (message.author.id === message.guild.owner.id) permlvl = 4;
  return permlvl;
};

client.login(process.env.token);
const moment = require('moment');
moment.locale('tr');
const { S_IFREG } = require("constants");
const data = require('quick.db');
const logs = require('discord-logs');
logs(client);
 
client.on("ready", () => {
  setInterval(() => {
    const Gamedig = require("gamedig");
    Gamedig.query({
      type: "samp",
      host: "195.85.201.182",
    }).then((state) => {
      client.user.setActivity(`Online CnR Players: ${state.players.length}`);
    });
  }, 15000);
});

client.on("message", m => {
  if (m.channel.id !== "992403852945006653") { //ID Yazın
    return;
  }
  if (m.author.id === m.guild.ownerID && client.user.id) return;
  if (m.attachments.size < 1) {
    m.delete()
  }
});

client.on("message" , async message => {
if(message.channel.id !== "609115516556148756") return;
message.react('👍')
message.react('👎')
})

