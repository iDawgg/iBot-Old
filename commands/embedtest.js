const Discord = require('discord.js');

module.exports = {
	name: 'embedtest',
	description: 'Tests embeds.',
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setColor('#00e59c')
			.setTitle('why')
			.setURL('https://www.youtube.com/watch?v=PV3_UHG73oQ')
			.setAuthor('a fucking idiot', 'https://lh3.googleusercontent.com/proxy/C70P_cGyS6nNKk-ioJw73ePmvGn6nfhSWWPv6bW521i9D1T9BAJZr3G7ETnkxsVlJX44t_lfxfswG5CF0Y-TdCK2HZeaMLmNQEGwjRznJplvJF0UOoYKxOscmZwhLCXsAdUIi8Q', 'https://www.youtube.com/watch?v=PV3_UHG73oQ')
			.setDescription('you piece of shit how did you think you were gonna get your learners permit without your original social security card you dumbfuck now you\'re gonna have to get a replacement social security card and reschedule the appointment for another time you absolute fucking dumbass piece of shit idiot')
			.setThumbnail('https://lh3.googleusercontent.com/proxy/C70P_cGyS6nNKk-ioJw73ePmvGn6nfhSWWPv6bW521i9D1T9BAJZr3G7ETnkxsVlJX44t_lfxfswG5CF0Y-TdCK2HZeaMLmNQEGwjRznJplvJF0UOoYKxOscmZwhLCXsAdUIi8Q')
			.addFields(
				{ name: 'you\'re an idiot', value: '[idiot](https://www.youtube.com/watch?v=PV3_UHG73oQ)' },
			)
			.addField('just shut the fuck up', '[shut up](https://www.youtube.com/watch?v=nc_LIR5ExIU)', true)
			.setImage('https://lh3.googleusercontent.com/proxy/C70P_cGyS6nNKk-ioJw73ePmvGn6nfhSWWPv6bW521i9D1T9BAJZr3G7ETnkxsVlJX44t_lfxfswG5CF0Y-TdCK2HZeaMLmNQEGwjRznJplvJF0UOoYKxOscmZwhLCXsAdUIi8Q')
			.setTimestamp()
			.setFooter('beep boop. beeeep. bitch.', 'https://lh3.googleusercontent.com/proxy/C70P_cGyS6nNKk-ioJw73ePmvGn6nfhSWWPv6bW521i9D1T9BAJZr3G7ETnkxsVlJX44t_lfxfswG5CF0Y-TdCK2HZeaMLmNQEGwjRznJplvJF0UOoYKxOscmZwhLCXsAdUIi8Q');

		message.channel.send(embed);
	},
};