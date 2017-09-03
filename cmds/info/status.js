const { Command } = require('discord.js-commando');

module.exports = class status extends Command {
    constructor(client) {
        super(client, {
            name: 'status',
            group: 'info',
            memberName: 'status',
            description: 'Sends the status of mentioned'
        });
    }

    async run(message, args) {

        let person = message.mentions.users.first() || message.author;

        if (!person) return message.channel.send("You haven't specified a user");

        if (person.presence.game !== null) {

            message.channel.send(person.username + ' is currently ' + person.presence.status + ' and is playing ' + person.presence.game.name + '.');

        }

        if (person.presence.game == null) {

            message.channel.send(person.username + ' is currently ' + person.presence.status + '.');

            return;
        }


    }
}