export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

export const addTodo = (todo) => (dispatch) => {
    dispatch({ type: ADD_TODO, payload: todo })
}
export const removeTodo = (todo) => (dispatch) => {
    dispatch({ type: REMOVE_TODO, payload: todo })
}
export const editTodo = (todo) => (dispatch) => {
    dispatch({ type: EDIT_TODO, payload: todo })
}
export const completeTodo = (todo) => (dispatch) => {
    dispatch({ type: COMPLETE_TODO, payload: todo })
}