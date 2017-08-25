import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div className="App">

                <Router>
                    <div className="container">
                        <Message/>
                        <TodoForm/>
                        <TodoList/>
                        <Footer/>
                    </div>
                </Router>
            </div>

        )
    }
}

export default App