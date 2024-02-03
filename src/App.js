import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MusicAlbums from "./components/MusicAlbums";
import CartContextStore from "./utils/CartContextStore";
import ContactUs from "./components/ContactUs";
import Product from "./components/Product";

function Example() {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <MusicAlbums />,
    },
    {
      path: "/contactus",
      element: <ContactUs />,
    },
    {
      path:"/products/:id",
      element:<Product/> 
    }
  ]);
  return (
    <div>
      <CartContextStore>
        <Header />
        <Banner />

        <RouterProvider router={router} />
        <Cart />
        <Footer />
      </CartContextStore>
    </div>
  );
}

export default Example;
