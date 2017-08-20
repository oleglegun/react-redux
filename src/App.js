import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
    render() {
        return (
            <div className="App">

                <TodoForm/>
                <TodoList todos={this.props.todos}/>

            </div>

        );
    }
}

export default App;
