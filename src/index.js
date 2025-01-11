import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/index";

ReactDOM.render(
  //Provider give access to the store wrap the all the component precent in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
