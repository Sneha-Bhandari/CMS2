import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

import { Formik, Form } from "formik";

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
    <div className="h-full w-full  mt-24">
      <div className="mt-12 flex flex-col gap-6 m-6  ">
        <h1 className="font-medium text-xl ">
          The Best & Good: Title , Description, Image1, Image2, Image3
        </h1>

        <Formik
          className=""
          initialValues={{
            Image1: "",
            Image2: "",
            Image3: "",
          }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form className=" bg-gray-100 px-12 py-6 flex flex-col gap-6 p-2 shadow-lg rounded-xl">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="text-xl font-medium" htmlFor="Title">
                      Title:
                    </label>
                    <input
                      type="text"
                      placeholder="Best and Food Title"
                      className=" border border-black p-2 "
                    />
                  </div>
                  <div className="flex flex-col  ">
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
                <div className="flex  w-full  mx-auto items-center justify-center mt-12  gap-12">
                  {/* image1 */}
                  <div>
                    {" "}
                    <h1 className="text-xl font-semibold"> Image1:</h1>
                  </div>

                  <label htmlFor="image1">
                    {values.Image1.length < 1 ? (
                      <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Image1)}
                          className="h-24 w-24"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Image1", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="image1"
                    name="image1"
                    className="hidden"
                    accept=".jpg"
                  />

                  {/* Image2 */}
                  <div>
                    {" "}
                    <h1 className="text-xl font-semibold"> Image2:</h1>
                  </div>

                  <label htmlFor="image2">
                    {values.Image2.length < 1 ? (
                      <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Image2)}
                          className="h-24 w-24"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Image2", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="image2"
                    name="image2"
                    className="hidden"
                    accept=".jpg"
                  />

                  {/* `Image3` */}
                  <div>
                    {" "}
                    <h1 className="text-xl font-semibold"> Image3:</h1>
                  </div>

                  <label htmlFor="image3">
                    {values.Image3.length < 1 ? (
                      <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                        {" "}
                        <MdOutlineBrowserUpdated />
                      </div>
                    ) : (
                      <div>
                        <img
                          src={URL.createObjectURL(values.Image3)}
                          className="h-24 w-24"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    onChange={(e) => {
                      setFieldValue("Image3", e.target.files[0]);
                      console.log(e.target.files);
                    }}
                    type="file"
                    id="image3"
                    name="image3"
                    className="hidden"
                    accept=".jpg"
                  />
                </div>
<div className="flex items-center justify-center">
    
                <button
                  type="button"
                  onClick={() => setFieldValue(val.name, "")}
                  className="text-green-500 border border-black rounded-lg w-fit h-fit cursor-pointer p-2 capitalize mt-2"
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

export default Best;
