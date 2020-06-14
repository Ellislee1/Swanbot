require("discord.js");
white_list2 = ["rules"];

module.exports = {
  name: "rules",
  description: "Rules of the server",
  execute(msg, args) {
    msg.delete();

    can_post = false;
    white_list2.forEach((item) => {
      if (msg.channel.name == item) {
        can_post = true;
      }
    });
    if (can_post === false) {
      return;
    }

    msg.channel.send({
      embed: {
        color: 3447003,
        author: {},
        title: "Rules",
        description:
          "While this server is not in anyway afiliated with the university, nor does the university control any aspect of the server. However everyone in the server is to follow the rules laidout below in addition to the universities. [Info on the Swansea University Policies and Procedures](https://www.swansea.ac.uk/about-us/compliance/freedom-of-information-/publication-scheme/our-policies-and-procedures/)\n[Academic Misconduct infomation](https://myuni.swansea.ac.uk/academic-life/academic-misconduct/)",
        fields: [
          {
            name: "Self Policing",
            value:
              "This server is self-policed. Anything that is considered inappropriate or against any of the rules (either server or university related) will be moderated accordingly.",
          },
          {
            name: "Academic Misconduct",
            value:
              "The university does not tolerate academic misconduct and neither does this server. Anyone suspected of academic misconduct, caught publishing material not made available by the university to students or making false claims to work will be reported to the university’s academic board, the relevant lecturers and be banned from the server as well as having related posts taken down.",
          },
          {
            name: "Bullying, Racism & Discrimination",
            value:
              "As with the university this server does not tolerate bullying, racism or discrimination, anyone who feels they are a victim of this by anyone on the server or by anyone on the course should contact the university as well as notifying the server so the individual can be banned and reported separately to the university's academic board.",
          },
          {
            name: "General",
            value:
              "Follow all guidlines set out by the university, the course and the modules you take and be respective towards your fellow students.",
          },
        ],
        timestamp: new Date(),
        footer: {
          text: "- Ellis",
        },
      },
    });
  },
};
