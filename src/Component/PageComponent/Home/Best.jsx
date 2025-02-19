import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

import { Formik, Form, Field } from "formik";

import { MdOutlineBrowserUpdated } from "react-icons/md";

const Best = ({ placeholder }) => {
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
    <div className="h-full w-full ">
      <div className="grid px-3 grid-cols-5 gap-6 py-10 ">
        <div className="flex flex-col pt-5">

          <div className="text-xl font-semibold">
          The Best & Good: 
          </div>
          <div className="text-sm text-gray-500">Title , Description, Image</div>
        </div>

       <div className="col-span-4 border border-gray-200">
       <Formik
          className=""
          initialValues={{
            Title:"",
            Description:"",
            Image: "",
           
          }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form className="  px-6 py-6 flex flex-col gap-6 ">
                <div className="text-2xl font-bold text-orange-400 ">Edit Content</div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-base font-semibold" htmlFor="Title">
                      Title:
                    </label>
                    <Field
                      type="text"
                      name="Title"
                      placeholder="Best and Food Title"
                      className=" border border-gray-400  rounded-sm outline-none p-2 "
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
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
                  {/* Image */}
                  <div>
                    {" "}
                    <h1 className="text-base font-semibold"> Image:</h1>
                  </div>

                  <label htmlFor="image">
                    {values.Image.length < 1 ? (
                      <div className="flex items-center justify-center  bg-gray-200  h-44 w-1/2">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Image)}
                          className="h-44 w-1/2"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Image", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="image"
                    name="image"
                    className="hidden"
                    accept=".jpg"
                  />

                 
                <div className="">
                  <button
                    type="button"
                    className="text-green-500 text-base hover:bg-green-500 
                    hover:text-white transition-all delay-75 duration-700 
                    ease-in-out border border-green-500 rounded-lg w-fit h-fit 
                    cursor-pointer p-2  mt-2"
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
       </div>
      </div>
    </div>
  );
};

export default Best;
