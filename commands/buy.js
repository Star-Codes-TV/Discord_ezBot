const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('e$'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`❌ You need 25000 coins to purchase VIP`);

    if (args[0] == 'vip') {
        if (author < 25000) return message.channel.send(Embed)
        
        db.fetch(`vip_${message.guild.id}_${user.id}`);
        db.set(`vip_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased VIP For 25000 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 25000)
        message.channel.send(Embed2)




    } else if(args[0] == 'sneakers') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You need 600 coins to purchase some Sneakers`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased Fresh Sneakers For 600 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)




    } else if(args[0] == 'supercar') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(`❌ You need 800 coins to purchase a new Supercar`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased a New Supercar For 800 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)





    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setDescription(`❌ You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)



    } else if(args[0] == 'privatejet') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setDescription(`❌ You need 5000 coins to purchase a Private Jet`);

        if (author < 5000) return message.channel.send(Embed2)
       
        db.fetch(`privatejet_${message.guild.id}_${user.id}`)
        db.add(`privatejet_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased a Private Jet For 5000 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed3)




    } else if(args[0] == 'biscuit') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setDescription(`❌ You need 100 coins to purchase a Biscuit`);

        if (author < 100) return message.channel.send(Embed2)
       
        db.fetch(`biscuit_${message.guild.id}_${user.id}`)
        db.add(`biscuit_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased a Biscuit For 100 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 100)
        message.channel.send(Embed3)


    } else if(args[0] == 'taco') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setDescription(`❌ You need 5 coins to purchase a Taco`);

        if (author < 5) return message.channel.send(Embed2)
       
        db.fetch(`taco_${message.guild.id}_${user.id}`)
        db.add(`taco_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased a Taco For 5 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5)
        message.channel.send(Embed3)


    } else if(args[0] == 'helicopter') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setDescription(`❌ You need 4000 coins to purchase a Helicopter`);

        if (author < 4000) return message.channel.send(Embed2)
       
        db.fetch(`helicopter_${message.guild.id}_${user.id}`)
        db.add(`helicopter_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setDescription(`✅ Purchased a Helicopter For 4000 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 4000)
        message.channel.send(Embed3)


















    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription('❌ Enter an item to buy')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: [""]
  }