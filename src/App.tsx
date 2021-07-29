import { StylesProvider } from "@material-ui/core";
import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Routes from "./components/Routes/Routes";
import TodoList from "./components/TodoList/TodoList";
import { TodosProvider, useTodos } from "./shared/TodosProvider";
import { Todo } from "./types/Todo";

function App(): ReactElement {
  const { todos, addToDo } = useTodos();

  return (
    <StylesProvider injectFirst>
      <Layout>
        <Routes />
      </Layout>
    </StylesProvider>
  );
}

export default App;
