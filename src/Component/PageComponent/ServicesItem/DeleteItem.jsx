import React from "react";

const DeleteItem = ({ setDeletes }) => {
  return (
    <div className="fixed inset-0  bg-opacity-40  h-screen flex justify-center items-center w-screen z-10">
      <div className="bg-gray-200 p-12 flex flex-col gap-6  rounded-lg shadow-lg ">
        <p className="">Are you sure you want to delete?</p>
        <div className="flex gap-5 items-center justify-center">
          <button
            className=" bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition"
            onClick={() => {
              setDeletes(null);
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition"
            onClick={() => {
              setDeletes(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
