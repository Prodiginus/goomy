const { Command } = require('discord.js-commando');
const config = require('../../config.json');

module.exports = class setgame extends Command {
    constructor(client) {
        super(client, {
            name: 'setgame',
            group: 'owner',
            memberName: 'setgame',
            description: 'sets the bots game',
            args: [{
                key: "game",
                prompt: "You have to set a game for the bot to play",
                type: "string",
                default: "null"
            }]
        });
    }

    async run(message, args) {

        let game = args;

        if (message.author.id == config.ownerID) {

            if (args.game !== 'null') {

                this.client.user.setGame(args.game)

            } else

            if (args.game == `null`) {

                this.client.user.setGame(null)

            } else {
                return;
            }
        }
    }
}