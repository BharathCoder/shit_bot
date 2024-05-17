const {Telegraf} = require('telegraf');
const bot = new Telegraf('7176199851:AAHvqeGBJyrD1Y3zShVH3mhBTjJufU3eavI');
const {message} = require('telegraf/filters')

bot.start((ctx)=>{
  ctx.reply('Hello');
})

bot.on(message('text'), (ctx)=>{
  ctx.reply(ctx.message.text);
});

bot.launch();

process.once('SIGINT', ()=>{ bot.stop('SIGINT') })
process.once('SIGTERM', ()=>{ bot.stop('SIGTERM') })
