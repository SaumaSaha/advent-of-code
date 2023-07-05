const WINPOINT = 6;
const DRAWPOINT = 3;

const shapePoints = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

const sum = (a, b) => a + b;

const hasElfWon = (pointDifference) =>
  pointDifference === -1 || pointDifference === 2;

const isGameDraw = (pointDifference) => pointDifference === 0;

const elfScoreIn = (round) => {
  const { opponentShapePoints, elfShapePoints } = round;
  const pointDifference = opponentShapePoints - elfShapePoints;
  let extraPoints = 0;
  if (hasElfWon(pointDifference)) {
    extraPoints = WINPOINT;
  }
  if (isGameDraw(pointDifference)) {
    extraPoints = DRAWPOINT;
  }

  return elfShapePoints + extraPoints;
};

const calculateElfScores = (rounds) => rounds.map((round) => elfScoreIn(round));

const calculateTotalScore = (scores) => scores.reduce(sum, 0);

const generateRoundsInPoints = (strategyGuide) => {
  return strategyGuide.split("\n").map((round) => {
    const [opponentMove, elfMove] = round.split(" ");
    return {
      opponentShapePoints: shapePoints[opponentMove],
      elfShapePoints: shapePoints[elfMove],
    };
  });
};

const calculateTotalScoreOfElf = (strategyGuide) => {
  const roundsInPoints = generateRoundsInPoints(strategyGuide);
  const elfScores = calculateElfScores(roundsInPoints);
  return calculateTotalScore(elfScores);
};

module.exports = {
  hasElfWon,
  isGameDraw,
  elfScoreIn,
  calculateElfScores,
  calculateTotalScore,
  generateRoundsInPoints,
  calculateTotalScoreOfElf,
};
