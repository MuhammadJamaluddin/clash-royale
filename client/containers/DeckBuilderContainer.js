import { connect } from 'react-redux';
import DeckBuilder from '../src/components/DeckBuilder';
import generateRandomDeck from '../actions/generateRandomDeck';
import shareCards from '../actions/shareCards';

const mapStateToProps = (state) => ({
  cardsData: state.cardsData,
  currentDeck: state.currentDeck,
});

const mapDispatchToProps = (dispatch) => ({
  generateRandomDeck: (cardsData) => dispatch(generateRandomDeck(cardsData)),
  shareCards: (cards) => dispatch(shareCards(cards)),
});

const DeckBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);

export default DeckBuilderContainer;
