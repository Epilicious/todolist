import { Card } from "@material-ui/core";
import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 1em;
  margin-inline-end: 1em;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
