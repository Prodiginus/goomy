const { Command } = require('discord.js-commando');

module.exports = class dmclear extends Command {
    constructor(client) {
        super(client, {
                name: 'dmclear',
                group: 'misc',
                memberName: 'dmclear',
                description: 'cleans the bots dms'
            }

        )
    }

    async run(message, args) {

        if (message.channel.type !== "dm") {

            message.channel.send('This message is only usable in dms with the bot')

        } else

        if (message.channel.type == "dm") {

            message.channel.fetchMessages({ limit: 100 }).then(messages => {

                messages.deleteAll()

            })
        }

    }
}