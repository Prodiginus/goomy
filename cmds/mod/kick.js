const { Command } = require('discord.js-commando');

module.exports = class kick extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'mod',
            memberName: 'kick',
            description: 'kicks mentioned person'
        });
    }

    async run(message, args) {

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.reply("Sorry, you don't have permission to kick members :disappointed:");

        if (message.mentions.users.size === 0) {
            return message.reply("You haven't mentioned a user to kick")
        }

        let kickMember = message.guild.member(message.mentions.users.first());

        if (!kickMember) {
            return message.reply("You haven't mentioned anyone to kick");
        }

        if (!message.guild.member(this.client.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("I don't have permission to do that")
        }

        kickMember.kick().then(member => {
            message.reply(`${member.user.username} was successfully kicked`)
        }).catch(console.error);
    }
}