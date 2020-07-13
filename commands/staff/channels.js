require("discord.js");
const fs = require("fs");
const filepath = "./files/channels.json";

module.exports = {
  name: "channels",
  description: "Create all channels",
  execute(msg, args) {
    const roles = ["Owner", "Admin"];
    loadFile();
    msg.delete();
  },
};

function loadFile() {
  let location = fs.readFileSync(filepath);
  let data = JSON.parse(location);
  console.log(data);
}
