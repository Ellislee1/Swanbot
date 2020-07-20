require("discord.js");
require("dotenv").config();
const VERSION = process.env.VERSION;

module.exports = {
  name: "help",
  description: "Shows info and help",
  execute(msg, args) {
    var author = msg.author;
    var ping = Date.now() - msg.createdTimestamp + "ms";

    // format message
    author.send({
      embed: {
        color: "#8332a8",
        title: "Info",
        description: `Hi! I'm Swanbot 2.0. I'm a custom bot made by a student for the Compsci/Software Eng MSc/MEng Discord.`,
        URL: "https://github.com/Ellislee1/Swanbot",
        fields: [
          {
            name: "Version",
            value: VERSION,
          },
          {
            name: "Authors",
            value: "Ellis Thompson",
          },
          {
            name: "Repo",
            value: "https://github.com/Ellislee1/Swanbot",
          },
        ],
        timestamp: new Date(),
        footer: { text: "- Swanbot 2.0 ❤️" },
      },
    });

    author.send({
      embed: {
        color: "#8332a8",
        title: "Help",
        description: `Hi! I'm Swanbot 2.0. I'm a custom bot made by a student for the Compsci/Software Eng MSc/MEng Discord. Please find below a list of my commands :smile:`,
        fields: [
          {
            name: "!help",
            value: "Using `!help` will bring you this message.",
          },
          {
            name: "!ping",
            value:
              "Using `!ping` will show you the latency for the server. Ping Pong!",
          },
          {
            name: "!qa",
            value:
              "Using `!qa <link> <description>` is a method to draw attention to your questionnaire and have it places in the appropriate channel. This way everything is organised and tracked properly!\nExample:`!qa https://myQuestionnaireLink.com I'm researching how useful this bot is what do you think?` **Note:** please ensure that the url starts with either `https://` or `http://`",
          },
          {
            name: "!test",
            value:
              "Using `!test <link> <description>` will allow you to ask people to test your software/system (if it is acceptable for the module.dissertation). Try to use repository links as this both identifies who the creator of the software is and platforms, such at GitHub allow for issue/bug reporting. \nExample:`!test https://github.com/Ellislee1/Swanbot This is the Swanbot repo, please feel free to fork and contribute!`. **Note:** please ensure that the url starts with either `https://` or `http://`",
          },
          {
            name: "!ann",
            value:
              "Use `!ann <[channels]> <message>` to make an accouncement in specified channels. For the channels you can:\n* Use an array `[channel1,channel2,channel3]` to specify channels.\n* Use `all` to use all predefined channels.\nExample: `!ann general,memes Still waiting for module selection to become available 😕`",
          },
          {
            name: "!feature",
            value:
              "Use `!feature <feature suggestion>` to suggest a feature to add to the bot.\nExample `!feature Construct additional pylons!`",
          },
        ],
        timestamp: new Date(),
        footer: { text: "- Swanbot 2.0 ❤️" },
      },
    });

    if (msg.channel.name == "general") {
      msg.channel.send({
        embed: {
          color: "#8332a8",
          title: "Help",
          description: `Hi! I'm Swanbot 2.0. I'm a custom bot made by a student for the Compsci/Software Eng MSc/MEng Discord. Please find below a list of my commands 😊`,
          fields: [
            {
              name: "!help",
              value: "Using `!help` will bring you this message.",
            },
            {
              name: "!ping",
              value:
                "Using `!ping` will show you the latency for the server. Ping Pong!",
            },
            {
              name: "!qa",
              value:
                "Using `!qa <link> <description>` is a method to draw attention to your questionnaire and have it places in the appropriate channel. This way everything is organised and tracked properly!\nExample:`!qa https://myQuestionnaireLink.com I'm researching how useful this bot is what do you think?` **Note:** please ensure that the url starts with either `https://` or `http://`",
            },
            {
              name: "!test",
              value:
                "Using `!test <link> <description>` will allow you to ask people to test your software/system (if it is acceptable for the module.dissertation). Try to use repository links as this both identifies who the creator of the software is and platforms, such at GitHub allow for issue/bug reporting. \nExample:`!test https://github.com/Ellislee1/Swanbot This is the Swanbot repo, please feel free to fork and contribute!`. **Note:** please ensure that the url starts with either `https://` or `http://`",
            },
            {
              name: "!ann",
              value:
                "Use `!ann <[channels]> <message>` to make an accouncement in specified channels. For the channels you can:\n* Use an array `[channel1,channel2,channel3]` to specify channels.\n* Use `all` to use all predefined channels.\nExample: `!ann general,memes Still waiting for module selection to become available :confused:`",
            },
            {
              name: "!feature",
              value:
                "Use `!feature <feature suggestion>` to suggest a feature to add to the bot.\nExample `!feature Construct additional pylons!`",
            },
            {
              name: "!enrol",
              value:
                "Use `!enrol <module code 1> <module code 2>...` to gain access to module channels.\nExample `!enrol CSCM45 CSCM37 CSCM13`",
            },
          ],
          timestamp: new Date(),
          footer: { text: "- Swanbot 2.0 ❤️" },
        },
      });
    }
    try {
      msg.delete();
    } catch {}
  },
};
