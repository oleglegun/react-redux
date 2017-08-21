import {getTodos} from "../lib/todoServices"

const initialState = {
    todos: [],
    currentTodo: '',
}

const TODO_ADD = 'TODO_ADD'
const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// Action creators
export const updateCurrent = (val) => ({
    type: CURRENT_UPDATE,
    payload: val,
})

export const loadTodos = (todos) => ({
    type: TODOS_LOAD,
    payload: todos
})

// Actions creator for thunk (returns a function)
export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        case CURRENT_UPDATE:
            console.log(action.payload)
            return { ...state, currentTodo: action.payload}
        default:
            return state
    }
}