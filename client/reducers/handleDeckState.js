import randomize from '../helpers/randomize';

const handleDeckState = (previousState = [], action = {}) => {
  switch (action.type) {
    case 'GENERATE_RANDOM_DECK':
      // Select random 8 elements from the array
      return randomize(action.cardsData, 8).map((card) => (
        { ...card, open: false, selectMode: false }));
    case 'REMOVE_CARD':
      return previousState.map((card) => (
        (card._id === action.cardId) ? { ...card, state: 'notSelected' } : card
      ));
    case 'TOGGLE_MODAL':
      return previousState.map((card) => (
        (card._id === action.cardId) ? { ...card, open: !card.open } : card
      ));
    case 'SET_CARD':
      return previousState.map((card) => (
        (card._id === action.cardsDetails.originalCardId)
          ? { open: false, selectMode: false, ...action.cardsDetails.selectedCard } : card
      ));
    default:
      return previousState;
  }
};

export default handleDeckState;
