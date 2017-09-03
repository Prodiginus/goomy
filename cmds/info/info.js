const { Command } = require('discord.js-commando');
const config = require("../../config.json");

module.exports = class info extends Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'info',
            memberName: 'info',
            description: 'Sends the bot\'s info'
        });
    }

    async run(message, args) {

        let msg = await message.channel.send("Getting info...");

        message.channel.send({
            embed: {
                color: config.niceBlueInt,
                author: {
                    name: this.client.user.username,
                    icon_url: this.client.user.avatarURL
                },
                title: `Goomy`,
                url: '',
                description: 'Info for this bot',
                timestamp: new Date(),
                footer: {
                    icon_url: this.client.user.avatarURL,
                    text: '© Goomy'
                },
                thumbnail: {
                    url: this.client.user.avatarURL
                }
            }
        });

        msg.delete();

    }
}