import { combineReducers } from '@reduxjs/toolkit';
import flashcardsReducer from '../store/flashcardSlice';
import termsReducer from '../store/termsSlice';

const rootReducer = combineReducers({
  flashcards: flashcardsReducer,
  terms: termsReducer,
});

export default rootReducer;
