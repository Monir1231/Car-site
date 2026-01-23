import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdReadMore } from "react-icons/md";
import { useNavigate } from "react-router";


const SearchBar = () => {
  const [query,setQuery] = useState("")
  const Navigate = useNavigate()

  const handleSearch = (e)=>{
   if(e.key ==="Enter"){
    Navigate(`/search?q=${query}`)
   }
  }

  return (
    <div className="  flex items-center w-full md:w-fit md:py-1.5 py-1 px-1.5  md:px-2 rounded-full border border-[#C3D4E9]/40">
      <CiSearch className=" size-5 text-darkgray" />
      <input
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
        type="text"
        placeholder="Search something here"
        className=" text-darkgray px-4  focus:outline-none"
        onKeyDown={handleSearch}
      />
      <MdReadMore className=" hidden md:flex size-5 text-darkgray" />
    </div>
  );
};

export default SearchBar;
