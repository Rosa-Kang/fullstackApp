import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import App from "./components/App";
import Upload from "./components/Upload";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/upload" component={Upload} />
        <Route path="/photos/:id" component={App} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
