import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import { TodosProvider } from "../../shared/TodosProvider";
import Home from "../Home/Home";
import TodoList from "../TodoList/TodoList";

function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/todos" exact>
        <TodosProvider>
          <TodoList />
        </TodosProvider>
      </Route>
    </Switch>
  );
}

export default Routes;
