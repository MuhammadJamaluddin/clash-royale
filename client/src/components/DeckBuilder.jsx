import React from 'react';
import Card from './Card';
import ShareButton from './ShareButton';

class DeckBuilder extends React.Component {
  constructor(props) {
    super(props);
    const { generateRandomDeck } = this.props;
    const { cardsData } = this.props;
    this.generateRandomDeck = generateRandomDeck;
    this.cardsData = cardsData;
  }

  render() {
    const { currentDeck } = this.props;

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
        <ShareButton />
      </div>
    );
  }
}

export default DeckBuilder;
