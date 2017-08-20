import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

let state = store.getState()

ReactDOM.render(<App {...state}/>, document.getElementById('root'));
registerServiceWorker();
