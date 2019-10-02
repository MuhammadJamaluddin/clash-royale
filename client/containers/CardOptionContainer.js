import { connect } from 'react-redux';
import CardOption from '../src/components/CardOption';
import setCard from '../actions/setCard';

const mapDispatchToProps = (dispatch) => ({
  setCard: (cardsDetails) => dispatch(setCard(cardsDetails)),
});

const CardOptionContainer = connect(null, mapDispatchToProps)(CardOption);

export default CardOptionContainer;
