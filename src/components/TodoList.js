import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo} from "../reducers/todo"

const TodoItem = ({isComplete, name, id, toggleTodo}) => (
    <li>
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
            <TodoItem key={todo.id} {...todo} toggleTodo={this.props.toggleTodo}/>
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
    {fetchTodos, toggleTodo}
)(TodoList)