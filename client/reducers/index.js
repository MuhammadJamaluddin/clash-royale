import { combineReducers } from 'redux';
import cardsDataReducer from './storeCardsData';
import generateRandomDeckReducer from './generateRandomDeck';

const rootReducer = combineReducers({
  cardsData: cardsDataReducer,
  currentDeck: generateRandomDeckReducer,
});

export default rootReducer;
