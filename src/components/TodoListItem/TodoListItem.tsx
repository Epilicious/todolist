import { Checkbox, Paper, StylesProvider } from "@material-ui/core";
import React, { ReactElement, useContext, useState } from "react";
import { useTodos } from "../../shared/TodosProvider";
import { Todo } from "../../types/Todo";
import { DeleteBtn, Task, StyledDiv, StyledPaper } from "./style";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  todo: Todo;
}

function TodoListItem(props: Props): ReactElement {
  const { todo } = props;
  const { todos, toggleTodo, onDelete } = useTodos();

  return (
    <StyledPaper onClick={() => toggleTodo(todo.id)}>
      <StyledDiv data-testid="todo">
        <Checkbox
          checked={todo.completed}
          aria-label={`todo${todo.id}`}
          inputProps={{ "aria-checked": todo.completed }}
          data-testid={`todo${todo.id}`}
        />
        <Task className={todo.completed ? "completed" : "open"}>
          {todo.task}
        </Task>

        <DeleteBtn
          size="small"
          aria-label="delete btn"
          type="button"
          onClick={(e) => onDelete(e, todo)}
        >
          <DeleteIcon />
        </DeleteBtn>
      </StyledDiv>
    </StyledPaper>
  );
}

export default TodoListItem;
