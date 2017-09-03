const { Command } = require('discord.js-commando');

module.exports = class prune extends Command {
    constructor(client) {
        super(client, {
                name: 'prune',
                group: 'misc',
                memberName: 'prune',
                description: 'cleans the amount of messages specified',
                aliases: ["purge"],
                args: [{
                    key: "number",
                    prompt: "You must specify how many messages to clear",
                    type: "integer"
                }]
            }

        )
    }

    async run(message, args) {

        let { number } = args

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {

            return message.channel.send('You don\'t have permission to manage messages');

        }

        if (args.number > 100 || args.number < 2) {

            return message.channel.send('You must specify an amount of messages to delete between **2** and **100**')

        } else {

            message.channel.fetchMessages({ limit: number }).then(messages => {

                message.channel.bulkDelete(messages)

                message.channel.send(`Purged ${messages.size} messages.`)

                return;
            })
        }
    }
}