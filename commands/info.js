require("discord.js");

module.exports = {
  name: "info",
  description: "Bot Details",
  execute(msg, args) {
    msg.channel.send({
      embed: {
        color: 3447003,
        author: {},
        title: "Swan Bot Info",
        url: "https://github.com/Ellislee1/Swanbot",
        description:
          "Swanbot is an open source bot project for the MSc Computer Science Discord server. [Click me](https://github.com/Ellislee1/Swanbot) for the git repo!",
        fields: [
          {
            name: "Version",
            value: "0.1a",
          },
          {
            name: "Commands",
            value:
              "!info - Produces this message\n!ping - Will give the round trip latency of the bot\n!enrol <args> - Can only be used in the enrol channel and will add the module tag to you allowing you to get specific details on modules.\n!drop <args> - Can only be used in the enrol channel and will remove you from a module.",
          },
          {
            name: "Contributors",
            value: "[Ellis Thompson](https://github.com/Ellislee1)",
          },
        ],
        timestamp: new Date(),
        footer: {
          text: "- Swanbot",
        },
      },
    });
  },
};
