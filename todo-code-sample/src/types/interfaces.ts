export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

export interface TodoItemProps {
    todo: Todo,
    handleModifyStart: (id: number, text: string) => void,
    handleDeleteTodo: (id: number) => void,
}

export interface TodoMainInputProps {
    inputText: string,
    setInputText: (text: string) => void,
    handleAddTodo: () => void,
}

export interface TodoUpdateProps {
    modifyText: string | number | readonly string [] | undefined,
    setModifyText: (text: string) => void,
    handleModifySave: () => void,
    handleModifyCancel: () => void,
}
