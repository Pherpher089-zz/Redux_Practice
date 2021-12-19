import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO } from "../actions/TestActions"

export const initialState = {
    todos: [{ title: 'test', description: 'test' }],
}

export const testReducer = (testState = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...testState,
                todos: action.payload
            }

        case REMOVE_TODO:
            return [...testState,
            {
                todos: action.payload
            }
            ]
        case EDIT_TODO:
            return [...testState,
            {
                todos: action.payload
            }
            ]
        case COMPLETE_TODO:
            return [...testState,
            {
                todos: action.payload
            }
            ]
        default:
            return testState;
    }
}