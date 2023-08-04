export type TGetQuestionsRequest = {
  amount: number;
  difficulty: string;
  type: boolean;
};

export type TGetQuestionsResponse = {
  results: {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
};
