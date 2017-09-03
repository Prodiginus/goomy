const { Command } = require('discord.js-commando');

module.exports = class multiply extends Command {
    constructor(client) {
        super(client, {
            name: 'multiply',
            group: 'math',
            memberName: 'multiply',
            description: 'multiplys numbers',
            args: [{
                key: 'numbers',
                prompt: 'You need to add a base number',
                type: 'integer',
                infinite: true
            }]
        });
    }

    async run(message, args) {

        let { numbers } = args;

        let numArray = args.numbers.map(n => parseInt(n));

        let total = numArray.reduce((p, c) => p * c);

        message.channel.send(total);
    }
}