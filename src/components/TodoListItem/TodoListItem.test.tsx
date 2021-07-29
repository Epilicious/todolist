import React, { ReactElement } from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import TodoListItem from "./TodoListItem";
import { Todo } from "../../types/Todo";
import TodoList from "../TodoList/TodoList";
import { TodosProvider } from "../../shared/TodosProvider";
import { MockTodos } from "../../shared/MockTodos";

const DEFAULT_PROPS = {
  todo: MockTodos[0],
};

function renderTodoListItem(props = {}) {
  return {
    ...render(
      <TodosProvider>
        <TodoListItem {...DEFAULT_PROPS} {...props} />
      </TodosProvider>
    ),
    props: {
      ...DEFAULT_PROPS,
      ...props,
    },
  };
}

describe("TodoListItem", () => {
  it("renders the all todos", () => {
    renderTodoListItem();
    const todos = screen.getAllByRole("listitem");
    const checkbox = screen.getAllByRole("checkbox");
    expect(todos.length).toEqual(checkbox.length);
  });
});
