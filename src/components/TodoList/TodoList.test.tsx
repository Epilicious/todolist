import React, { ReactElement } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { render, RenderResult, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import TodoListItem from "../TodoListItem/TodoListItem";

describe("Todos", () => {
  let wrapper: RenderResult;

  beforeAll(() => {
    render(<TodoList />);
  });

  it("renders an unordered list", async () => {
    expect(screen.getByTitle("todoContainer")).toBeTruthy();
  });
});
