import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainCtrl from "./container/MainCtrl";
import App from "./components/App";
import Upload from "./components/Upload";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GalleryCtrl from "./container/GalleryCtrl";
import AllStory from "./container/AllStory";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={MainCtrl} />
        <Route path="/photos" component={GalleryCtrl} />
        <Route path="/photos/:id" component={App} />
        <Route path="/journals" component={AllStory} />
        <Route path="/upload" component={Upload} />
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
