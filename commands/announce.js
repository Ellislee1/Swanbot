const { Channel } = require("discord.js");

require("discord.js");
all_channels = [
  "general",
  // "games-and-shit",
  // "memes",
  "staff-general",
  // "housing",
];

module.exports = {
  name: "announce",
  description: "Bot Details",
  execute(msg, args) {
    console.log("ARGS==========================\n" + args);
    const channels = msg.guild.channels;
    console.log("CHANNELS==========================\n" + channels);
    message = "";
    for (i = 1; i < args.length; i++) {
      message = message + args[i] + " ";
    }
    channels.forEach((channel) => {
      channel_name = channel.name;
      if (args[0].toUpperCase() == "ALL") {
        if (all_channels.includes(channel_name)) {
          channel.send("@everyone", {
            embed: {
              color: 3447003,
              title: "Announcement!",
              description: message,
              timestamp: new Date(),
              footer: {
                text: "- " + msg.member.user.tag,
              },
            },
          });
        }
      } else {
        arg_channels = args[0].split(",");
        if (arg_channels.includes(channel_name)) {
          channel.send({
            embed: {
              color: 3447003,
              title: "Announcement!",
              description: message,
              timestamp: new Date(),
              footer: {
                text: "- " + msg.member.user.tag,
              },
            },
          });
        }
      }
    });
  },
};
