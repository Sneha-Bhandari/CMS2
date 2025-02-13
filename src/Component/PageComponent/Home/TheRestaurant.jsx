import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";


import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineBrowserUpdated } from "react-icons/md";

const TheRestaurant = ({ placeholder }) => {
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
        <div className="mt-12 flex flex-col gap-6 m-6  ">
          <div className="flex flex-col">
          <h1 className="font-medium text-xl">
            About Restaurant
          </h1>
          <h2 className="text-gray-400">Title, Description, Image, Signature</h2>
          </div>

          <Formik
            className=""
            initialValues={{
              Photo: "",
              Signature: "",
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="   flex flex-col gap-6 px-12 py-6  ">
                  <div className="flex flex-col gap-6">
                    <div className="flex  gap-2 flex-col">
                      <label className="text-xl font-medium" htmlFor="Title">
                        Title:
                      </label>
                      <input
                        type="text"
                        placeholder="Restaurant Title"
                        className=" border border-black p-2 "
                      />
                    </div>
                    <div className="flex gap-2 flex-col  ">
                      <label
                        className="text-xl font-medium "
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
                  <div className="flex gap-6 items-center justify-center mt-12">
                    {/* image */}
                  <div> <h1 className="text-xl font-semibold"> Upload Photo:</h1></div>
                   
                 
                   <label htmlFor="photo">
                     {values.Photo.length < 1 ? (
                       <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                         {" "}
                         <MdOutlineBrowserUpdated />
                       </div>
                     ) : (
                       <div>
                         <img
                           src={URL.createObjectURL(values.Photo)}
                           className="h-24 w-24"
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
                   {/* Signature */}
                   <div className=" flex flex-col">
                     <h1 className="text-xl font-semibold">Upload Signature:</h1>
                   </div>
                   <label htmlFor="sign">
                     {values.Signature.length < 1 ? (
                       <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                         {" "}
                         <MdOutlineBrowserUpdated />
                       </div>
                     ) : (
                       <div>
                         <img
                           src={URL.createObjectURL(values.Signature)}
                           className="h-24 w-24"
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
                  
                  <div className="flex items-center justify-center">

                  <button
                    type="button"
                   
                    className="text-green-500  border border-black rounded-lg w-fit h-fit cursor-pointer p-2 capitalize mt-2"
                  >
                    Submit
                  </button>
                  </div>
                </Form>
                
              );
            }}
          </Formik>
        </div>
      </div>
      
   
  );
};

export default TheRestaurant;
