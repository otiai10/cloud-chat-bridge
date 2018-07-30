const {ExclamationTransform} = require("./transforms.js");

module.exports = [
  {
    source: {
      service: "LINE",
      group: "xxx-line-group",
    },
    destination: {
      service: "Slack",
      channels: ["random"],
    },
  },
  {
    source: {
      service: "LINE",
      group: "xxx-line-group",
    },
    destination: {
      service: "Slack",
      channels: ["random"],
    },
    transforms: [
      new ExclamationTransform(20),
    ],
  }
]