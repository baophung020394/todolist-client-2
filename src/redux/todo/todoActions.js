
import { FETCH_TODO_LIST_REQUEST, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE } from './todoTypes';
import axios from 'axios';

export const fetchTodoRequest = () => {
    return {
        type: FETCH_TODO_LIST_REQUEST
    }

}

const fetchTodoSuccess = todos => {
    return {
        type: FETCH_TODO_LIST_SUCCESS,
        payload: todos
    }
}

const fetchTodoFailure = error => {
    return {
        type: FETCH_TODO_LIST_FAILURE,
        payload: error
    }
}

export const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST
    }

}

const addTodoSuccess = datas => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: datas
    }
}

const addTodoFailure = error => {
    return {
        type: ADD_TODO_FAILURE,
        payload: error
    }
}

export const deleteTodoRequest = () => {
    return {
        type: DELETE_TODO_REQUEST
    }

}

const deleteTodoSuccess = id => {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: id
    }
}

const deleteTodoFailure = error => {
    return {
        type: DELETE_TODO_FAILURE,
        payload: error
    }
}


export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodoRequest)
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://localhost:7000/listTodo')
            .then(response => {
                console.log(response)
                const todos = response.data.todo
                dispatch(fetchTodoSuccess(todos))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchTodoFailure(errorMsg))
            })
    }
}

export const addTodos = (datas) => {
    return (dispatch) => {
        dispatch(addTodoRequest)
        axios.post('http://localhost:7000/addTodo', datas)
            .then(response => {
                console.log(response)
                const datas = response.data
                var todos = [];
                todos.push(response.data.todo)
                dispatch(addTodoSuccess(datas))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(addTodoFailure(errorMsg))
            })
    }
}
export const deleteTodos = (id) => {
    return (dispatch) => {
        dispatch(deleteTodoRequest)
        axios.post(`http://localhost:7000/deleteTodo/${id}`)
            .then(response => {
                const datas = response.data
                dispatch(deleteTodoSuccess(datas))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(deleteTodoFailure(errorMsg))
            })
    }
}