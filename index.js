//requiring stuff
require('module-alias/register')
const { Client } = require('discord.js');
const client = new Client({disableMentions:"everyone"}).setMaxListeners(0);
const { token } = require('@botutil');
const loadCommands = require('@root/command/load-commands');                    
const commandBase = require('@root/command/command-base');                      
const loadFeatures = require('@root/features/load-features');
//ready event
client.on('ready', async () => {
    console.log('uwu you are so warm'); //uwu
    commandBase.loadPrefixes(client)
    loadCommands(client)
    loadFeatures(client)
});
client.on("warn", (info) => console.log(info));                                 
client.on("error", console.error);  
client.login(token);