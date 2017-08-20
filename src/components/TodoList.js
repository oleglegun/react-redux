import React, {Component} from 'react'

const TodoItem = ({isComplete, name}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete ? "checked" : ""}/>
        {name}
    </li>
);

export default class TodoList extends Component {
    render() {
        let todosElements = this.props.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
        ));

        return (
                <div className="TodoList">
                    <ul>
                        {todosElements}
                    </ul>
                </div>

        );
    }
}

