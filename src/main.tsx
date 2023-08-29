import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import FilteredProductProvider from "./search/FilteredProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilteredProductProvider>
        <App />
      </FilteredProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
