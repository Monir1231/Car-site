import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";

import Home from "./page/Home.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Product from "./page/Product/Product.jsx";
import store from "../Redux/store.js";

createRoot(document.getElementById("root")).render(

 <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
         <Route path="/product" element={<Product/>} />
      </Route>
    </Routes>
  </BrowserRouter>
 </Provider>,
);
