import { debug } from "console";
import React, { ChangeEvent, useState } from "react";
import { ReactElement } from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import { v4 as uuidv4 } from "uuid";
import { useTodos } from "../../shared/TodosProvider";

import { StyledCard, StyledUl } from "./style";
import Counter from "../Counter/Counter";
import { Button, Input } from "@material-ui/core";

function TodoList(): ReactElement {
  const [task, setTask] = useState("");
  const { todos, addToDo } = useTodos();

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTask((prevState) => event.target.value);
  };

  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();
    addToDo({ id: uuidv4(), task, completed: false });
    setTask("");
  };
  return (
    <>
      <StyledCard>
        <form aria-label="todo form" onSubmit={submitTask}>
          <label htmlFor="task">Add Task:</label>
          <Input id="task" type="text" onChange={updateInput} value={task} />
          <Button onClick={submitTask}>Add</Button>
        </form>
        <Counter />
        <StyledUl aria-label="todos">
          {todos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
          ))}
        </StyledUl>
      </StyledCard>
    </>
  );
}

export default TodoList;
