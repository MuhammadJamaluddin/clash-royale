import { connect } from 'react-redux';
import SelectMode from '../src/components/SelectMode';

const mapStateToProps = (state) => ({
  cardsData: state.cardsData,
});

const SelectModeContainer = connect(mapStateToProps, null)(SelectMode);

export default SelectModeContainer;
