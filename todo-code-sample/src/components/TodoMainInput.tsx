import React from 'react';
import { TodoMainInputProps } from '../types/interfaces';

const TodoMainInput = (props: TodoMainInputProps) => {
    const {
        inputText,
        setInputText,
        handleAddTodo,
    } = props;

    return (
        <>
            <h1 data-testid='test-todo-title'>Todo List</h1>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter a new todo"
                className='todo-input'
            />
            <button
                onClick={handleAddTodo}
                className='add-todo-button'
            >
                Add Todo
            </button>
        </>
    );
}

export default TodoMainInput;
