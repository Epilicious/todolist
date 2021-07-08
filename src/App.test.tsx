import React, { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";
import TodoList from "./components/TodoList/TodoList";

describe("App", () => {
  let wrapper: ShallowWrapper<ReactElement>;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("renders Todos", () => {
    wrapper.contains(<TodoList />);
  });
});
