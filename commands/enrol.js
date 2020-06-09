require("discord.js");

module.exports = {
  name: "enrol",
  description: "Enrol on a module through the server",
  execute(msg, args) {
    if (msg.channel.name != "enroll") {
      return;
    }
    args = msg.content.split(" ");
    join_class = args[1];
    var role = msg.guild.roles.find((role) => role.name === join_class);
    msg.member.addRole(role);
    msg.author.send("Tou have been enrolled in: " + join_class);
    msg.delete();
  },
};
