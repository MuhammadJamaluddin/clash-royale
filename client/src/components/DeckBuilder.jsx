import React from 'react';
import CardContainer from '../../containers/cardContainer';
import RandomizeButton from './randomizeButton';
import ShareButton from './ShareButton';

const DeckBuilder = ({ cardsData, currentDeck, generateRandomDeck, shareCards }) => {
  const deck = [];
  for (let i = 0; i < 8; i += 1) {
    if (currentDeck[i] === undefined || currentDeck[i].state === 'notSelected') {
      deck.push(<CardContainer selected={false} card={currentDeck[i]} key={i} />);
    } else {
      deck.push(<CardContainer selected key={currentDeck[i].idName} card={currentDeck[i]} />);
    }
  }

  return (
    <div>
      <div id="mainDeck">
        {deck}
      </div>
      <RandomizeButton cardsData={cardsData} generateRandomDeck={generateRandomDeck} />
      <ShareButton shareCards={shareCards} currentDeck={currentDeck} />
    </div>
  );
};

export default DeckBuilder;
