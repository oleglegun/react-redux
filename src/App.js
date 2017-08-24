import React, {Component} from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                <Message/>
                <TodoForm/>
                <TodoList/>
                </div>
            </div>
        )
    }
}

export default App