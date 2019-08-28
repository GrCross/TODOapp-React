import React from 'react';

export class Todo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            
            <p>
                <b>{this.props.text}</b>
                <b>{this.props.priority}</b>
                <b>{this.props.dueDate}</b>
            </p>
            
        );

    }

}