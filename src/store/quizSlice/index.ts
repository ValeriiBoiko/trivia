import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {TLoadingState, TQuizQuestion} from './types';
import {getQuestions} from './service';
import {decode} from 'html-entities';

const quizQuestionsAdapter = createEntityAdapter<TQuizQuestion>({
  selectId: book => book.id,
});
const initialState = quizQuestionsAdapter.getInitialState<{
  loading: TLoadingState;
}>({
  loading: 'idle',
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    clearQuestions: quizQuestionsAdapter.removeAll,
    answerQuestion(
      state,
      action: PayloadAction<{id: number; answer: boolean}>,
    ) {
      quizQuestionsAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          userAnswer: action.payload.answer,
        },
      });
    },
  },
  extraReducers: builder => {
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      quizQuestionsAdapter.setAll(
        state,
        action.payload.map((item, index) => ({
          id: index,
          type: item.type,
          category: decode(item.category),
          question: decode(item.question),
          correctAnswer: item.correct_answer === 'True',
        })),
      );
      state.loading = 'succeeded';
    });

    builder.addCase(getQuestions.pending, state => {
      state.loading = 'pending';
    });

    builder.addCase(getQuestions.rejected, state => {
      state.loading = 'failed';
    });
  },
});

export const {selectAll: selectAllQuestions} =
  quizQuestionsAdapter.getSelectors();

export const {clearQuestions, answerQuestion} = quizSlice.actions;

export default quizSlice;
