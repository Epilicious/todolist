import React, { ReactElement } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

import TodoList from "./components/TodoList/TodoList";
import { TodosProvider } from "./shared/TodosProvider";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  it("renders", () => {
    const navigation = screen.getByText("Home");
  });
});
