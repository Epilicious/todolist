import React, { ReactElement } from "react";
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  within,
} from "@testing-library/react";
import TodoList from "./TodoList";
import { Todo } from "../../types/Todo";
import { TodosProvider, TodosContext } from "../../shared/TodosProvider";
import { MockTodos } from "../../shared/MockTodos";
import userEvent from "@testing-library/user-event";
import { BrowserRouter} from "react-router-dom";

function renderTodoList() {
  const fakeTodos: Todo[] = MockTodos;
  const addToDo = jest.fn();

  return render(
    <BrowserRouter>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </BrowserRouter>
  );
}

describe("Todos", () => {
  beforeEach(() => {
    renderTodoList();
  });
  it("renders an ul", () => {
    const ul = screen.getByRole("list");

    expect(ul).toBeInTheDocument();
  });
  it("renders a input Field", () => {
    const input = screen.getByRole("textbox", { name: /Add Task/i });
    expect(input).toBeInTheDocument();
  });
  it("changes the input value by entering a text", () => {
    const input = screen.getByRole("textbox", { name: /Add Task/i });
    fireEvent.change(input, { target: { value: "go to sleep" } });
    const inputValue = screen.getByDisplayValue("go to sleep");
    expect(inputValue).toBeInTheDocument();
  });
  it("on enter it adds a new task", () => {
    const ul = screen.getByRole("list");
    const todoForm = screen.getByRole("form", { name: /todo form/i });
    const input = screen.getByRole("textbox", { name: /Add Task/i });
    userEvent.type(input, "go to sleep{enter}");
    const inputValue = screen.getByText(/go to sleep/i);
    expect(inputValue).toBeInTheDocument();
  });
  it("doesn't add a task if the input is empty", () => {
    const input = screen.getByRole("textbox", { name: /Add Task/i });
    userEvent.type(input, "{enter}");
    const todoTasks = screen.getAllByTestId("todo");
    const todosLength = todoTasks.length;
    expect(todosLength).toEqual(2);
  });
  it("doesn't add a task if the input is already in list", () => {
    const input = screen.getByRole("textbox", { name: /Add Task/i });
    userEvent.type(input, "go to sleep{enter}");
    userEvent.type(input, "Go to Sleep{enter}");
    const todoTasks = screen.getAllByTestId("todo");
    const todosLength = todoTasks.length;
    expect(todosLength).toEqual(3);
  });
  it("deletes a todo on delete btn click", () => {
    const input = screen.getByRole("textbox", { name: /Add Task/i });
    userEvent.type(input, "go to sleep{enter}");
    const todoTasks = screen.getAllByTestId("todo");
    const { getByRole } = within(todoTasks[2]);
    const deleteBtn = getByRole("button");
    fireEvent.click(deleteBtn);
    expect(todoTasks[2]).not.toBeInTheDocument();
  });
});
