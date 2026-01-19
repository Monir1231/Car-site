import React from "react";
import mark from "/public/mark.png";
import Droplocation from "../component/Droplocation";
import Drop from '/public/Swap.png'

const Location = () => {
  return (
    <div className=" md:mt-16 mt-10 flex flex-col md:flex-row items-center justify-between  gap-3.5">
      <div className=" bg-white py-5 px-10 rounded-md">
        <div className=" flex items-center gap-3 text-base font-semibold">
          <img src={mark} />
          <h3>Pick - Up</h3>
        </div>
     <Droplocation/>
        
      </div>

      <div className=" h-16 w-16 flex items-center justify-center bg-primary rounded-lg shadow">
          <img src={Drop}/>
      </div>

     <div className=" bg-white py-5 px-10 rounded-md">
        <div className=" flex items-center gap-3 text-base font-semibold">
          <img src={mark} />
          <h3>Drop - Off</h3>
        </div>
          <Droplocation/>

         </div>
       
    </div>
  );
};

export default Location;
