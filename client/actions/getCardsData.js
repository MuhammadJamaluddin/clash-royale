import storeCardsData from './storeCardsData';
import generateRandomDeck from './generateRandomDeck';

const getCardsData = () => (dispatch, getState) => {
  fetch('/cardsData')
    .then((res) => res.json())
    .then((res) => {
      dispatch(storeCardsData(res));

      const { cardsData } = getState();
      dispatch(generateRandomDeck(cardsData));
    })
    .catch((err) => console.log(err));
};

export default getCardsData;
