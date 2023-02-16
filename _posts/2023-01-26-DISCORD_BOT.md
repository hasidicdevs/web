---
layout: post
title:  "Discord Bot Base File and Setup"
author: sotic
tags: Javascript, Node.js, Discord
---

This is just a simple post to help you get your Discord bot setup and running in a matter of seconds. If you run into any issues feel free to raise an "Issue" and I can assist you. This is current as of February 1, 2023. Your first step is to create a new directory and name it whatever you want your repo to be called on GitHub. Open your favorite code editor and create a new file named "index.js" and create a ".env", and "package.json" file. Once you have those set up go ahead and copy the contents of those two files from here and paste them into your local files. 
<!--more-->
## Create Your Application

Go over to the Discord Developer Hub and create a new application. You will need your Client_ID (Also called the "Application ID" on the first page). Click on "Bot" and click Add Bot. "A wild bot has appeared" on this screen is your token, click reset token and copy that. Paste it in your .env file along with your Client ID. On this page click "Send messages" and "Slash Commands" and save. Go to Oauth and Generate a new URL. Click on "bot" on the left, and click "send messages", and "slash commands" on the bottom of the page. Copy the URL it gives you there and paste it into a new tab in your browser. Authorize the bot to join your server and wait a few seconds and it will appear. 

## Editing Files

### .env file

```
CLIENT_TOKEN = "your_token"
CLIENT_ID = "your_ID"
```

### package.json

```js
{
	"name": "Bot Name or ID",
	"version": "1.0",
	"description": "Short description of your bot and how to use it.",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "node ."
	},
	"dependencies": {
		"discord.js": "^14.7.1",
		"dotenv": "^16.0.3"
	},
	"keywords": [
		"bot"
	],
	"author": "Your Name",
	"license": "LICENSE-TYPE"
}
```

### index.js

```js
//IMPORT modules needed for Discord Bot Base
const { REST, Client, GatewayIntentBits, Routes } = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

// Registering Commands, new commands go here...
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  }
];


(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Control what the commands will do...

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

// DO LOGIN
client.login(process.env.CLIENT_TOKEN);
```