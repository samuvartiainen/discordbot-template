const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]},
);

// client.commands = new Collection();
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	client.commands.set(command.data.name, command);
// }

client.once('ready', () => {
	console.log('On');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

// Don't leak your BOT_TOKEN!
client.login(process.env.BOT_TOKEN);
