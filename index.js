//const { Client, GatewayIntentBits } = require("discord.js"); //?
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("interactionCreate",(interaction)=>{
    interaction.reply("Pong!!");
})

client.on("messageCreate", (message) => {
    if (!message.author.bot) {
      message.reply({
        content: `Bot says ${message.content}`,
      });
    }
});

client.login(
  "MTMwOTg3MzUzMDQ0NzU5NzU4OA.G8VLGG.PdumHEXB3RpZwabXHsmMgOknWyucWADcD7dkow"
);