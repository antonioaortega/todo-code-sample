import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../store/store';
import TodoList from './../components/TodoList';

describe('TodoList component', () => {
  it('should render the todo list component', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(getByTestId('test-todo-title')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter a new todo')).toBeInTheDocument();
  });

  it('should add a todo when the add button is clicked', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const inputElement = getByPlaceholderText('Enter a new todo');
    fireEvent.change(inputElement, { target: { value: 'Test todo' } });
    fireEvent.click(getByText('Add Todo'));

    expect(getByText('Test todo')).toBeInTheDocument();
  });

});
