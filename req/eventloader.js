const reqEvent = (event) => require(`./events/${event}`)

module.exports = client => {
    client
        .on('ready', () => reqEvent('ready')(client))

    .on('reconnecting', () => reqEvent('reconnecting')(client))

    .on('disconnect', () => reqEvent('disconnect')(client))

    .on('debug', reqEvent('debug'))

    .on('warn', reqEvent('warn'))

    .on('errror', reqEvent('error'))

    .on('message', reqEvent('message'))

    .on('guildDelete', reqEvent('guildDelete'))

    .on('guildCreate', reqEvent('guildCreate'))

    .on('guildMemberAdd', reqEvent('guildMemberAdd'))

    .on('guildMemberRemove', reqEvent('guildMemberRemove'))

};