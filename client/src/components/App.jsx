import React from 'react';
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

export default App;
