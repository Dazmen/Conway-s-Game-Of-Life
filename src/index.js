import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './redux/reducer/rootReducer.js'

const store = createStore(rootReducer, applyMiddleware(logger))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


