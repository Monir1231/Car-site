import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { GiSelfLove } from "react-icons/gi";
import gasstation from "/gas-station.png";
import drive from "/public/drive.png";
import profile from "/public/profile-2user.png";
import { Button1 } from "../../component/Button";
import Commonck from "../../component/commoncktext";

const SearchPage = () => {
  const products = useSelector((state) => state.products) || [];
  const [searchparams] = useSearchParams();
  const query = searchparams.get("q") || "";

  const [visibleCar, setvisibleCar] = useState(8);
  const [chacked, setChacked] = useState(false);
  const [value,setVailue] = useState(Number)

  const loadview = () => {
    setvisibleCar((prv) => prv + 8);
  };

  // search Filter data
  const filterproducts = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="container mx-auto  font-Jakarta md:mt-1 mt-5 md:flex   gap-1 w-full">
        <div className=" md:w-[25%] mx-auto w-full bg-white hidden md:flex flex-col ">
          <Commonck text="T Y P E" />

          <div className=" flex  items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              Sport <span>(10)</span>
            </label>
          </div>

          <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              SUV <span>(10)</span>
            </label>
          </div>

          <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              MPV <span>(10)</span>
            </label>
          </div>

          <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              Sedan <span>(10)</span>
            </label>
          </div>

          <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              Coupe <span>(10)</span>
            </label>
          </div>

          <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              Hatchback <span>(10)</span>
            </label>
          </div>

           <Commonck text='C A P A C I T Y'/>
            <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              2 Person  <span>(10)</span>
            </label>
          </div>

           <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              4 Person  <span>(10)</span>
            </label>
          </div>

          
           <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              6 Person  <span>(10)</span>
            </label>
          </div>

          
           <div className=" flex items-center space-x-1.5 mt-1 p-4">
            <input
              type="checkbox"
              value={chacked}
              onCanPlay={(e) => setChacked(e.target.value)}
              className=" size-6 "
            />
            <label className=" font-semibold text-xl text-secondary">
              4 Person  <span>(10)</span>
            </label>
          </div>

           <Commonck text='P R I C E'/>
            <div className="  space-x-1.5 mt-1 p-4">
              <input type="range" min={0} max="100" value={value} onChange={(e)=>setVailue(e.target.value)} className="range range-primary " />
              <h4 className=" text-xl font-semibold text-[#596780] mt-4">Max. ${value}.00</h4>
            </div>
        



        </div>
        <div className=" md:px-8 px-5 md:w-[75%] mx-auto w-full">
          <div className=" mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-7 gap-7">
            {filterproducts.slice(0, visibleCar).map((product) => (
              <div key={product.id} className=" bg-[#FFFFFF] p-4 rounded-md">
                <div className=" flex items-center justify-between">
                  <h2 className=" text-xl md:text-base font-semibold text-[#1A202C]">
                    {product.title}
                  </h2>
                  <GiSelfLove />
                </div>
                <p className="md:text-sm text-[12px] font-bold text-secondary mt-0.5 ">
                  {product.type}
                </p>
                <div className=" mt-5 flex items-center justify-center p-1.5 mb-2.5">
                  <img className=" w-[232px] h-[100px]" src={product.img} />
                </div>
                <div className=" flex items-center justify-between ">
                  <div className=" flex items-center gap-1">
                    <img
                      className=" md:size-[24px] size-[14px]"
                      src={gasstation}
                    />
                    <p className=" text-secondary md:text-sm text-[12px] font-medium">
                      {product.oil}
                    </p>
                  </div>

                  <div className=" flex items-center gap-1">
                    <img className=" md:size-[24px] size-[14px]" src={drive} />
                    <p className=" text-secondary md:text-sm text-[12px] font-medium">
                      {product.drive}
                    </p>
                  </div>

                  <div className=" flex items-center gap-1">
                    <img
                      className=" md:size-[24px] size-[14px]"
                      src={profile}
                    />
                    <p className=" text-secondary md:text-sm text-[12px] font-medium">
                      {product.people}
                    </p>
                  </div>
                </div>
                <div className=" mt-4 flex items-center justify-between">
                  <h3 className=" md:text-xl text-base font-bold text-[#1A202C]">
                    ${product.price}/
                    <span className=" text-sm font-medium text-secondary">
                      day
                    </span>
                  </h3>
                  <Button1 text={"Rent Now"} />
                </div>
              </div>
            ))}
          </div>
          {/* load moro  */}

          {visibleCar < filterproducts.length && (
            <div
              className=" flex items-center justify-center mx-auto text-center mt-8 font-bold text-lg"
              onClick={loadview}
            >
              <Button1 text="View Moro" />
            </div>
          )}

          {/* not fountd  */}
          <div>
            {filterproducts.length === 0 && (
              <p className=" text-center text-xl font-semibold text-secondary">
                No products found 😢
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
