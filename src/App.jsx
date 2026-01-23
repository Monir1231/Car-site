import React from "react";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
     <Footer/>
    </>
  );
};

export default App;
