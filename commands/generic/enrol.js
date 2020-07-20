require("discord.js");
const fs = require("fs");
const filepath = "./files/channels.json";

module.exports = {
  name: "enrol",
  description: "enrol onto module(s)",
  execute(msg, args) {
    if (msg.channel.name != "module-enrol") {
      msg.reply("Please do that in the Module-Enrol channel.");
      msg.delete();
      return;
    }

    args = msg.content.split;

    let data = loadFile();
    let modules = getModules(data);
    let user = msg.member;
    joined = [];
    failed = [];

    args.forEach((module) => {
      temp = module.toUpperCase();
      if (modules.includes(temp)) {
        role = msg.guild.roles.find((role) => role.name === temp);
        user.addRole(role);
        joined.push(temp);
      } else {
        failed.push(temp);
      }
    });
    msg.author.send("You have been enrolled in " + joined);
    msg.author.send("Failed to enroll in " + failed);
  },
};

function loadFile() {
  let location = fs.readFileSync(filepath);
  let data = JSON.parse(location);
  return data.modules;
}

function getModules(data) {
  all_modules = [];
  data.each((module) => {
    all_modules.push(module.code);
  });
  return all_modules;
}
