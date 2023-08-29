import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductListContext } from "./Products/ProductListContext";
import { products } from "./Products/ProductListContext";
import { BasketProvider } from "./basket/basketContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <ProductListContext.Provider value={products}>
          <App />
        </ProductListContext.Provider>
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
