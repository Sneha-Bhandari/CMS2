import React, { useState } from 'react';
import { IoGlobeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoRestaurantOutline } from "react-icons/io5";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='w-full bg-gray-300 h-20 flex items-center justify-center'>
       {isDropdownOpen && (
              <div className='absolute z-50 transition-all duration-500 ease-in-out delay-75 translate-y-10 right-10 mt-4 top-10 w-48 p-4 rounded-lg border flex flex-col gap-4  bg-gray-100' >
                <div className='w-fit h-fit  cursor-pointer'>About Profile</div>
                <button className='w-fit h-fit p-2  bg-green-300 rounded-lg text-whiterounded-lg cursor-pointer'>Log out</button>
              </div>
            )}
      <div className='w-11/12 mx-auto flex items-center justify-between'>
        <div className='text-3xl text-black'><IoRestaurantOutline /></div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex gap-1 items-center'>
            <div className='text-2xl'><IoGlobeOutline /></div>
            <div className='cursor-pointer'>Visit site</div>
          </div>
          
          <div className='relative'>
            <button 
              className='flex gap-1 items-center cursor-pointer'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onBlur={()=>{
                setIsDropdownOpen(false)
              }}
            >
              <div className='text-2xl'><CgProfile /></div>
              <div>Gourmet Resturant</div>
            </button>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
