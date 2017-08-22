import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'redux';

import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import store from './store';

function render()
{
    const state = store.getState();
    ReactDOM.render(
        <App {...state}/>
    , document.getElementById('root'));
}

render();
store.subscribe(render);
//registerServiceWorker();
