import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
