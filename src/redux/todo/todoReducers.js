const { FETCH_TODO_LIST_REQUEST, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE } = require("./todoTypes")


const initialState = {
    loading: false,
    todos: [],
    datas:[],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TODO_LIST_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                error: ''
            }
        case FETCH_TODO_LIST_FAILURE:
            return {
                ...state,
                todos: [],
                error: action.payload
            }
        case ADD_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                datas: action.payload,
                error: ''
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                datas: [],
                error: action.payload
            }
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                datas: action.payload,
                error: ''
            }
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                datas: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer