const { Command } = require('discord.js-commando');
const config = require("../../config.json");

module.exports = class invite extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'sends invite link'
        });
    }

    async run(message, args) {

        let msg = await message.channel.send("Generating invite link...");

        await message.channel.send({
            embed: {
                color: config.niceBlueInt,
                author: {
                    name: this.client.user.username,
                    icon_url: this.client.user.avatarURL
                },
                title: `Goomy`,
                description: `Here's Your invite link :blush:`,
                fields: [{
                    name: config.inviteLink,
                    value: "\u200b"
                }],
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