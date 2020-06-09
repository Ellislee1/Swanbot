require("discord.js");
xkcd = require("xkcd");

white_list = ["staff-general", "general", "memes"];

module.exports = {
  name: "help",
  description: "Bot Details",
  execute(msg, args) {
    can_post = false;
    white_list.forEach((item) => {
      if (msg.channel.name == item) {
        can_post == true;
      }
    });
    if (!can_post) {
      return;
    }

    comic = Math.floor(Math.random() * 2317);
    xkcd(comic, function (data) {
      console.log(data);
      msg.channel.send(
        "Title: " + data.title + "\nalt: *" + data.alt + "*\n" + data.img
      );
    });
  },
};
