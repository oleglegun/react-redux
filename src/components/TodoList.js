import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo} from "../reducers/todo"

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
    <li className="TodoList">
        <button onClick={() => deleteTodo(id)}>Delete</button>

        <input type="checkbox"
               onChange={() => toggleTodo(id)}
               checked={isComplete}/>
        {name}
    </li>
)

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {
        let todosElements = this.props.todos.map(todo => (
            <TodoItem key={todo.id}
                      toggleTodo={this.props.toggleTodo}
                      deleteTodo={this.props.deleteTodo}
                      {...todo}/>
        ))

        return (
            <div className="TodoList">
                <ul>
                    {todosElements}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({todos: state.todo.todos}),
    {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)