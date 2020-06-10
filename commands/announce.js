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
        result = test_channel(channels, chan);
        if (result != false) {
          console.log(result);
          send_message(result, args[1], msg);
        }
      });
    } else {
      chans = args[1].split(",");
      chans.forEach((chan) => {
        result = test_channel(channels, chan);
        if (result != false) {
          send_message(result, args[1], msg);
        }
      });
    }
  },
};

function test_channel(channels, chan) {
  console.log(chan);
  channels.forEach((channel) => {
    match = channel.name.toString() == chan;
    if (match) {
      return channel;
    }
  });
  return false;
}

function send_message(channel, message, msg) {
  console.log(channel);
  btoa.channels.get(channel.id).send("@everyone", {
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
