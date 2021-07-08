import React, { ReactElement } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { render, RenderResult, screen } from "@testing-library/react";
import TodoListItem from "./TodoListItem";

describe("TodoListItem", () => {
  let wrapper: RenderResult;

  beforeAll(() => {
    render(<TodoListItem />);
  });
});
