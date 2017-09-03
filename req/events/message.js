const config = require('../../config.json');

module.exports = message => {
    let authorID = message.author.id;

    if (message.author.bot) return;

    //reaction triggers------------------------------------------------------------------
    if (authorID == [`164222094832435200` || `286331217497030656`]) {
        message.react('🅱');
    }
    //text triggers----------------------------------------------------------------------
    switch (message.content.toLowerCase()) {
        case "ouch":
            message.channel.send("Awe, you alright?")
            break;
        case "henlo":
            message.channel.send("stinky bird");
            break;
        case "i understand":
        case "understood":
        case "understandable":
            message.channel.send("have a nice day")
            break;
    }
}