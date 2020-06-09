require("discord.js");
const sqlite3 = require("sqlite3").verbose();

module.exports = {
  name: "exams",
  description: "Information on upcomming exams",
  execute(msg, args) {
    let db = new sqlite3.Database(
      "./Swanbot.db",
      sqlite3.OPEN_READONLY,
      (err) => {
        if (err) {
          msg.reply("Could not connect to database");
          console.log("There was a problem opening the database");
        }
      }
    );

    db.serialize(() => {
      db.each(`SELECT ModuleCode FROM Exams`, (err, row) => {
        if (err) {
          msg.reply("There was a problem with the database");
          console.log("There was a problem closing the database");

          db.close((err) => {
            if (err) {
              msg.reply("There was a problem with the database");
              console.log("There was a problem closing the database");
            }
          });
        }

        msg.reply("Known exams are: " + row.ModuleCode);
      });
    });

    db.close((err) => {
      if (err) {
        msg.reply("There was a problem with the database");
        console.log("There was a problem closing the database");
      }
    });
  },
};
