import React, { Component, useEffect } from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux'
import { addTodos, fetchTodos } from '../redux';

export class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoName: ''
        }
        console.log(props)
    }
    /** */
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /** Thêm Todo */
    handleSubmit = () => {
        this.props.addTodos(this.state)
        window.location.reload();
        // this.props.fetchTodos();
    }
    render() {
        return (
            <div>
                <form>
                    <div className="group">
                        <Input value={this.state.value} name="todoName" onChange={this.handleChange} placeholder="Add an Item" />
                        <Button type="primary" onClick={this.handleSubmit}>Add</Button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        datas: state.todos.datas,
        todoData: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodos: (datas) => dispatch(addTodos(datas)),
        fetchTodos: () => dispatch(fetchTodos())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)
