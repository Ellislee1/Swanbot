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
          console.log("There was a problem closing the database");
        }
        modules.push(row.ModuleCode);
      });
    });

    for (i = 0; i < all_classes.length; i++) {
      cls = all_classes[i];
      cls = cls.toUpperCase();
      if (modules.includes(cls)) {
        var role = msg.guild.roles.find((role) => role.name === cls);
        try {
          msg.member.removeRole(role);
        } catch (err) {
          msg.author.send("You can not be removed from a class youre not in.");
        }
        joined.push(cls);
      } else {
        msg.author.send(
          cls + " does not exist or is restricted, so you were not enrolled :/"
        );
      }
    }

    db.close((err) => {
      if (err) {
        msg.reply("There was a problem with the database");
        console.log("There was a problem closing the database");
      }
    });
    // for (i = 0; i < all_classes.length; i++) {
    //   cls = all_classes[i];
    //   cls = cls.toUpperCase();
    //   if (modules.includes(cls)) {
    //     var role = msg.guild.roles.find((role) => role.name === cls);
    //     try {
    //       msg.member.removeRole(role);
    //     } catch (err) {
    //       msg.author.send("You can not be removed from a class youre not in.");
    //     }
    //     joined.push(cls);
    //   } else {
    //     msg.author.send(
    //       cls + " does not exist or is restricted, so you were not enrolled :/"
    //     );
    //   }
    //}

    msg.author.send("You have been removed from: " + joined);
    msg.delete();
  },
};
