import React from "react";

const DeletePostMenu = ({   bluers }) => {
  return (
    
    <div onClick={bluers} className="fixed inset-0  h-screen flex justify-center items-center  w-full z-10">
      <div className="bg-gray-200 p-12 flex flex-col gap-6  rounded-lg shadow-lg ">
        <p className="">Are you sure you want to delete?</p>
        <div className="flex gap-5 items-center justify-center">
          <button
            className=" bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition"
            // onClick={() => {
            //   setDeletes(null);
            // }}
            onClick={bluers} 
          >
            Yes
          </button>
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition"
            onClick={bluers} 
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePostMenu;
