import React from "react";

import { useRoutes } from "react-router-dom";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import Routes from "./Routes";

import "./App.scss";

const muiTheme = createTheme();

const App = () => {
  const routes = useRoutes(Routes);

  return (
    <ThemeProvider theme={muiTheme}>
      <ChakraProvider>
        {routes}
        <ColorModeScript />
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
