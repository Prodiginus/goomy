const chalk = require('chalk');

module.exports = guild => {

    console.log(chalk.magenta(`New guild joined: ${guild.name}, owned by ${guild.owner.user.username}`));

    guild.channels.get(`${guild.channels.first().id}`).send('Heyo y\'all :blush: \n \nI\m glad to be here')

}