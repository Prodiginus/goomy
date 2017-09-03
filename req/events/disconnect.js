const chalk = require('chalk');

module.exports = client => {
    console.log(chalk.red.bold(`Goomy was disconnected at ${new Date()}`))
}