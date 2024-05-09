import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, MODIFY_TODO } from '../types/types';
import { TodosState } from '../types/interfaces';

const initialState: TodosState = {
  todos: []
};

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case MODIFY_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
        )
      };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer
});
