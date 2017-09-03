const { Command } = require('discord.js-commando');

module.exports = class roll extends Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'fun',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send(`you rolled a ${roll}`);
    }
}