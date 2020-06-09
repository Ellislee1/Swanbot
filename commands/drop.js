require("discord.js");

var modules = [
  "CSP420",
  "CSC409",
  "CSC410",
  "CSCM08",
  "CSCM13",
  "CSCM18",
  "CSCM27",
  "CSCM38",
  "CSCM45",
  "CSCM48",
  "CSCM72",
  "CSCM75",
  "CSCM98",
  "CSCM28",
  "CSCM29",
  "CSCM35",
  "CSCM37",
  "CSCM39",
  "CSCM64",
  "CSCM68",
  "CSCM79",
  "CSCM85",
];

module.exports = {
  name: "drop",
  description: "Drop a module on the server",
  execute(msg, args) {
    if (msg.channel.name != "enroll") {
      return;
    }
    args = msg.content.split(" ");
    join_class = args[1];
    all_classes = join_class.replace(" ", "").split(",");

    joined = [];
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

    msg.author.send("You have been removed from: " + joined);
    msg.delete();
  },
};
