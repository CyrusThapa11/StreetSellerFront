import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import Context from "./Context";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Context>
        <Provider store={store}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Provider>
      </Context>
    </BrowserRouter>
  </ChakraProvider>
);
