import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ProductListContext } from './Products/ProductListContext'
import { products } from './Products/ProductListContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductListContext.Provider value={products}>
        <App />
      </ProductListContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
