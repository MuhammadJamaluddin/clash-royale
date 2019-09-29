/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import getCardsData from '../../actions/getCardsData';

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
        {/* <DeckBuilder /> */}
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({
    cardsData: PropTypes.array.isRequired,
  }).isRequired,
};

export default App;
