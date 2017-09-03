const { Command } = require('discord.js-commando');

module.exports = class join extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'voice',
            memberName: 'join',
            description: 'joins the voice channel the author is in'
        });
    }

    async run(message, args) {

        if (!message.member.voiceChannel) {

            message.channel.send(`You aren't in a voice channel ${message.author.username} :open_mouth:`)

        } else

        if (message.member.voiceChannel) {

            message.member.voiceChannel.join().then(connection => {

                message.channel.send(`Joined voice channel ${message.guild.voiceConnection.channel.name}`)

            })
        }
    }
}