/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const CardOption = ({ card, originalCard, setCard }) => (
  <img
    alt={`a game card showing ${card.idName}`}
    src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`}
    onClick={() => {
      setCard({ originalCardId: originalCard._id, selectedCard: card });
    }}
  />
);

export default CardOption;
