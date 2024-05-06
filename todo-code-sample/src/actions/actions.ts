import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, MODIFY_TODO } from '../types/types';

let nextTodoId = 0;

export const addTodo = (text: string) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId++,
      text
    }
  };
};

export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const modifyTodo = (id: number, newText: string) => {
  return {
    type: MODIFY_TODO,
    payload: {
      id,
      newText
    }
  };
};
