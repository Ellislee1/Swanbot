require("discord.js");
all_channels = [
  // "general",
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
    if (args[1].toUpperCase() == "ALL") {
      channels.forEach((channel) => {
        if (all_channels.included(channel)) {
          send_message(channel, args[2], msg);
        }
      });
    } else {
      if (channels.included(args[1])) {
        send_message(args[1], args[2], msg);
      }
    }
  },
};

function send_message(channel, message, msg) {
  channel.send("@Owner", {
    embed: {
      color: "#a86832",
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
