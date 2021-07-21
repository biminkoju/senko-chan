let config;

try {
    config = require('@root/config.js');
} catch (error){
    config = null;
};

exports.token = config ? config.token : process.env.token;
exports.mongoPath = config ? config.mongoPath : process.env.mongoPath;