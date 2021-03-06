import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from '../reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('app'),
);
