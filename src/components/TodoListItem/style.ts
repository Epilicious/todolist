import { Button, Paper } from "@material-ui/core";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Task = styled.li<{ className: "open" | "completed" }>`
  /* Adapt the colors based on primary prop */
  text-decoration: ${(props) =>
    props.className === "completed" ? "line-through" : ""};
  font-size: 1.5em;
  margin-right: 3em;
  flex-grow: 2;
`;

export const DeleteBtn = styled(Button)`
  background-color: #aa0000;
  max-width: 30px;
  max-height: 30px;
  min-width: 30px;
  min-height: 30px;
  color: white;
  &:hover {
    background-color: #ed1f00;
  }
  margin-right: 0.5em;
`;

export const StyledPaper = styled(Paper)`
  cursor: pointer;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
