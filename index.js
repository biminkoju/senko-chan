//requiring stuff
require('module-alias/register')
const { Client } = require('discord.js');
const client = new Client({partials:['REACTION','MESSAGE']});
const wokcommads = require('wokcommands');
const { token } = require('@botutil');
//ready event
client.on('ready', async () => {
    console.log('uwu you are so warm'); //uwu

    //to lazy to make my own command handler so yes
    new wokcommads(client, {

        commandsDir: 'commands',
        featuresDir: 'features',
        showWarns: true,
        del: -1,
        ignoreBots: false,
        dbOptions: {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
        testServers: ['756436937690316801'],
        disabledDefaultCommands: [
        ]
    })
        .setDefaultPrefix('snek')
        .setColor('RANDOM')
        .setCategorySettings([
            {
                name: 'Misc',
                emoji: '❄️'
            },
            {
                name: 'Development',
                emoji: '🖥️'
            },
        ])
        .setBotOwner(['721929807549431828'])

});
client.login(token);