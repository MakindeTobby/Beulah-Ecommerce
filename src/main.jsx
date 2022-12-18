import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './style.scss'
import "~/bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Pages/Product'
import ThemeProvider from './Context'
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: "/product/:uid", element: <Product /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
