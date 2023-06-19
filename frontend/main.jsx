import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.jsx";
import Layout from './Layout.jsx';
import Shop from './Shop.jsx';
import MyNav from './Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './SingleProduct.jsx';
import Footer from "./Footer.jsx";
import Login from "./Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Shop />,
        label: "main",
      },
      {
        path: ":productId",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
        label: "main",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyNav></MyNav>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>,
);
