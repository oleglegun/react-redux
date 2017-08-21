import React from 'react'
import {connect} from 'react-redux'

const TodoItem = ({isComplete, name}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete ? "checked" : ""}/>
        {name}
    </li>
)

const TodoList = (props) => {

    let todosElements = props.todos.map(todo => (
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

export default connect(
    (state) => ({todos: state.todos})
)(TodoList)