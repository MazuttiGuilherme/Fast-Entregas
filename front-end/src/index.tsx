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
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const paypalOptions = {
  'client-id': 'AfV-3b-thaWgR8yv4-Nmahyjl6idmKXgZGqn0Tp0p3_v5d4PB4KzMNHKnfkk33YocDfnotuee2rSj8wG',
  currency: 'BRL'
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PayPalScriptProvider options={paypalOptions}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </PayPalScriptProvider>
    </ReduxProvider>
  </React.StrictMode>
);
