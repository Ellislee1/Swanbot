require("discord.js");
const fs = require("fs");
const filepath = "./files/channels.json";

module.exports = {
  name: "channels",
  description: "Create all channels",
  execute(msg, args) {
    if (!msg.member.hasPermission(["MANAGE_CHANNELS"]))
      return msg.reply(
        `I'm Sorry ${msg.member.user.username}; I'm afraid I can't do that. I think you know what the problem is... You do not have permission to do that. `
      );
    let data = loadFile();
    var server = msg.guild;
    server_channels = getActive(msg.guild.channels.cache);

    data.forEach((chan) => {
      is_made = false;
      server_channels.forEach((schan) => {
        if (schan == chan.channel) {
          is_made = true;
        }
      });

      if (!is_made) {
        server.roles.create({ data: { name: chan.code } });
        //   .then(console.log)
        //   .catch(console.error);
      }
    });

    data.forEach((chan) => {
      server_roles = getRoles(msg.guild.roles.cache);
      console.log(server_channels);
      is_made = false;
      server_channels.forEach((schan) => {
        if (schan == chan.channel) {
          is_made = true;
        }
      });

      if (!is_made) {
        server.channels
          .create(chan.channel, {
            type: chan.type,
            // permissionOverwrites: [
            //   {
            //     id: msg.guild.roles.fetch(getId("@everyone", server_roles)),
            //     deny: ["VIEW_CHANNEL"],
            //   },
            //   {
            //     id: msg.guild.roles.fetch(getId("Owner", server_roles)),
            //     allow: ["VIEW_CHANNEL"],
            //   },
            //   {
            //     id: msg.guild.roles.fetch(getId("Bot", server_roles)),
            //     allow: ["VIEW_CHANNEL"],
            //   },
            //   // {
            //   //   id: msg.guild.roles.fetch(getId(chan.code, server_roles)),
            //   //   allow: ["VIEW_CHANNEL"],
            //   // },
            // ],
          })
          .then(console.log)
          .catch(console.error);
      }
    });

    msg.delete();
  },
};

function loadFile() {
  let location = fs.readFileSync(filepath);
  let data = JSON.parse(location);
  return data.modules;
}

function getActive(channels) {
  all_channels = [];
  channels.each((chan) => {
    all_channels.push(chan.name);
  });
  return all_channels;
}

function getRoles(roles) {
  all_roles = [];
  roles.each((role) => {
    if (role.name != "Liberty State") {
      all_roles.push({ id: role.id, name: role.name });
    }
  });
  console.log(all_roles);
  return all_roles;
}

function getId(name, array) {
  array.forEach((elm) => {
    if (elm.name == name) {
      console.log(`${name} ${elm.id}`);
      return elm.id;
    }
  });
  return 0;
}
