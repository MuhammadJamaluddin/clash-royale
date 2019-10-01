import React from 'react';
import Button from '@material-ui/core/Button';

const RandomizeButton = ({ generateRandomDeck, cardsData }) => (
  <Button variant="contained" color="primary" id="randomize" onClick={() => generateRandomDeck(cardsData)}>
    generate Random deck
  </Button>
);

export default RandomizeButton;
