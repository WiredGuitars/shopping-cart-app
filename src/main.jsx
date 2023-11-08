import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Store from "./Components/Store";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Store/:productId" component={Store} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
