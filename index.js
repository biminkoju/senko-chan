//requiring stuff
require('module-alias/register')
const { Client } = require('discord.js');
const client = new Client({disableMentions:"everyone",restTimeOffset:0}).setMaxListeners(0);
const { token } = require('@botutil');
const loadCommands = require('@root/command/load-commands');                    
const commandBase = require('@root/command/command-base');                      
const loadFeatures = require('@root/features/load-features');
const i18n = require('i18n');
//ready event
client.on('ready', async () => {
    console.log('uwu you are so warm'); //uwu
    commandBase.loadPrefixes(client)
    loadCommands(client)
    loadFeatures(client)
});
i18n.configure = {
    locales: ["en"],
    directory: path.join(__dirname, "locales"),
    defaultLocale: "en",
    objectNotation: true,
    register: global,
    logWarnFn: function (msg) {
        console.log("warn", msg);
    },
    logErrorFn: function (msg) {
        console.log("error", msg);
    },
    missingKeyFn: function (locale, value) {
        return value;
    },
    mustacheConfig: {
        tags: ["{{", "}}"],
        disable: false
    }
}
client.on("warn", (info) => console.log(info));                                 
client.on("error", console.error);  
client.login(token);