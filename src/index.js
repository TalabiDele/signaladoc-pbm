import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Context/AuthContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);
