module.exports = member => {
    let guild = member.guild;

    guild.channels.get(`${guild.channels.first().id}`).send(`So sorry to see you go ${member.user.username} :disappointed:`);

}