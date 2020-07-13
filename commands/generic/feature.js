require("discord.js");
const sqlite3 = require("sqlite3").verbose();

module.exports = {
  name: "feature",
  description: "Suggest a feature",
  execute(msg, args) {
    message = "";
    for (i = 0; i < args.length; i++) {
      message = message + args[i] + " ";
    }
    user = msg.member.user.tag;
    const server_channels = msg.guild.channels.cache;

    let db = new sqlite3.Database("./Swanbot2.0.db");
    db.run(
      `INSERT into suggestions(content,upvotes,downvotes) VALUES('${message}', ${1}, ${1})`
    );

    ids = [];
    id = 0;
    db.all("SELECT id from suggestions ORDER BY id DESC LIMIT 1", function (
      err,
      rows
    ) {
      id = rows[0].id;
      //format message
      server_channels.each((chan) => {
        if (chan.name == "suggestions") {
          chan
            .send({
              embed: {
                color: "#5142f5",
                title: `Suggestion ${id}`,
                description: message,
                timestamp: new Date(),
                footer: {
                  text: "- " + msg.member.user.tag,
                },
              },
            })
            .then(function (msg) {
              msg.react("👍");
              msg.react("👎");
            });
        }
      });
    });

    //msg.delete();
  },
};
