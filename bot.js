const discord = require('discord.js')
const bot = new discord.Client();
var wl = ["762736239124021260"]

bot.on('ready', () => {
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
    bot.channels.cache.get("762736239576875041").send(bot.user.username);
  }, Math.random() * 100000)
  
  const hasLink = message.content.startsWith("http") && !message.content.includes("discord.com")
  
  if (hasLink) {
    message.delete();
    message.author.send(`Please don't send non-Discord links on ${message.guild.name}.`);
  }
})

bot.login(process.env.bot_token)
