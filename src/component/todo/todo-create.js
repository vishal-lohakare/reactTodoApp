import React, {Component} from 'react';

const TodoCreate = (props) => {

    const addTodo = (event) => {
        if(event.key === 'Enter') {
            props.addTodo(event.target.value);
            event.target.value = "";
        }
    };
    
    return (
        <div>
            <input className="addTodoText" type="text" placeholder="What are you doing today?" onKeyPress={addTodo} />
        </div>
    );
};

export default TodoCreate;