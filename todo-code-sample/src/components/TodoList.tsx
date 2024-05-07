import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addTodo, deleteTodo, modifyTodo } from '../actions/actions';

const TodoList: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [modifyText, setModifyText] = useState('');
  const [modifyId, setModifyId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleModifyStart = (id: number, text: string) => {
    setModifyId(id);
    setModifyText(text);
  };

  const handleModifyCancel = () => {
    setModifyId(null);
    setModifyText('');
  };

  const handleModifySave = () => {
    if (modifyText.trim() !== '') {
      dispatch(modifyTodo(modifyId!, modifyText));
      setModifyId(null);
      setModifyText('');
    }
  };

  return (
    <div className='todo-container'>
      <h1>Todo List</h1>
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
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-item'>
            {modifyId === todo.id ? (
              <>
                <input
                  type="text"
                  value={modifyText}
                  onChange={(e) => setModifyText(e.target.value)}
                  className='modify-todo-input'
                />
                <button 
                  onClick={handleModifySave}
                  className={`todo-buttons modify-todo-button`}
                >
                  Save
                </button>
                <button 
                  onClick={handleModifyCancel}
                  className={`todo-buttons modify-todo-button`}
                >
                  Cancel
                </button>
              </>
            ) : (
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
