const { deepStrictEqual, strictEqual } = require("assert");
const { describe, it } = require("node:test");
const {
  hasElfWon,
  isGameDraw,
  elfScoreIn,
  calculateElfScores,
  generateRoundsInPoints,
  calculateTotalScoreOfElf,
  calculateTotalScore,
} = require("../src/rock-paper-sissor");

describe("rock-paper-sissor", () => {
  describe("hasElfWon", () => {
    it("should give true when point difference is -1 or 2", () => {
      const actual = hasElfWon(2);
      const expected = true;
      strictEqual(actual, expected);
    });
    it("should give true when point difference is -1 or 2", () => {
      const actual = hasElfWon(-1);
      const expected = true;
      strictEqual(actual, expected);
    });
    it("should give false when point difference is not -1 or 2", () => {
      const actual = hasElfWon(1);
      const expected = false;
      strictEqual(actual, expected);
    });
  });

  describe("isGameDraw", () => {
    it("should give true if the game is drawn means point difference is 0", () => {
      const actual = isGameDraw(0);
      const expected = true;
      strictEqual(actual, expected);
    });
    it("should give false if the game is not drawn means point difference is not 0", () => {
      const actual = isGameDraw(1);
      const expected = false;
      strictEqual(actual, expected);
    });
  });

  describe("elfScoreIn", () => {
    it("should return the score by adding the win points with elf shape points if the elf wins", () => {
      const actual = elfScoreIn({ opponentShapePoints: 1, elfShapePoints: 2 });
      const expected = 8;
      strictEqual(actual, expected);
    });
    it("should return the score by adding the draw points with elf shape points if the game is draw", () => {
      const actual = elfScoreIn({ opponentShapePoints: 2, elfShapePoints: 2 });
      const expected = 5;
      strictEqual(actual, expected);
    });
    it("should return elf shape points if the elf loses", () => {
      const actual = elfScoreIn({ opponentShapePoints: 2, elfShapePoints: 1 });
      const expected = 1;
      strictEqual(actual, expected);
    });
  });

  describe("calculateTotalScore", () => {
    it("should calculate the total of the given scores", () => {
      const actual = calculateTotalScore([1]);
      const expected = 1;
      strictEqual(actual, expected);
    });
    it("should calculate the total of the given scores", () => {
      const actual = calculateTotalScore([1, 2]);
      const expected = 3;
      strictEqual(actual, expected);
    });
  });

  describe("calculateElfScores", () => {
    it("should calculate the elf scores in each round and give a list", () => {
      const actual = calculateElfScores([
        { opponentShapePoints: 2, elfShapePoints: 2 },
        { opponentShapePoints: 1, elfShapePoints: 2 },
        { opponentShapePoints: 2, elfShapePoints: 1 },
      ]);
      const expected = [5, 8, 1];
      deepStrictEqual(actual, expected);
    });
  });

  describe("generateRoundsInPoints", () => {
    it("should generate a single round using points of the shape selected", () => {
      const actual = generateRoundsInPoints("B X");
      const expected = [{ opponentShapePoints: 2, elfShapePoints: 1 }];
      deepStrictEqual(actual, expected);
    });
    it("should generate the rounds using points of the shapes", () => {
      const actual = generateRoundsInPoints("B X\nA Y");
      const expected = [
        { opponentShapePoints: 2, elfShapePoints: 1 },
        { opponentShapePoints: 1, elfShapePoints: 2 },
      ];
      deepStrictEqual(actual, expected);
    });
  });

  describe("calculateTotalElfScore", () => {
    it("should calculte the total score of the elf after all the rounds", () => {
      const actual = calculateTotalScoreOfElf("B X\nC Z\nA Y");
      const expected = 15;
      strictEqual(actual, expected);
    });
  });
});
