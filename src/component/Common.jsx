import React from "react";

const Common = ({ Head, des }) => {
  return (
    <>
      <h2 className=" text-white md:text-3xl text-base font-semibold md:max-w-[272px] ">
        {Head}
      </h2>
      <p className=" md:text-base text-[12px] md:max-w-[284px] max-w-[216px] font-medium text-white md:py-2 py-1">
        {des}
      </p>
    </>
  );
};

export default Common;
