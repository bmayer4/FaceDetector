import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import 'tachyons';
import { checkAuth } from './actions';

const store = createStore(reducers, {}, applyMiddleware(thunk)); 

store.dispatch(checkAuth()).then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
});
