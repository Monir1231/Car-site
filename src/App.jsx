import React from "react";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
