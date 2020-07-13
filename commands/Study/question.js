const { CategoryChannel, Channel } = require("discord.js");

require("discord.js");

module.exports = {
  name: "qa",
  description: "ask a questionnaire",
  execute(msg, args) {
    const accepted_channels = ["research-general"];
    description = "";
    for (i = 1; i < args.length; i++) {
      description = description + args[i] + " ";
    }

    // format message
    msg.guild.channels.cache.each((chan) => {
      if (accepted_channels.includes(chan.name)) {
        chan.send({
          embed: {
            color: "#32a2a8",
            title: "Questionnaire Help",
            description: `@here Help ${msg.member.user.tag} by filling out their questionnaire!`,
            url: args[0],
            fields: [
              {
                name: "Description",
                value: description,
              },
              {
                name: "Link",
                value: args[0],
              },
            ],
            timestamp: new Date(),
          },
        });
      }
    });
    msg.delete();
  },
};
