//Table to display data
import React, { useState } from "react";
import DeletePostMenu from "./DeletePostMenu";
import EditPostMenu from "./EditPostMenu";

function GetMenu() {
  const [edit, setEdit] = useState(false);
  const [deletes, setDeletes] = useState(null);

  const header = ["Title", "Description", "Amount", "Image", "Action"];

  return (
    <div className="w-full h-fit  flex ">
      <div className="">
        {edit && (
          <div
          // onClick={() => setEdit(false)}
            className="absolute top-98 left-0  flex items-center justify-center  z-10 w-full h-full ">
              <EditPostMenu setEdit={setEdit} />
          </div>
        )}
      </div>

      {deletes && (
        <div>
          <DeletePostMenu setDeletes={setDeletes} />
        </div>
      )}

      <div className=" relative w-full p-2 mx-auto overflow-x-auto  bg-white">
        <table className="w-full  text-center border-collapse">
          <thead className="bg-gray-800 text-white text-sm uppercase tracking-wide">
            <tr>
              {header.map((val, i) => (
                <th key={i} className="px-4 py-3 border border-gray-400">
                  {val}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-gray-900 text-sm text-center">
            <tr className="border border-gray-300 hover:bg-gray-100 transition">
              <td className="px-4 py-3 border border-gray-300">
                Baked new Zealand mussels
              </td>
              <td className="px-4 py-3 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
              <td className="px-4 py-3 border border-gray-300">$12.99</td>
              <td className="px-4 py-3 border border-gray-300">
                <img
                  src="1.jpg"
                  alt="Food Item"
                  className="h-12 w-12 object-cover rounded-md"
                />
              </td>

              <td className="px-4 py-3 flex items-center justify-center  gap-4 ">
                <button
                  className="px-3  py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
                  onClick={() => setEdit(!edit)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
                  onClick={(values) => setDeletes(!deletes)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetMenu;
