import React from 'react';
import {
    TodoItemProps,
} from './../types/interfaces';

const TodoItem = (props: TodoItemProps) => {
    const { 
        todo,
        handleModifyStart,
        handleDeleteTodo,
    } = props;

    return (
        <>
            <div className='modify-todo-ul-container'>
              <span>{todo.text}</span>
              <div className='modify-todo-ul-button-container'>
                <button
                  onClick={() => handleModifyStart(todo.id, todo.text)}
                  className={`todo-buttons modify-todo-button`}
                >
                  Modify
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className={`todo-buttons delete-todo-button`}
                >
                  Delete
                </button>
              </div>
            </div>
        </>
    )
}

export default TodoItem;
