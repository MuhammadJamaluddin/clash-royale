const shareCards = (cards) => () => {
  fetch('/share', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cards),
  })
    .catch((err) => console.log(err));
};

export default shareCards;
