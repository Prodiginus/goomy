const { Command } = require('discord.js-commando');

module.exports = class join extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'voice',
            memberName: 'leave',
            description: 'leave the voicechannel'
        });
    }

    async run(message, args) {
        if (!message.guild.voiceConnection) {

            message.channel.send(`I'm not in a voice channel :open_mouth:`);

        } else

        if (message.guild.voiceConnection) {

            await message.guild.voiceConnection.channel.leave();

            message.channel.send(`Left voice channel ${message.member.voiceChannel.name}`)

        }
    }
}