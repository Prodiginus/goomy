const { Command } = require('discord.js-commando');
const config = require('../../config.json');

module.exports = class setstatus extends Command {
    constructor(client) {
        super(client, {
            name: 'setstatus',
            group: 'owner',
            memberName: 'setstatus',
            description: 'sets the bots status',
            args: [{
                key: "status",
                prompt: "You have to set a presence",
                type: "string",
                default: "online"
            }]
        });
    }

    async run(message, args) {

        let status = args;

        if (message.author.id == config.ownerID) {

            this.client.user.setStatus(args.status)

        } else {

            return;
        }
    }
}