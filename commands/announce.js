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
    if (args[0].toUpperCase() == "ALL") {
      channels.forEach((channel) => {
        if (all_channels.includes(channel.name)) {
          send_message(channel, args[1], msg);
        }
      });
    } else {
      if (channels.includes(args[0])) {
        send_message(args[0], args[1], msg);
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
