import React from 'react'

const Droplocation = () => {
  return (
   <div className=" mt-5">
          <from className=" flex items-center md:gap-5">
           <div className=" w-fit border-r-1 border-r-[#C3D4E966] md:pr-4 pr-2">
             <label className=" md:text-base text-[12px] font-bold text-[#1A202C] block  ">
              Locations
            </label>
            <select className="md:pr-4 pr-1 outline-none text-[#90A3BF] md:text-[12px] text-[10px] border-none ">
              <option value="Select your city">Select your city</option>
              <option value="Rajbari">Rajbari</option>
              <option value="dhaka">Dhaka</option>
              <option value="Gopalgong">Gopalgong</option>
            </select>
           </div>
              <div className=" md:pr-4 pr-1 w-fit border-r-1 border-r-[#C3D4E966] ">
             <label className="  md:text-base text-[12px]  font-bold text-[#1A202C] block  ">
             Date
            </label>
            <select className="md:pr-4 pr-1 outline-none text-[#90A3BF] text-[12px] border-none ">
              <option value="Select your city">Select your city</option>
              <option value="Rajbari">Rajbari</option>
              <option value="dhaka">Dhaka</option>
              <option value="Gopalgong">Gopalgong</option>
            </select>
           </div>

              <div className=" w-fit md:pr-4 pr-1">
             <label className=" md:text-base text-[12px]  font-bold text-[#1A202C] block  ">
              Time
            </label>
            <select className="outline-none text-[#90A3BF] text-[12px] border-none ">
              <option value="Select your city">Select your city</option>
              <option value="Rajbari">Rajbari</option>
              <option value="dhaka">Dhaka</option>
              <option value="Gopalgong">Gopalgong</option>
            </select>
           </div>

          </from>
        </div>
  )
}

export default Droplocation