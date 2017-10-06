const { Command } = require('discord.js-commando');
const config = require('../../config.json');

module.exports = class destroy extends Command {
    constructor(client) {
        super(client, {
            name: 'destroy',
            group: 'owner',
            memberName: 'destroy',
            description: 'destroys the bots instance',
        });
    }

    async run(message, args) {

        if (message.author.id == config.ownerID) {
          this.client.destroy()
        }
    }
}