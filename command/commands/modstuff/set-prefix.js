const mongo = require('@util/mongo');
const commandPrefixSchema = require('@schemas/command-prefix-schema');
const commandBase = require('../../command-base');
const { LOCALE } = require("@botutil");
const i18n = require("i18n");
i18n.setLocale(LOCALE);
module.exports = {
    commands: 'setprefix',
    minArgs: 1,
    maxArgs: 1,
    description:'changes the prefix of the guild',
    expectedArgs: "<This bot's new command prefix>",
    permissionError: 'You must be an admin to run this command.',
    permissions: 'ADMINISTRATOR',
    callback: async (message, arguments, text) => {
        await mongo().then(async (mongoose) => {
            try {
                const guildId = message.guild.id
                const prefix = arguments[0]

                await commandPrefixSchema.findOneAndUpdate(
                    {
                        _id: guildId,
                    },
                    {
                        _id: guildId,
                        prefix,
                    },
                    {
                        upsert: true,
                    }
                )

                message.reply(i18n.__mf('setprefix.reply', {prefix : prefix}))

                // Update the cache
                commandBase.updateCache(guildId, prefix)
            } finally {
                mongoose.connection.close()
            }
        })
    },
}
