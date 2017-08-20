const initialState = {
    todos: [ ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            return state
    }
}