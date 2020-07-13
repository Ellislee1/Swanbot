const { Channel } = require("discord.js");

require("discord.js");
all_channels = ["general", "staff-general"];

module.exports = {
  name: "ann",
  description: "Bot Details",
  execute(msg, args) {
    const accepted_channels = [
      "general",
      "project-general",
      "research-general",
    ];
    channels = args[0].toLowerCase();
    const server_channels = msg.guild.channels.cache;
    message = "";
    for (i = 1; i < args.length; i++) {
      message = message + args[i] + " ";
    }

    if (channels == "all") {
      server_channels.each((chan) => {
        if (accepted_channels.includes(chan.name)) {
          chan.send({
            embed: {
              color: "#fc4103",
              title: "Announcement!",
              description: "@everyone " + message,
              timestamp: new Date(),
            },
          });
        }
      });
    } else {
      server_channels.each((chan) => {
        if (channels.includes(chan.name)) {
          chan.send({
            embed: {
              color: "#fc4103",
              title: "Announcement!",
              description: "@everyone " + message,
              timestamp: new Date(),
            },
          });
        }
      });
    }
    msg.delete();
  },
};
