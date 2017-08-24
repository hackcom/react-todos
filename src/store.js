import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import todoApp from './reducers/index';

export default createStore(todoApp, applyMiddleware(thunk));