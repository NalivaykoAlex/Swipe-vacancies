import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

import HomePage from "./containers/HomePage";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <Router>
      <HomePage />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
