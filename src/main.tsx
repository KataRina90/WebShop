import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./basket/basketContext";
import FilteredProductProvider from "./search/FilteredProductContext";
import { OrderProvider } from "./Ordering/orderContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <FilteredProductProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </FilteredProductProvider>
      </BasketProvider>

    </BrowserRouter>
  </React.StrictMode>
);
