const chalk = require('chalk');
const fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

module.exports = client => {
    console.log(chalk.green.bold(`Goomy is up and online at ${new Date()}`));
    console.log(chalk.green.bold(`${config.inviteLink}`));

    client.user.setGame("with Goodra");
    client.user.setStatus("online");
}