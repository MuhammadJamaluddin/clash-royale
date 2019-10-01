import React from 'react';

const Card = ({ selected, card }) => {
  const remove = () => {

  };

  const add = () => {

  };

  const showInfo = () => {

  };

  return (
    selected ? <img alt="a card showing" src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} /> : <div className="notSelected" />
  );
};

export default Card;
