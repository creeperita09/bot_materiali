
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                var user, materiale;


await s4d.client.login('MTAwMjUwNzg0NjE5OTU0NTkyNg.GJk2zS.dRpwHM7BXm4tsm_tIVlNu36dZ_vJldoprfwSMA').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.channel) == s4d.client.channels.cache.get('1003588867452055562')) {
    if (((s4dmessage.content) || '').startsWith('/request' || '')) {
      s4dmessage.react('👍');user = (s4dmessage.author.username);
      materiale = (s4dmessage.content).slice(8, (s4dmessage.content).length);
      s4d.client.channels.cache.get('1003589108641312768').send(String((['<@&1003588497690603600> ',user,' ha richiesto: ',materiale].join(''))));
      await delay(Number(60)*1000);
      s4dmessage.delete();
    }
  }

});

s4d.client.on('ready', async () => {
  s4d.client.user.setActivity(String('raccogliere i vostri materiali'));

});


                return s4d;
                })();
            