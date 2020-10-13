import { Quiz } from "./../types/quiz_types";

const shuffleArray = (Array: any[]) =>
  [...Array].sort(() => Math.random() - 0.5);

export const getQuizDetails = async (
  totalQuestions: number,
  level: string
): Promise<Quiz[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
  );
  let { results } = await res.json();
  const quiz = results.map((questionObj: Quiz) => {
    return {
      Question: questionObj.question,
      answer: questionObj.correct_answer,
      option: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quiz;
};
