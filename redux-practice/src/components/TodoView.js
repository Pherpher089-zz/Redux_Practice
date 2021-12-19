import React from "react";
import { connect } from 'react-redux';
import { addTodo, removeTodo, editTodo, completeTodo } from '../actions/TestActions'

class TodoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTitle: '',
            newDescription: '',
        };
    }

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        let currentTodos = this.props.todos
        console.log(currentTodos)
        currentTodos = [...currentTodos, { title: this.state.newTitle, description: this.state.newDescription }]
        this.props.addTodo(currentTodos)
    }

    render() {
        console.log('Here')
        console.log(this.props.todos)
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Title" value={this.state.newTitle} name='newTitle' onChange={this.onChange} />
                    <input placeholder="Description" value={this.state.newDescription} name='newDescription' onChange={this.onChange} />
                    <button >Add Todo</button>
                </form>
                <div>{this.props.todos.map(todo => (
                    <div>
                        <h1>{todo.title}</h1>
                        <span>{todo.description}</span>
                    </div>
                ))}</div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, removeTodo, editTodo, completeTodo })(TodoView);