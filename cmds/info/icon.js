const { Command } = require('discord.js-commando');

module.exports = class icon extends Command {
    constructor(client) {
        super(client, {
            name: 'icon',
            group: 'info',
            memberName: 'icon',
            description: 'Sends the guild icon'
        });
    }

    async run(message, args) {

        let msg = await message.channel.send("Generating icon...");

        if (!message.guild.iconURL) return msg.edit("This server doesn't have an icon");

        await message.channel.send(message.guild.iconURL)

        msg.delete();

    }
}