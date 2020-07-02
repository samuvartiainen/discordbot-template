const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const client = new Discord.Client();
const path = require('path');
const prefix = '-';
 
const fs = require('fs');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(path.join(__dirname, '/commands'));
/*
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 */
 
bot.on('ready', () => {
    console.log('ValBot is online!');
});
 
bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        bot.commands.get('ping').execute(message, args);
    }

    else if(command === 'join'){
        bot.commands.get('join').execute(message, args);
    }
});
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
