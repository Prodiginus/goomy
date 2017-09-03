module.exports = member => {
    let guild = member.guild;

    guild.channels.get(`${guild.channels.first().id}`).send(`Welcome to the server ${member.user.username}! Hope you have a wonderful time here :blush:`);
}