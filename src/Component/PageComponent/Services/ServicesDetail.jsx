import React from "react";

import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";



import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineBrowserUpdated } from "react-icons/md";

const ServicesDetail = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
  
  return (
    
      <div className="h-full w-full">
 

     
        <div className="flex flex-col gap-6 m-6  ">
          <h1 className="font-medium text-xl">
            Services Details:  Title , Description, Logo
          </h1>

          <Formik
            className=""
            initialValues={{
              Photo: ""
             
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className=" bg-gray-100  flex flex-col gap-6 px-12 py-6 shadow-lg rounded-xl">
                  <div className="flex flex-col gap-6">
                 
                      <label className="text-xl font-medium" htmlFor="Title">
                        Title:
                      </label>
                      <input
                        type="text"
                        placeholder="Services Title"
                        className=" border border-black p-2 "
                      />
                   
                    
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
                  <div className="flex gap-6  ">
                    {/* logo */}
                  <div> <h1 className="text-xl font-semibold"> Upload Logo:</h1></div>
                   
                 
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
                  
                  </div>
                  
                  <div className="flex gap-6">
                  <button
                    type="button"
                   
                    className="text-blue-500  border border-black rounded-lg w-fit h-fit cursor-pointer p-2 capitalize mt-2"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                   
                    className="text-red-500  border border-black rounded-lg w-fit h-fit cursor-pointer p-2 capitalize mt-2"
                  >
                    Delete
                  </button>
                  
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

export default  ServicesDetail;
