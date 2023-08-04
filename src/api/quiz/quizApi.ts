import axios from 'axios';
import {QUIZ_BASE_URI, QUIZ_QUESTIONS_ROUTE} from '@env';
import {TGetQuizQuestionsRequest, TGetQuizQuestionsResponse} from './types';

const instance = axios.create({
  baseURL: QUIZ_BASE_URI + QUIZ_QUESTIONS_ROUTE,
});

export default {
  getQuestions: (params: TGetQuizQuestionsRequest) =>
    instance.get<TGetQuizQuestionsResponse>('', {
      params,
    }),
};
