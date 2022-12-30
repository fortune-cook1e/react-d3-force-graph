// const { relationshipsData } = require("./utils");

const relationshipsData = {
  nodes: [
    {
      id: "1",
      properties: {
        avatar: "https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png",
        name: "gaga",
        count: 0,
        role: "321321",
      },
    },
    {
      id: "2",
      properties: {
        avatar: "https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png",
        name: "1111",
        count: 0,
        role: "222222",
      },
    },
  ],

  links: [
    {
      source: "1",
      target: "2",
      strokeDasharray: 8,
    },
    // {
    //   source: "2",
    //   target: "1",
    //   strokeDasharray: 8,
    // },
  ],
};

module.exports = relationshipsData;
