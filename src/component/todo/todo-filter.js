import React, {Component} from 'react';
import '../../App.css';

const TodoFilter = (props) => {

    return (
        <div className="filters">
            <span>Count : {props.todoList.length} {props.todoList.length > 1 ? 'items': 'item'}</span>
        </div>
    );

}

export default TodoFilter;