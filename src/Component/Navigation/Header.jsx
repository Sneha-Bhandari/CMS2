import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoGlobe } from "react-icons/io5";
import { GrRestaurant } from "react-icons/gr";
import { useState } from "react";

const Header = () => {
  const [dropDown, setDropdown] = useState(false);
  return (
    <div className="">

 {dropDown && (
  <div onClick={()=>setDropdown(false)}  className=" absolute z-10  h-full w-full flex justify-end ">

              <div  className=" h-fit mt-20 mr-20 w-48 rounded-md   flex flex-col  text-xl   ">
                <div className="flex flex-col text-xl text-black px-4 py-4 gap-2 text-sm items-start  transition-all duration-700 delay-75 translate-x-5  ease-in-out ">
                <button>
                  <h1>About Profile</h1>
                </button>
                <button>
                  <h1>Logout</h1>
                </button>
                </div>
              </div>
  </div>
            )}
      <div className="  flex  items-center h-20 bg-gray-200 justify-between px-10 mx-auto w-full">
        <div className="text-3xl">
          <IoRestaurantOutline />{" "}
        </div>
        <div className="flex gap-12">
          <div className="items-center flex justify-center">
            <button className=" cursor-pointer flex gap-2 border-2 border-orange-300 px-3 rounded-xl hover:text-white hover:bg-orange-500 hover:border-white transition-all duration-700 delay-75 ease-in-out py-1">
              <div className="text-xl  ">
                <IoGlobe />
              </div>
              <div>Visit Site</div>
            </button>
          </div>

          <div className="relative ">
            <div
              onClick={() => setDropdown(prev=>!prev)}
              className="text-xl cursor-pointer py-1 px-2 flex gap-2  font-medium"
            >
              <h1 className="py-1">
                <GrRestaurant />{" "}
              </h1>
              <h1> Gourmet Restaurant</h1>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
