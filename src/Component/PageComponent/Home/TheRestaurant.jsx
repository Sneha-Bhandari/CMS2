import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineBrowserUpdated } from "react-icons/md";
import { use } from "react";

const TheRestaurant = ({ placeholder }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  const details = [
    {
      title: "The Restautrant",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maiores soluta officia quos, animi neque eius assumenda culpa distinctio libero,Amet voluptate harum ipsam alias sit totam soluta impedit.",
      image: "1.jpg",
      signature: "1.jpg",
    },
  ];

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
  return (
    <div className="h-full bg-white w-full">
      <div className="grid py-10 px-3 grid-cols-5 gap-6 ">
        <div className="flex flex-col pt-5  ">
          <h1 className="font-semibold text-xl">About Restaurant</h1>
          <h2 className="text-gray-400 text-sm">
            Title, Description, Image, Signature
          </h2>
        </div>

 <div className="col-span-4 border border-gray-200">
 <Formik
          initialValues={{
            Photo: "",
            Signature: "",
            Title:"",
            Description:""
          }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form className="   flex flex-col gap-6 px-6 py-6  ">
                <div className="text-2xl font-bold text-orange-400 ">Edit Content</div>
                <div className="flex flex-col gap-6">
                  <div className="flex  gap-2 flex-col">
                    <label className="text-base font-semibold" htmlFor="Title">
                      Title:
                    </label>
                    <Field
                      type="text"
                      name='Title'
                      placeholder="Restaurant Title"
                      className=" border border-gray-400 rounded-sm outline-none p-2 "
                    />
                  </div>
                  <div className="flex gap-2 flex-col  ">
                    <label
                      className="text-base font-semibold "
                      htmlFor="Description"
                    >
                      Description:
                    </label>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      config={config}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                      onChange={(newContent) => {}}
                      className="bg-red-200 "
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xl font-medium items-start  ">
                  {/* image */}
                 <div className="grid gap-2">
                 <div className="font-semibold text-base">
                    <h1 className=" "> Image:</h1>
                  </div>

                  <label htmlFor="photo">
                    {values.Photo.length < 1 ? (
                      <div className="flex items-center text-2xl justify-center  bg-gray-200  h-44 w-full">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Photo)}
                          className="h-44 w-full"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Photo", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="photo"
                    name="photo"
                    className="hidden"
                    accept=".jpg"
                  />
                 </div>
                  {/* Signature */}
                 <div className="grid gap-2 text-base">
                 <div className=" flex flex-col">
                    <h1 className="font-semibold">Signature:</h1>
                  </div>
                  <label htmlFor="sign">
                    {values.Signature.length < 1 ? (
                      <div className="flex items-center text-2xl justify-center  bg-gray-200  h-44 w-full">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Signature)}
                          className="h-44 w-full"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Signature", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="sign"
                    name="sign"
                    className="hidden"
                    accept=".png"
                  />
                 </div>
                </div>

                <button
                  type="button"
                  className="text-green-500 text-base hover:bg-green-500 
                  hover:text-white transition-all delay-75 duration-700 
                  ease-in-out border border-green-500 rounded-lg w-fit h-fit 
                  cursor-pointer p-2  mt-2"
                >
                  Save Changes
                </button>
              </Form>
            );
          }}
        </Formik>
 </div>

        {/* <div className="overflow-x-auto mx-6">
        {openDelete && (
        <div className="fixed inset-0  bg-opacity-40  h-screen flex justify-center items-center w-screen z-10">
          <div className="bg-gray-200 p-12 flex flex-col gap-6  rounded-lg shadow-lg ">

          <p className="">Are you sure you want to delete?</p>
          <div className="flex gap-5 items-center justify-center">
          <button className=" bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition" onClick={() => setOpenDelete(false)}>Yes</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition" onClick={() => setOpenDelete(false)}>Cancel</button>
          </div>
          </div>
        </div>
      )}
          <table className=" w-full  ">
            <thead className="bg-green-50">
              <tr className=" font-bold text-lg ">
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Signature</th>
                <th className="px-6 py-3">Action</th>
                <th className="px-6 py-3">Preview</th>
              </tr>
            </thead>
            <tbody>
              {details.map((val, index) => (
                <tr
                  className="bg-gray-100 border-t border-gray-200 hover:bg-gray-200 text-center h-fit "
                  key={index}
                >
                  <td className="px-6 py-4 ">{val.title}</td>
                  <td className="px-6 py-4">{val.description}</td>
                  <td className="px-6 py-4  ">
                    <img src={val.image} alt={val.title} />
                  </td>
                  <td className="px-12 py-4  ">
                    <img src={val.signature} alt={val.title} />
                  </td>
                  <td className="px-6 py-4 ">
                    <td className="px-6 py-4 flex gap-3 text-white ">
                      <button
                        type="submit"
                        className=" p-2 bg-green-400 cursor-pointer rounded-sm "
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setOpenDelete(true)}
                        type="submit"
                        className=" p-2 bg-red-600 cursor-pointer rounded-sm "
                      >
                        Delete
                      </button>
                    </td>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className=" text-white p-2 bg-green-400 cursor-pointer rounded-sm "
                    >
                      Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default TheRestaurant;
