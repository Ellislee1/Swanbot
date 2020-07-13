require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping!",
  execute(msg, args) {
    var channel = msg.channel;
    var ping = Date.now() - msg.createdTimestamp + "ms";

    // format message
    channel.send({
      embed: {
        color: "#32a84c",
        title: "Ping Pong!",
        description: `Latency: ${ping}`,
        timestamp: new Date(),
      },
    });
    msg.delete();
  },
};
