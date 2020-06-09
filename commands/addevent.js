require("discord.js");
const sqlite3 = require("sqlite3").verbose();

module.exports = {
  name: "addevent",
  description: "add a new event",
  execute(msg, args) {
    let db = new sqlite3.Database(
      "./Swanbot.db",
      sqlite3.OPEN_READONLY,
      (err) => {
        if (err) {
          msg.reply("Could not connect to database");
          console.log("There was a problem opening the database");
          return 0;
        }
      }
    );

    db.close((err) => {
      if (err) {
        msg.reply("There was a problem with the database");
        console.log("There was a problem closing the database");
        return 0;
      }
    });
  },
};
