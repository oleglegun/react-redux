import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'


// const todoChangeHandler = (val) => store.dispatch(updateCurrent(val))

// const actions = bindActionCreators({
//     todoChangeHandler: updateCurrent
// }, store.dispatch)

// Shorthand
// const actions = bindActionCreators({
//     updateCurrent
// }, store.dispatch)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))


// render()

// Subscribe to the changes of the store
// store.subscribe(render)

// Test
// setTimeout(() => store.dispatch(
//     {
//         type: 'TODO_ADD',
//         payload: {id: 4, name: 'New TODO item', isComplete: true}
//     }
// ), 3000)

registerServiceWorker()
