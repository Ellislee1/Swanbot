require("discord.js");
const fs = require("fs");
const Discord = require("discord.js");
const filepath = "./files/channels.json";

module.exports = {
  name: "mods",
  description: "List Modules for a specific course",
  execute(msg, args) {
    course = args[0].toUpperCase();
    file = loadFile();

    modules = getClass(file, course);

    embed_base = new Discord.MessageEmbed()
      .setColor("#8332a8")
      .setTitle("Modules")
      .setDescription(
        `These are the module codes and titles that are related to the course ${course}`
      )
      .setTimestamp()
      .setFooter("- Swanbot 2.0 ❤️");

    modules.forEach((module) => {
      embed_base.addField(module.title, module.code, true);
    });

    msg.reply(embed_base);
  },
};

function loadFile() {
  let location = fs.readFileSync(filepath);
  let data = JSON.parse(location);
  return data.modules;
}

function getClass(file, course) {
  modules = [];

  file.forEach((module) => {
    if (module.class.includes(course)) {
      modules.push(module);
    }
  });
  return modules;
}
