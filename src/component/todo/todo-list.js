import React from 'react';
import '../../App.css';

const TodoList = (props) => {

    return (
        <ul className="ListItem">
            {
                props.todoList.map(item => {
                    return (
                        <li key={item.id} onClick={() => {props.updateTodo(item)}}>
                            <input type="checkbox" checked={item.status} /> 
                            <span className={ item.status ? "completed" : ""} > {item.text} </span>
                            <a href="#" onClick={() => {props.deleteTodo(item)}} class="btn btn-primary a-btn-slide-text deleteItem">
                                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                <span><strong>Delete</strong></span>            
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default TodoList;