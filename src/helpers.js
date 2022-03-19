export const shuffleAnswers = (trivia) => {
  const unshuffledAnswers = [trivia.correctAnswer, ...trivia.wrongAnswers];

  return unshuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
