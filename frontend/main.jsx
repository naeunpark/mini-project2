import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Layout from './Layout.jsx';
import Shop from './Shop.jsx';
import MyNav from './Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },{
    path: "/contact",
    element: <Contact />
  },{
    path:"/category",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Shop />,
        label: 'main'
      },
      {
        path: ':productId',
        element: <SingleProduct />,
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyNav></MyNav>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
