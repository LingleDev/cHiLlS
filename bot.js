const discord = require('discord.js')
const bot = new discord.Client();
var wl = ["762736239124021260"]

bot.on('ready', () => {
  bot.user.setActivity(`over we talk or whatever`, { type: "WATCHING" })
  
  console.log(bot.user.username+' is ready!');
  
  console.log("Checking bot guilds for non-whitelisted guilds...");
  
  bot.guilds.cache.forEach((g,i) => {
    if (!wl.includes(i)) {
      console.log(`Left guild ${g.name} because it's not whitelisted.`)
      return g.leave();
    }
  })
})

bot.on('message', message => {
  setInterval(() => {
    bot.channels.cache.get("763491661019349052").send(bot.user.username);
  }, Math.random() * 10000000)
  
  const hasLink = message.content.startsWith("http") && !message.content.includes("discord.com") && !message.content.includes("discordapp.com") && !message.content.includes("hulkbot-dashboard.ml") && !message.content.includes('boatspace.ml');
  
  if (hasLink) {
    message.delete();
    message.author.send(`Please don't send non-Discord links on **${message.guild.name}**.`);
  }
})

bot.login(process.env.bot_token)
