import React from "react";
import {
  FooterCommonLink1,
  FooterCommonLink2,
  FooterCommonLink3,
} from "./FooterCommon";

const Footer = () => {
  return (
    <div className="container mx-auto md:px-8 px-5 py-10 font-Jakarta  md:mt-10 mt-5 bg-white">
      <div className=" grid md:grid-cols-12  md:gap-4 gap-8">
        {/* right */}
        <div className=" md:col-span-6 col-span-12">
          <h2 className=" md:text-3xl text-2xl font-bold text-primary ">
            MORENT
          </h2>
          <p className=" md:text-base text-[12px] font-medium text-secondary mt-4 ">
            Our vision is to provide convenience <br /> and help increase your
            sales business.
          </p>
        </div>
        {/* left */}
       
          <div className=" md:col-span-2 col-span-6">
            <FooterCommonLink1 />
          </div>

          <div className=" md:col-span-2 col-span-6">
            <FooterCommonLink2 />
          </div>

          <div className=" md:col-span-2 col-span-6">
            <FooterCommonLink3 />
          </div>
    
      
      </div>
    </div>
  );
};

export default Footer;
