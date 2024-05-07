import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addTodo, deleteTodo, modifyTodo } from '../actions/actions';
import TodoItem from './TodoItem';
import TodoUpdate from './TodoUpdate';
import TodoMainInput from './TodoMainInput';

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
      <TodoMainInput
        inputText={inputText}
        setInputText={setInputText}
        handleAddTodo={handleAddTodo}
      />
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-item'>
            {modifyId === todo.id ? (
              <TodoUpdate
                modifyText={modifyText}
                setModifyText={setModifyText}
                handleModifySave={handleModifySave}
                handleModifyCancel={handleModifyCancel}
              />
            ) : (
              <TodoItem
                todo={todo}
                handleModifyStart={handleModifyStart}
                handleDeleteTodo={handleDeleteTodo}  
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
