/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import getCardsData from '../../actions/getCardsData';
import DeckBuilderContainer from '../../containers/DeckBuilderContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  componentDidMount() {
    this.store.dispatch(getCardsData());
  }

  render() {
    return (
      <div>
        {/* <Statistics /> */}
        <DeckBuilderContainer />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    replaceReducer: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
