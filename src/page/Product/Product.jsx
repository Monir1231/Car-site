import React from 'react'
import gasstation from '/gas-station.png'
import drive from '/drive.png'
import profile from '/profile-2user.png'

const Product = ({Allcar}) => {
 console.log(Allcar)
  return (
    <div>
        <div className=" flex items-center justify-between">
                    <h2 className=" text-xl md:text-base font-semibold text-[#1A202C]">{Allcar.title}</h2>
                    <GiSelfLove />
                  </div>
                  <p className="md:text-sm text-[12px] font-bold text-secondary mt-0.5 ">{Allcar.type}</p>
                  <div className=" mt-5 flex items-center justify-center p-1.5 mb-2.5">
                    <img className=" w-[232px] h-[68px]" src={Allcar.img}/>
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
  )
}

export default Product