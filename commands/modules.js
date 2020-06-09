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
  name: "modules",
  description: "Module info for enrolment",
  execute(msg, args) {
    msg.channel.send({
      embed: {
        color: 3447003,
        author: {},
        title: "Module info",
        description:
          "Please find below a list of all modules available. To join a single module use '!enrol <modules>' for example '!enrol CSC230,CSC345' would enrol you in modules 230 and 345... If they were available. \nYou can also use !drop <modules> to leave those classes",
        fields: [
          {
            name: "Module Codes",
            value:
              "CSP420\nCSC409\nCSC410\nCSCM08\nCSCM13\nCSCM18\nCSCM27\nCSCM38\nCSCM45\nCSCM48\nCSCM72\nCSCM75\nCSCM98\nCSCM28\nCSCM29\nCSCM35\nCSCM37\nCSCM39\nCSCM64\nCSCM68\nCSCM79\nCSCM85",
          },
        ],
        timestamp: new Date(),
        footer: {
          text:
            "Note: This does not enrol you on the Unis system, this is to recieve module specific infomation from the bot.",
        },
      },
    });
  },
};
