export type TLoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

export type TQuestionType = 'boolean';

export type TDifficultyLevel = 'easy' | 'hard';

export type TQuizQuestion = {
  id: number;
  type: TQuestionType;
  category: string;
  question: string;
  correctAnswer: boolean;
  userAnswer?: boolean;
};
