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
    channels.forEach((channel) => {
      channel_name = channel.name;
      if (all_channels.includes(channel_name)) {
        channel.send("@everyone " + args[1]);
      }
    });
  },
};
