import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let todosElements = this.props.todos.map(item => {
            return (
                <li key={item.id}>
                    <input type="checkbox" checked={item.isComplete ? "checked" : "" } />
                    {item.name}
                </li>
            )
        });

        return (
            <div className="App">
                <div className="TodoList">
                    <form><input type="text"/></form>
                    <ul>
                        {todosElements}
                    </ul>
                </div>
            </div>
        );
    }
}

App.PropTypes = {
    todos: PropTypes.array.isRequired
}

export default App;
