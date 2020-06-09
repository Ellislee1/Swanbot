require("discord.js");
white_list = ["bot-info"];

module.exports = {
  name: "info",
  description: "Bot Details",
  execute(msg, args) {
    msg.delete();

    can_post = false;
    white_list.forEach((item) => {
      console.log(msg.channel.name);
      console.log(item);
      console.log(msg.channel.name == item);
      if (msg.channel.name == item) {
        can_post = true;
      }
    });
    if (can_post === false) {
      return;
    }

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
            value: "0.1.2a",
          },
          {
            name: "Commands",
            value:
              "!help - Will send you a list of all commands\n!ping - Will give the round trip latency of the bot\n!enrol <args> - Can only be used in the enrol channel and will add the module tag to you allowing you to get specific details on modules.\n!drop <args> - Can only be used in the enrol channel and will remove you from a module.\n!xkcd - A comic for everything",
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
