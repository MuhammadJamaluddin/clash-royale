import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const RandomizeButton = ({ generateRandomDeck, cardsData }) => (
  <Button variant="contained" color="primary" id="randomize" onClick={() => generateRandomDeck(cardsData)}>
    generate Random deck
  </Button>
);

RandomizeButton.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  generateRandomDeck: PropTypes.func.isRequired,
};

export default RandomizeButton;
