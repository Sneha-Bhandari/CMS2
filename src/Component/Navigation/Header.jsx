import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoGlobe } from "react-icons/io5";

const Header = () => {
  return (
    <div>
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
          <div className="text-xl py-1 px-2 font-medium">
            Gourmet Restaurant{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
