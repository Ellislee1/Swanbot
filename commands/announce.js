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
    if (args[0].toUpperCase() == "ALL") {
      all_channels.forEach((chan) => {
        if (test_channel(channels, chan)) {
          send_message(chan, args[1], msg);
        }
      });
    } else {
      chans = args[1].split(",");
      chans.forEach((chan) => {
        if (test_channel(channels, chan)) {
          send_message(args[0], args[1], msg);
        }
      });
    }
  },
};

function test_channel(channels, chan) {
  channels.forEach((channel) => {
    if (chan == channel.name) {
      return true;
    }
  });
  return false;
}

function send_message(channel, message, msg) {
  channel.send("@everyone", {
    embed: {
      color: 3447003,
      author: {
        name: msg.member.user.tag,
      },
      title: "Announcement!",
      description: message,
      fields: [],
      timestamp: new Date(),
      footer: {
        text: "- Swanbot",
      },
    },
  });
}
