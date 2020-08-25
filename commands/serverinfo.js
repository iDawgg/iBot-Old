const Discord = require('discord.js');

module.exports = {
	name:'serverinfo',
	cooldown: 3,
	description: 'Displays information about the server.',
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setColor('#00e59c')
			.setTitle(`Server Info for __${message.guild.name}__`)
			.setThumbnail(message.guild.iconURL())
			.addFields(
				{ name: 'Owner', value: `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, inline: true },
				{ name: 'Total Members', value: `${message.guild.memberCount}`, inline: true },
				{ name: 'Server Region', value: `${message.guild.region}`, inline: true },
				{ name: 'Verification Level', value: `${message.guild.verificationLevel}`, inline: true },
				{ name: 'Server ID', value: `${message.guild.id}`, inline: true },
				{ name: 'Server Creation Date', value: `${message.guild.createdAt}` },
			)
			.setTimestamp()
			.setFooter('beep boop i am a robot');

		message.channel.send(embed);
	},
};