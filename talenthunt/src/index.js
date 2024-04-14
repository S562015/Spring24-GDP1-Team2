import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer"; // Create this file
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/system";
import { globalTheme } from "./themes";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
      <ToastContainer/>
  </Provider>,

  document.getElementById("root"),
);
