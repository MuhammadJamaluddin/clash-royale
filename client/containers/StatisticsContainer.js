import { connect } from 'react-redux';
import Statistics from '../src/components/Statistics';

const mapStateToProps = (state) => ({
  currentDeck: state.currentDeck,
});

const StatisticsContainer = connect(mapStateToProps, null)(Statistics);

export default StatisticsContainer;
