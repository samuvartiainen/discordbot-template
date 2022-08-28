const { SlashCommandBuilder } = require('@discordjs/builders');
const {
	createAudioPlayer,
	VoiceConnectionStatus,
	createAudioResource,
	StreamType,
	entersState,
} = require('@discordjs/voice');

const player = createAudioPlayer();

const {
	joinVoiceChannel,
} = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Bot will join voice channel'),
	async execute(interaction) {
		const connection = await joinvoice(interaction);

		const resource = createAudioResource('./music/join.mp3', {
			inputType: StreamType.Arbitrary,
		});
		player.play(resource);
		connection.subscribe(player);

		await interaction.reply('Hehexd');
	},
};

const joinvoice = async (interaction) => {
	const voiceChannel = interaction.member.voice.channel;
	const guild_id = interaction.guildId;
	const channel = interaction.channel;

	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: guild_id,
		adapterCreator: channel.guild.voiceAdapterCreator,
	});

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
		return connection;
	} catch (error) {
		connection.destroy();
		throw error;
	}
};