const { Command } = require('discord.js-commando');

module.exports = class avatar extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'info',
            memberName: 'avatar',
            description: 'Sends the avatar of the mentioned user'
        });
    }

    async run(message, args) {

        let msg = await message.channel.send("Generating avatar...");

        await message.channel.send(message.author.avatarURL)

        msg.delete();

    }
}