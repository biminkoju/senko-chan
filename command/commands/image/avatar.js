const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: ['avatar', 'av', 'pfp'],
    description: 'shows the user\'s avatar',
    callback: async (message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        
        if (args[0]) {
            const embed = new MessageEmbed().setTitle(`${user.user.username}'s Avatar`).setColor('RANDOM').setImage(`${user.user.displayAvatarURL({ dynamic: true })}` + '?size=4096').setTimestamp().setFooter(`${message.guild.name}`); message.channel.send(embed)
        }
        if (!args[0]) {
            const embed = new MessageEmbed().setTitle(`${user.user.username}'s Avatar`).setColor('RANDOM').setImage(`${user.user.displayAvatarURL({ dynamic: true })}` + '?size=4096').setTimestamp().setFooter(`${message.guild.name}`); message.channel.send(embed)
        }
    }
};