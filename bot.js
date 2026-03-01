require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const noblox = require('noblox.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

(async () => {
    try {
        // Login to Roblox
        const currentUser = await noblox.setCookie(process.env.ROBLOX_COOKIE);
        console.log(`✅ Logged into Roblox as ${currentUser.UserName}`);
    } catch (error) {
        console.error('❌ Failed to login to Roblox:', error);
    }
})();

// When Discord bot is ready
client.once('ready', () => {
    console.log(`✅ Discord bot online as ${client.user.tag}`);

    // Set status
    client.user.setPresence({
        activities: [{
            name: 'Roblox & Members',
            type: ActivityType.Watching
        }],
        status: 'online'
    });
});

// Login to Discord
client.login(process.env.TOKEN);
