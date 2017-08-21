import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {updateCurrent} from './reducers/todo'


const todoChangeHandler = (val) => store.dispatch(updateCurrent(val))

const render = () => {
    let state = store.getState()
    ReactDOM.render(
        <App
            todos={state.todos}
            currentTodo={state.currentTodo}
            changeCurrent={todoChangeHandler}
        />,
        document.getElementById('root'));
}

render()

// Subscribe to the changes of the store
store.subscribe(render)

// Test
// setTimeout(() => store.dispatch(
//     {
//         type: 'TODO_ADD',
//         payload: {id: 4, name: 'New TODO item', isComplete: true}
//     }
// ), 3000)

registerServiceWorker();
