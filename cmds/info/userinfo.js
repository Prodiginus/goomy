const { Command } = require('discord.js-commando');
const config = require("../../config.json");

module.exports = class userinfo extends Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'info',
            memberName: 'userinfo',
            description: 'Sends the userinfo of a person'
        });
    }

    async run(message, args) {

        let mentioned = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) || message.guild.member(message.author.id);

        if (!mentioned) return message.channel.send("You haven't specified a user");

        message.channel.send({
            embed: {
                color: config.niceBlueInt,
                author: {
                    name: this.client.user.username,
                    icon_url: this.client.user.avatarURL
                },
                title: `\`\`\`${mentioned.user.username}'s info\`\`\``,
                url: '',
                description: '',
                fields: [{
                        name: '`------------------------------`',
                        value: '\u200b'
                    },
                    {
                        name: `\`Full Username\``,
                        value: `\`\`\`${mentioned.user.username}#${mentioned.user.discriminator}\`\`\``
                    },
                    {
                        name: `\`Nickname\``,
                        value: `${message.guild.member(mentioned)}` //[masked links](http://google.com) inside of rich embeds
                    },
                    {
                        name: `\`ID\``,
                        value: `\`\`\`${mentioned.id}\`\`\``
                    },
                    {
                        name: `\`Account Created\``,
                        value: `${mentioned.user.createdAt}`
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: this.client.user.avatarURL,
                    text: '© Goomy'
                },
                thumbnail: {
                    url: `${mentioned.user.avatarURL}`
                }
            }
        });

    }
}