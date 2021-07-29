import React, { ReactElement } from "react";
import { useTodos } from "../../shared/TodosProvider";

function Counter(): ReactElement {
  const { todos } = useTodos();
  const inCompletedTodos = todos.filter((todo) => todo.completed === false);
  const todosLeft =
    inCompletedTodos.length === 1 ? (
      <div>{`${inCompletedTodos.length} Task open`}</div>
    ) : (
      <div>{`${inCompletedTodos.length} Tasks open`}</div>
    );
  return <div>{inCompletedTodos.length > 0 && todosLeft}</div>;
}

export default Counter;
