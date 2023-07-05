const fs = require("fs");
const { calculateTotalScoreOfElf } = require("./src/rock-paper-sissor");

const main = () => {
  fs.readFile("./res/sample-input.txt", "utf-8", (err, strategyGuide) => {
    if (err) {
      console.error(err);
      return;
    }

    const totalElfScore = calculateTotalScoreOfElf(strategyGuide);
    console.log(totalElfScore);
  });
};

main();
