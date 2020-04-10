let prefix = "?"
const { Client, MessageEmbed } = require('discord.js')

const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
});



    
client.on('message', message => {
  
  if (message.content === prefix + 'help') {
    
    const embed = new MessageEmbed()
 
      .setTitle('Les commandes :')
  
      .setColor(0xff0000)
    
   
      
      .addField('--------------------------------------------------','?selfbot (Affiche une fausse liste de commande selfbot pour faire croire à des kikoo que vous avez un selfbot !)')
     
.setDescription('?help (Affiche la liste des commande disponible)')
.setImage('https://cdn.discordapp.com/attachments/695918889258844210/697750578322735177/MOSHED-2020-4-9-12-6-39.gif')

    message.channel.send(embed)
  }
});

client.login('Njk3MDY2MTMxMjc3NDc5OTQ3.Xo3BAQ.iZHCKhYNMCkhVhoeMevQblubrfI')

client.on('message', message => {
  
  if (message.content === prefix + 'selfbot') {
    
    const embed = new MessageEmbed()

          .setTitle("Menu d'aide Prefix : //")
          .addField('--------------------------------------------------','〽️ //help affiche les commandes pour raid')
          .addField('--------------------------------------------------','〽️ //suppcc (Supprime tout les channel)')
          .addField('--------------------------------------------------','〽️ //dcs (Supprime le channel ou vous avez fait la commande)')
          .addField('--------------------------------------------------','〽️ //supprl (Supprime tous les rôles)')
          .addField('--------------------------------------------------','〽️ //cc (Crée beacoup de channel)')
          .addField('--------------------------------------------------','〽️ //cn (Change le nom du serveur (rapidement))')
          .setFooter("bY Neezer")
          .setImage("http://ekladata.com/zo2p94Dr_lV23NpzPt-vd7k51l0.gif")
          .setThumbnail("")
          message.channel.send(embed)
  }

          client.on('message', function (message) {
            if (!message.guild) return
            let args = message.content.trim().split(/ +/g)
         
            if (args[0].toLowerCase() === prefix + "clea") {
                if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
                let count = parseInt(args[1])
                if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
                if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
                if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
                message.channel.bulkDelete(count + 1, true)
            }
          })
        }
)
