import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTMwOTg3MzUzMDQ0NzU5NzU4OA.G8VLGG.PdumHEXB3RpZwabXHsmMgOknWyucWADcD7dkow"
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1309873530447597588"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
