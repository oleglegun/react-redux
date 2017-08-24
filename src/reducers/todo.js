import {createTodo, getTodos, updateTodo, destroyTodo} from "../lib/todoServices"
import {showMessage} from './messages'

const initialState = {
    todos: [],
    currentTodo: '',
}

// Constants (all exported consts are used in the messages Reducer)
export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODO_REMOVE = 'TODO_REMOVE'

// Action creators
export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload: val})
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})
export const replaceTodo = (todo) => ({type: TODO_REPLACE, payload: todo})
export const removeTodo = (id) => ({type: TODO_REPLACE, payload: id})

// Actions creators for thunk (returns a function)
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading Todos'))
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
}

export const saveTodo = (name) => {
    return (dispatch) => {
        dispatch(showMessage("Saving Todo"))
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Toggling Todo'))
        const {todos} = getState().todo
        const todo = todos.find(t => t.id === id)
        const toggled = {...todo, isComplete: !todo.isComplete}

        updateTodo(toggled)
            .then((res) => dispatch(replaceTodo(res)))
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(showMessage('Deleting Todo'))
        destroyTodo(id)
            .then(() => dispatch(removeTodo(id)))
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload), currentTodo: ''}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        case TODO_REPLACE:
            return {...state, todos: state.todos.map(t => t.id === action.payload.id ? action.payload : t)}
        case TODO_REMOVE:
            return {...state, todos: state.todos.filter(t => t.id !== action.payload)}
        default:
            return state
    }
}