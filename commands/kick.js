module.exports = {
	name: 'kick',
	cooldown: 3,
	description: 'Tags a member and kicks them [but not really ( ͡° ͜ʖ ͡°)].',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them you idiot piece of bitch');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`**You wanted to kick:** __${taggedUser.username}#${taggedUser.discriminator}__ but no you can't right now you dumb fucking idiot you don't even know how to code to kick yet you dumb fuck clown`);
	},
};