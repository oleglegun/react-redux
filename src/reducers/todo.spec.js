import reducer from './todo'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANY'})
        expect(result).toBeDefined()
    })

    test('adds a todo item', () => {
        const startState = {
            todos: [
                {id: 1, name: 'First TODO item', isComplete: true},
                {id: 2, name: 'Second TODO item', isComplete: false},
            ]
        }
        const expectedState = {
            todos: [
                {id: 1, name: 'First TODO item', isComplete: true},
                {id: 2, name: 'Second TODO item', isComplete: false},
                {id: 3, name: 'Third TODO item', isComplete: false},
            ]
        }
        const action = {type: 'TODO_ADD', payload: {id: 3, name: 'Third TODO item', isComplete: false}}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)

    })
})