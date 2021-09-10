import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/css/styles.css";
import App from "./App";
import NavBar from 'components/NavBar/index'
import Footer from "components/Footer/index";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
