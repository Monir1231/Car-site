import React from "react";

import { GiSelfLove } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { IoCart } from "react-icons/io5";

import profile from "../../public/Profil.png";
import SearchBar from "./Search";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  return (
   
      <header className=" container mx-auto px-8 py-5 bg-[#FFFFFF]">
        <nav className=" flex items-center justify-between">
          {/* logo */}
          <div className=" flex items-center   md:space-x-10">
            <div>
              <h2 className=" md:text-3xl text-2xl font-bold text-primary ">
                MORENT
              </h2>
            </div>

            {/* search bar destom */}
            <div className=" md:flex hidden">
              <SearchBar />
            </div>
          </div>

          {/* all icon */}

          <div className=" hidden md:flex items-center space-x-6">
            <div className=" p-2 border border-secondary/40 rounded-full">
              <GiSelfLove className=" size-5 text-darkgray  " />
            </div>
            <div className=" p-2 border border-secondary/40 rounded-full">
             <Link to="/product"> <IoCart className=" size-5 text-darkgray" /></Link>
            </div>
            <div className=" p-2 border border-secondary/40 rounded-full">
              <IoIosSettings className=" size-5 text-darkgray" />
            </div>

            <img
              className=" md:flex hidden  size-9 text-darkgray"
              src={profile}
              alt="profile"
            />
          </div>
          {/* mobile profile img  */}
          <img
            className=" md:hidden flex  size-9 text-darkgray"
            src={profile}
            alt="profile"
          />
        </nav>
        <div className=  "  md:hidden mt-6 flex items-center justify-center  gap-5"> 
          <SearchBar />
          <div className=" py-1 px-1.5 flex items-center justify-center border border-secondary/40 rounded-md size-8">
            <MdReadMore className="  flex md:hidden size-5 text-darkgray" />
          </div>
        </div>
      </header>
    
  );
};

export default Navbar;
