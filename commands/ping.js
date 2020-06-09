require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping!",
  execute(msg, args) {
    var ping = Date.now() - msg.createdTimestamp + "ms";
    msg.reply("Pong!\nThat round trip took " + ping);
  },
};
