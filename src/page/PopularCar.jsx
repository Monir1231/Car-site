import React, { useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import { useSelector } from "react-redux";
import gasstation from '/public/gas-station.png'
import drive from '/public/drive.png'
import profile from '/public/profile-2user.png'
import { Button1 } from "../component/Button";
import Product from "./Product/Product";
 
const PopularCar = () => {
  const products = useSelector((state) => state.products)|| []
  // console.log(products)
  
  const [popularcar,setPopularcar] = useState("popular")
  const FilterCar = products.filter((car) => car.category === popularcar)
  const NotFilterCar = products.filter((car) => car.category != popularcar)
  // console.log(NotFilterCar)
  
 const [visibleCar,setvisibleCar] = useState(4)

 const loadMore = ()=>{
  setvisibleCar((prv)=> prv + 4)
 }
  

  return (
    <div className="md:mt-16 mt-10">
      <div className=" flex items-center justify-between">
        <h3 className=" md:text-base text-[12px] font-semibold text-secondary">
          Popular Car
        </h3>
        <button onClick={loadMore} className=" md:text-base text-sm font-semibold text-primary">
          View All
        </button>
      </div>
      <div className=" mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-7 gap-7">
        {FilterCar.slice(0,visibleCar).map((product) => (
          <div key={product.id} className=" bg-[#FFFFFF] p-4 rounded-md">
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl md:text-base font-semibold text-[#1A202C]">{product.title}</h2>
              <GiSelfLove />
            </div>
            <p className="md:text-sm text-[12px] font-bold text-secondary mt-0.5 ">{product.type}</p>
            <div className=" mt-5 flex items-center justify-center p-1.5 mb-2.5">
              <img className=" w-[232px] h-[68px]" src={product.img}/>
            </div>
            <div className=" flex items-center justify-between ">
             <div className=" flex items-center gap-1">
              <img className=" md:size-[24px] size-[14px]" src={gasstation}/>
               <p className=" text-secondary md:text-sm text-[12px] font-medium">{product.oil}</p>
             </div>

              <div  className=" flex items-center gap-1">
              <img className=" md:size-[24px] size-[14px]" src={drive}/>
               <p  className=" text-secondary md:text-sm text-[12px] font-medium">{product.drive}</p>
             </div>

              <div  className=" flex items-center gap-1">
              <img className=" md:size-[24px] size-[14px]" src={profile}/>
               <p  className=" text-secondary md:text-sm text-[12px] font-medium">{product.people}</p>
             </div>
             
            </div>
            <div className=" mt-4 flex items-center justify-between">
              <h3 className=" md:text-xl text-base font-bold text-[#1A202C]">${product.price}/<span className=" text-sm font-medium text-secondary">day</span></h3>
              <Button1 text={"Rent Now"}/>
             </div>
          </div>
        ))}

         <div >
         <h3 className=" md:text-base text-[12px] font-semibold text-secondary">
         Recomendation Car
        </h3>
        {NotFilterCar.map((Allcar)=>{
          <Product key={Allcar.id} Allcar={Allcar} className=" bg-[#FFFFFF] p-4 rounded-md"/>
        })}
      </div>

      </div>
     
     
    </div> 
  );
};

export default PopularCar;
