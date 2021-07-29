module.exports = {
    commands: 'ping',
    description: 'a ping command',
    callback: (message, client) => {
        message.reply('calculating ping').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit(`Bot latency: ${ping}, API Latency: ${ client.ws.ping}`)
        });
    }
};