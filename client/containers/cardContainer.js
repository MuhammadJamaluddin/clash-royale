import { connect } from 'react-redux';
import Card from '../src/components/Card';
import removeCard from '../actions/removeCard';
import toggleModal from '../actions/toggleModal';

const mapDispatchToProps = (dispatch) => ({
  removeCard: (cardId) => dispatch(removeCard(cardId)),
  toggleModal: (cardId) => dispatch(toggleModal(cardId)),
});

const CardContainer = connect(null, mapDispatchToProps)(Card);

export default CardContainer;
