const commando = require('discord.js-commando');
module.exports = {
    name: 'join',
    description: "this is a join command!",
    execute(message, args){
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.reply("Successfully Joined!");
                })
            }
        }
        else{
            message.reply("You must be in a voice channel to summon me!");
        }
    }
}
