const { Command } = require('discord.js-commando');

module.exports = class ban extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'mod',
            memberName: 'ban',
            description: 'bans the mentioned person'
        });
    }

    async run(message, args) {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.reply("Sorry, you don't have permission to ban members :disappointed:");

        if (message.mentions.users.size === 0) {

            return message.reply("You haven't mentioned a user to ban")

        }

        let banMember = message.guild.member(message.mentions.users.first());

        if (!banMember) {

            return message.reply("You haven't mentioned anyone to ban");

        }

        if (!message.guild.member(this.client.user).hasPermission("BAN_MEMBERS")) {

            return message.reply("I don't have permission to do that")

        }

        banMember.ban().then(member => {

            message.reply(`${member.user.username} was successfully banned`)

        }).catch(console.error);

    }
}