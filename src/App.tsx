import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { light } from "./styles/theme";

export const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <h1>WebJobs</h1>
    </ThemeProvider>
  );
};