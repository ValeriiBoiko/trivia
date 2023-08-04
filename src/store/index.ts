import {configureStore} from '@reduxjs/toolkit';
import quizSlice from './quizSlice';
const createDebugger = require('redux-flipper').default; // <-- ADD THIS

const store = configureStore({
  reducer: {
    [quizSlice.name]: quizSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()), // <-- ADD THIS
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
