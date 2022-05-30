import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./assets/css/global";
import store from "./store/store";
import { Provider as ReduxProvider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
