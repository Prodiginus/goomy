const chalk = require('chalk');

module.exports = guild => {
    console.log(chalk.magenta(`Guild Left: ${guild.name}, owned by ${guild.owner.user.username}`));
}