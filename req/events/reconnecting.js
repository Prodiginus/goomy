const chalk = require('chalk');

module.exports = client => {
    console.log(chalk.yellow.bold(`Goomy is reconnecting at ${new Date()}`))
}