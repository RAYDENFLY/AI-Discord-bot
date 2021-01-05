const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Online with you');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const discord = require("discord.js");
const client = new discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm"); //free access key for Mewtwo Machine channel (provided by CTK WARRIOR)
client.on("ready", () => {
  console.log("Ready for chatting ajc!");
});
client.on("message", async message => {
  if (message.author.bot) return;
  let content = message.content;
  chatbot.getReply(content).then(r => message.channel.send(r));
});
client.login(process.env.TOKEN);
