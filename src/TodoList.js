import React from "react";
import { Todo } from "./Todo";

export class TodoList extends React.Component{

    constructor(props){
        super(props)    
    }
    render(){
        const todos=this.props.todos;
        const listItems=todos.map(todo => (
            
                <li>
                    <Todo text={todo.text} priority={todo.priority} dueDate={todo.duePriority}></Todo>
                </li>
        ));

        return(
            <ul>{listItems}</ul>
        );
    }
}
