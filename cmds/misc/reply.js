const { Command } = require('discord.js-commando');

module.exports = class reply extends Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            group: 'misc',
            memberName: 'reply',
            description: 'Replies with a Message.'
        });
    }

    async run(msg) {

        return msg.say('Hi, I\'m awake!');

    }
};