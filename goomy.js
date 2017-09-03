//required libraries---------------------------------------------------------------------
const { CommandoClient } = require('discord.js-commando')
const path = require('path');
const fs = require('fs');
require('dotenv').config()
//config parse---------------------------------------------------------------------------
var config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));
//variables------------------------------------------------------------------------------
const client = new CommandoClient({
    id: 'id',
    unknownCommandResponse: false,
    commandPrefix: config.prefix,
    owner: ['128948605263413248', '210459900835266560'],
    disableEveryone: true
});
const discordToken = process.env.DISCORD_TOKEN;
//directories----------------------------------------------------------------------------
require('./req/eventloader.js')(client);
//registering things---------------------------------------------------------------------
client.registry
    .registerGroups([
        ['misc', 'Miscellaneous'],
        ['fun', 'Fun Commands'],
        ['info', 'Various Info Commands'],
        ['mod', 'Moderation Commands'],
        ['math', 'Mathematical Commands'],
        ['owner', 'Debug/Owner Commands'],
        ['voice', 'Voice Commands']
    ])
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'cmds'));
//startup--------------------------------------------------------------------------------
client.login(discordToken);