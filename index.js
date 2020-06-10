require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: false });
bot.commands = new Discord.Collection();
const botCommands = require("./commands");
const TOKEN = process.env.TOKEN;

Object.keys(botCommands).map((key) => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
  const args = msg.content.split(" ");
  if (args[0].charAt(0) != "!") {
    return;
  }
  args[0] = args[0].removeCharAt(1);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply("there was an error trying to execute that command!");
  }
});

String.prototype.removeCharAt = function (i) {
  var tmp = this.split(""); // convert to an array
  tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
  return tmp.join(""); // reconstruct the string
};
