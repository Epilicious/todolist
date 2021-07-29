import React, {
  ChangeEvent,
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { SyntheticEvent } from "react";
import { Todo } from "../types/Todo";
import { MockTodos } from "./MockTodos";

interface TodosContext {
  todos: Todo[];
  onDelete: (e: SyntheticEvent, todo: Todo) => void;
  addToDo: (task: Todo) => void;
  toggleTodo: (id: string) => void;
}

export const TodosContext = createContext({} as TodosContext);

export const useTodos = (): TodosContext => useContext(TodosContext);

export function TodosProvider(props: { children: ReactElement }): ReactElement {
  const [todos, setTodos] = useState(MockTodos);

  const onDelete = (e: SyntheticEvent, todo: Todo) => {
    e.stopPropagation();
    const filteredTodos = todos.filter((_todo) => _todo.id !== todo.id);
    setTodos(filteredTodos);
  };

  const addToDo = (todo: Todo) => {
    if (todo.task.trim() === "") return;

    const checkEquality = (_todo: Todo) => {
      const inputTodo = _todo.task.toUpperCase().trim();
      const stateTodo = todo.task.toUpperCase().trim();
      return inputTodo === stateTodo;
    };
    const sameTask = todos.filter(checkEquality);
    if (sameTask.length > 0) return;

    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  const toggleTodo = (id: string) => {
    const clickedTodo = todos.map((todo, _index) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(clickedTodo);
  };

  return (
    <TodosContext.Provider value={{ todos, onDelete, addToDo, toggleTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
}
