import { connect } from 'react-redux';
import DeckBuilder from '../src/components/DeckBuilder';
import generateRandomDeck from '../actions/generateRandomDeck';

const mapStateToProps = (state) => ({
  cardsData: state.cardsData,
  currentDeck: state.currentDeck,
});

const mapDispatchToProps = (dispatch) => ({
  generateRandomDeck: (cardsData) => dispatch(generateRandomDeck(cardsData)),
});

const DeckBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);

export default DeckBuilderContainer;
