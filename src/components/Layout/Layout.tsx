import React, { ReactElement } from "react";
import Navigation from "../Navigation/Navigation";
import { Content } from "./style";

function Layout(props: { children: ReactElement }): ReactElement {
  return (
    <div className="app">
      <Navigation />
      <Content> {props.children}</Content>
    </div>
  );
}

export default Layout;
