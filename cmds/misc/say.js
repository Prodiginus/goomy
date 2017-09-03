const { Command } = require('discord.js-commando');

module.exports = class say extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'misc',
            memberName: 'say',
            description: 'Get the bot to say what you want',
            args: [{
                key: 'text',
                prompt: 'What text would you like the bot to say?',
                type: 'string'
            }]
        });
    }

    async run(message, args) {

        let { text } = args;

        message.delete()

        return message.channel.send(`\u180E${text}`);

    }
}