const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

client.once('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  
  if (message.content.startsWith('!escribir')) {
    const content = message.content.slice(9); // Obtener el texto después de !escribir

    if (!content) return message.channel.send('Por favor, incluye un mensaje.');

    // Eliminar el mensaje del usuario para evitar duplicaciones
    try {
      await message.delete();
    } catch (error) {
      console.error('Error al eliminar el mensaje del usuario:', error);
    }

    message.channel.send(content);
  }
});


client.login('MTA2MzU2OTg4NTQ0MTA0ODcwNg.GwkOHR.bJgfrBNtnkqBD4hps3Jd9oTgDVsXwaoguOwTV4');


