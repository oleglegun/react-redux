import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let state = {
    todos: [
        {id: 1, name: 'Todo 1', isComplete: false},
        {id: 2, name: 'Todo 2', isComplete: true},
        {id: 3, name: 'Todo 3', isComplete: true}
    ]
}

ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
registerServiceWorker();
