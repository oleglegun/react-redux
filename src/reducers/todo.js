const initialState = {
    todos: [
        {id: 1, name: "First TODO item", isComplete: true},
        {id: 2, name: "Second TODO item", isComplete: false},
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            return state
    }
}