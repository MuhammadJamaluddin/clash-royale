import { combineReducers } from 'redux';
import cardsDataReducer from './storeCardsData';

const rootReducer = combineReducers({
  cardsData: cardsDataReducer,
});

export default rootReducer;
