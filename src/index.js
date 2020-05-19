import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider } from "react95";
import App from "./app/App";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <div>
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  </div>,
  document.getElementById("root")
);
