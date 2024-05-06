// TodoList.tsx

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
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {modifyId === todo.id ? (
              <>
                <input
                  type="text"
                  value={modifyText}
                  onChange={(e) => setModifyText(e.target.value)}
                />
                <button onClick={handleModifySave}>Save</button>
                <button onClick={handleModifyCancel}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleModifyStart(todo.id, todo.text)}>Modify</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
