module.exports = {
	name: 'kick',
	cooldown: 3,
	description: 'Tags a member and kicks them [but not really ( ͡° ͜ʖ ͡°)].',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you didnt tag a person');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`**You wanted to kick:** __${taggedUser.username}#${taggedUser.discriminator}__ but i dont know how to code that rn lol`);
	},
};
