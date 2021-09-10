import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/css/styles.css";
import App from "./App";
import Footer from "components/Footer/index";
import NavBar from "components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <>
      <NavBar />
      <App />
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
