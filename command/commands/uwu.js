const { LOCALE } = require("@botutil");
const i18n = require("i18n");
i18n.setLocale(LOCALE);
module.exports = {
    commands:["uwu","owo"],
    description: 'uwu',
    callback: ( message ) => {
        message.reply(i18n.__("uwu.message"));
    }
};