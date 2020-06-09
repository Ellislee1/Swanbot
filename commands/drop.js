require("discord.js");
const sqlite3 = require("sqlite3").verbose();

module.exports = {
  name: "drop",
  description: "Drop a module on the server",
  execute(msg, args) {
    if (msg.channel.name != "module-enrol") {
      return;
    }
    args = msg.content.split(" ");
    join_class = args[1];
    all_classes = join_class.replace(" ", "").split(",");

    joined = [];
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

    modules = [];

    db.serialize(() => {
      db.each(`SELECT ModuleCode FROM tblModules`, (err, row) => {
        if (err) {
          msg.reply("There was a problem with the database");
        }
        if (all_classes.includes(row.ModuleCode)) {
          var role = msg.guild.roles.find(
            (role) => role.name === row.ModuleCode
          );
          try {
            msg.member.removeRole(role);
            joined.push(cls);
          } catch (err) {
            msg.author.send(
              "You can not be removed from a class you're not in."
            );
          }
        }
      });
    });

    db.close((err) => {
      if (err) {
        msg.reply("There was a problem with the database");
        console.log("There was a problem closing the database");
      }
    });

    msg.author.send("You have been removed from: " + joined);
    msg.delete();
  },
};
