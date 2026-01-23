import React from 'react'
import gasstation from '/gas-station.png'
import drive from '/drive.png'
import profile from '/profile-2user.png'
import { Button1 } from '../../component/Button'
import { GiSelfLove } from 'react-icons/gi'

const ProductAll = ({Allcar}) => {
//  console.log(Allcar)
  return (

    <>
    <div className=" bg-[#FFFFFF] p-4 rounded-md">
         <div className=" flex items-center justify-between">
                    <h2 className=" text-xl md:text-base font-semibold text-[#1A202C]">{Allcar.title}</h2>
                    <GiSelfLove />
                  </div>
                  <p className="md:text-sm text-[12px] font-bold text-secondary mt-0.5 ">{Allcar.type}</p>
                  <div className=" mt-5 flex items-center justify-center p-1.5 mb-2.5">
                    <img className=" w-[224px] h-[100px]" src={Allcar.img}/>
                  </div>
                  <div className=" flex items-center justify-between ">
                   <div className=" flex items-center gap-1">
                    <img className=" md:size-[24px] size-[14px]" src={gasstation}/>
                     <p className=" text-secondary md:text-sm text-[12px] font-medium">{Allcar.oil}</p>
                   </div>
      
                    <div  className=" flex items-center gap-1">
                    <img className=" md:size-[24px] size-[14px]" src={drive}/>
                     <p  className=" text-secondary md:text-sm text-[12px] font-medium">{Allcar.drive}</p>
                   </div>
      
                    <div  className=" flex items-center gap-1">
                    <img className=" md:size-[24px] size-[14px]" src={profile}/>
                     <p  className=" text-secondary md:text-sm text-[12px] font-medium">{Allcar.people}</p>
                   </div>
                   
                  </div>
                  <div className=" mt-4 flex items-center justify-between">
                    <h3 className=" md:text-xl text-base font-bold text-[#1A202C]">${Allcar.price}/<span className=" text-sm font-medium text-secondary">day</span></h3>
                    <Button1 text={"Rent Now"}/>
                   </div> 
    </div>
   
    </>
   
  )
}

export default ProductAll