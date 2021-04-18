const Discord = require('discord.js');

module.exports = {
	name: 'embedtest',
	description: 'Tests embeds.',
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setColor('#00e59c')
			.setTitle('why')
			.setURL('https://www.youtube.com/watch?v=PV3_UHG73oQ')
			.setAuthor('yikes')
			.setDescription('test')
			.setThumbnail('https://lh3.googleusercontent.com/proxy/C70P_cGyS6nNKk-ioJw73ePmvGn6nfhSWWPv6bW521i9D1T9BAJZr3G7ETnkxsVlJX44t_lfxfswG5CF0Y-TdCK2HZeaMLmNQEGwjRznJplvJF0UOoYKxOscmZwhLCXsAdUIi8Q')
			.addField('test')
			.setTimestamp()
			.setFooter('beep boop. beeeep. bitch.');

		message.channel.send(embed);
	},
};
