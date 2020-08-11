import React, { useEffect } from 'react'
import { fetchTodos, deleteTodos } from '../redux'
import { connect } from 'react-redux'
import { List, Typography, Divider, Button } from 'antd';
import '../index.css';
import AddTodo from './AddTodo';

function TodoList(  props ) {
    const { todoData, fetchTodos, deleteTodos } = props
    useEffect(() => {
        fetchTodos()
    }, [])
    function deleteTodo(id) {
        props.deleteTodos(id);
        props.fetchTodos();
    }
      
    return todoData.loading ? (
        <h2>Loading</h2>
    ) : todoData.error ? (
        <h2>{todoData.error}</h2>
    ) : (
                <div className="container">
                    <div className="row">
                        <h2>Add Todo</h2>
                        <AddTodo />
                        <Divider orientation="left">Todo List</Divider>
                        <List
                            size="large"
                            bordered
                            dataSource={todoData.todos}
                            renderItem={item => <List.Item>{item.todoName} 
                             {/* <button onClick={}>Buycakes</button> */}
                            <Button onClick={() => deleteTodo(item._id)} type="dashed">Delete</Button></List.Item>}
                        />
                    </div>
                </div>
            )
}

const mapStateToProps = state => {
    return {
        todoData: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos()),
        deleteTodos: (id) => dispatch(deleteTodos(id))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
