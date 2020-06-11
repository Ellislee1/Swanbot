require("discord.js");

module.exports = {
  name: "help",
  description: "Bot Details",
  execute(msg, args) {
    msg.author.send({
      embed: {
        color: 3447003,
        author: {},
        title: "Swan Bot Help",
        url: "https://github.com/Ellislee1/Swanbot",
        description:
          "Swanbot is an open source bot project for the MSc Computer Science Discord server. [Click me](https://github.com/Ellislee1/Swanbot) for the git repo!",
        fields: [
          {
            name: "!help",
            value:
              "This sends you a list of all command... This list to be exact.",
          },
          {
            name: "!enrol <args>",
            value:
              "This is used in the enrol channel and allows you to sign up for rols on the discord server. With this you will be able to use module specific commands, or get information pertaining to only the modules you're on.\n!enrol CSCM45,CSC420,CSM69",
          },
          {
            name: "!drop <args>",
            value: "Like !enrol but to drop modules.\n!drop CSCM45",
          },
          {
            name: "!announce <channel> <message>",
            value:
              "Use to make announcements, keep it channel specific to avoid notifications being recieved unnecessarily\n!announce general This is a test message.",
          },
          {
            name: "!xkcd",
            value: "A comic for everything",
          },
        ],
        timestamp: new Date(),
        footer: {
          text: "- Love Swanbot",
        },
      },
    });
  },
};
