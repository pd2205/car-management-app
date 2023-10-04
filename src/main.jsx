import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import 'bulma/css/bulma.css'

const el = document.getElementById("root");
const root = createRoot(el);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);