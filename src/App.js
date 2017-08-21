import React, {Component} from 'react'
// import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {updateCurrent} from './reducers/todo'


class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoForm
                    currentTodo={this.props.currentTodo}
                    changeCurrent={this.props.updateCurrent}
                />
                <TodoList todos={this.props.todos}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {updateCurrent}

export default connect(mapStateToProps, mapDispatchToProps)(App)