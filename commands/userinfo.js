const Discord = require('discord.js');

module.exports = {
	name: 'userinfo',
	cooldown: 3,
	description: 'Shows info about yourself.',
	execute(message) {
		function getJoinRank(ID, guild) {
			const arr = guild.members.cache.array();
			arr.sort((a, b) => a.joinedAt - b.joinedAt);

			for (let i = 0; i < arr.length; i++) {
				if (arr[i].id == ID) return i;
			}
		}

		const roles = message.member.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1);

		const embed = new Discord.MessageEmbed()
			.setColor('#00e59c')
			.setTitle(`User Info for __${message.author.username}#${message.author.discriminator}__`)
			.setThumbnail(message.author.avatarURL())
			.addFields(
				{ name: 'Acct. Creation Date', value: `${message.author.createdAt}`, inline: true },
				{ name: 'Server Join Date', value: `${message.member.joinedAt}`, inline: true },
				{ name: 'Server Join Position', value: getJoinRank(message.author.id, message.guild), inline: true },
				{ name: 'User ID', value: `${message.author.id}`, inline: true },
				{ name: `User Roles (${roles.length})`, value: roles.join(', ') },
			)
			.setTimestamp()
			.setFooter('beep boop i am a robot');

		message.channel.send(embed);
	},
};