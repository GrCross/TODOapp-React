import App from "./App";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';
import moment from "moment";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo-Text">
                        Text:
                    </label>
                    <input
                        id="new-todo-text"
                        onChange={this.handleChange}
                        value={this.state.text}/>
                    <div/>
                    <label htmlFor="new-todo-Priority">
                        Priority:
                    </label>
                    <input
                        id="new-todo-priority"
                        onChange={this.handleChange}
                        value={this.state.priority}
                        type="number"/>
                    <div/>
                    <label htmlFor="new-todo-dueDate2">
                        dueDate:
                    </label>
                    <input
                        id="new-todo-dueDate"
                        onChange={this.handleChange}
                        value={this.state.dueDate}
                        type="date"/>
                    <div/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <TodoList items= {this.state.items}/>
            </div>
        );
    }

    handleChange(e) {
        if(e.target.id === "new-todo-text"){
            this.setState({text:e.target.value});
        }else if (e.target.id === "new-todo-priority") {
            this.setState({priority: e.target.value});
        }else if(e.target.id === "new-todo-dueDate"){
            this.setState({dueDate:e.target.value});

        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.dueDate.length || !this.state.priority.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority:this.state.priority,
            dueDate:this.state.dueDate,
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority:'',
            dueDate: ''
        }));
    }
}

export default TodoApp;