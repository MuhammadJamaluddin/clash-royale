import React from 'react';
import Card from './Card';
import RandomizeButton from './randomizeButton';
import ShareButton from './ShareButton';

const DeckBuilder = ({ cardsData, currentDeck, generateRandomDeck}) => {
  const deck = [];
  for (let i = 0; i < 8; i += 1) {
    if (currentDeck[i] === undefined) {
      deck.push(<Card selected={false} key={i} />);
    } else {
      deck.push(<Card selected key={currentDeck[i].idName} card={currentDeck[i]} />);
    }
  }

  return (
    <div>
      <div id="deck">
        {deck}
      </div>
      <RandomizeButton cardsData={cardsData} generateRandomDeck={generateRandomDeck} />
      <ShareButton />
    </div>
  );
};

export default DeckBuilder;
