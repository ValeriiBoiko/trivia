import {TDifficultyLevel, TQuestionType} from '@store/quizSlice/types';

export type TGetQuizQuestionsRequest = {
  amount: number;
  difficulty: TDifficultyLevel;
  type: string;
};

export type TGetQuizQuestionsResponse = {
  results: {
    category: string;
    type: TQuestionType;
    difficulty: TDifficultyLevel;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
};
