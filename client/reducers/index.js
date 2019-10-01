import { combineReducers } from 'redux';
import cardsDataReducer from './storeCardsData';
import handleDeckState from './handleDeckState';

const rootReducer = combineReducers({
  cardsData: cardsDataReducer,
  currentDeck: handleDeckState,
});

export default rootReducer;
