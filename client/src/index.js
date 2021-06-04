import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore,compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

import 'semantic-ui-css/semantic.min.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// console.log(process.env.REACT_APP_IEX_API_KEY);