let config;

try {
    config = require('@root/config.json');
} catch (error){
    config = null;
};

exports.token = config ? config.token : process.env.token;
exports.mongoPath = config ? config.mongoPath : process.env.mongoPath;
exports.LOCALE = config ? config.LOCALE : process.env.LOCALE;
exports.prefix = config ? config.prefix : process.env.prefix;