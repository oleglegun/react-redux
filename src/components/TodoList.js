import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from "../reducers/todo"

const TodoItem = ({isComplete, name}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete ? "checked" : ""}/>
        {name}
    </li>
)

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {
        let todosElements = this.props.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
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
    (state) => ({todos: state.todos}),
    {fetchTodos}
)(TodoList)