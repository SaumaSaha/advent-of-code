const fs = require("fs");

const splitBy = (char, data) => data.trim().split(char);

const add = (a, b) => a + b;

const sumOf = (args) => args.reduce(add, 0);

const groupCaloriesCarriedByEach = (rawData) => {
  return splitBy("\n\n", rawData).map((calories) => {
    return splitBy("\n", calories).map((calorie) => +calorie);
  });
};

const calculateTotalCalories = (groupedCalories) => {
  return groupedCalories.map(sumOf);
};

const main = () => {
  fs.readFile("./sample-input.txt", "utf-8", (err, rawData) => {
    const groupedCalories = groupCaloriesCarriedByEach(rawData);
    const totalCaloriesCarriedByEach = calculateTotalCalories(groupedCalories);
    totalCaloriesCarriedByEach.sort((a, b) => a - b);
    console.log(sumOf(totalCaloriesCarriedByEach.slice(-3)));
  });
};

main();
