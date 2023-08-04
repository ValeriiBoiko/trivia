import {createAsyncThunk} from '@reduxjs/toolkit';
import quizApi from '@api/quiz/quizApi';
import {
  TGetQuizQuestionsRequest,
  TGetQuizQuestionsResponse,
} from '@api/quiz/types';

export const getQuestions = createAsyncThunk<
  TGetQuizQuestionsResponse['results'],
  TGetQuizQuestionsRequest
>('quiz/getQuizQuestions', async params => {
  const response = await quizApi.getQuestions(params);

  return response.data.results;
});
