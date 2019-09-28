import changeCardsData from './cardsData';

const getCardsData = () => (dispatch) => {
  fetch('/cardsData')
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch(changeCardsData(res));
    })
    .catch((err) => console.log(err));
};

export default getCardsData;
