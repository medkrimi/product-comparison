import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const OptionsContext = React.createContext(null);
export default function createExternalRoot(container) {
  return {
    render(context) {
      ReactDOM.render(
        <OptionsContext.Provider value={context.options}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <App />
          </ThemeProvider>
        </OptionsContext.Provider>,
        container
      );
    },
    unmount() {
      ReactDOM.unmountComponentAtNode(container);
    }
  };
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
