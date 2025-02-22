import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import * as yup from "yup";

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
  const Schemas = yup.object().shape({
    Title: yup.string().required("Title is required!!"),
    Description: yup.string().required("Description is required!!"),
    Image: yup.mixed().required("Image is required!!"),
    Signature: yup.mixed().required("Signature is required!!"),
  });

  return (
    <div className="h-full bg-white w-full">
      <div className="grid py-10 px-3 grid-cols-5 gap-6 ">
        <div className="flex flex-col pt-5  ">
          <h1 className="font-semibold text-xl">Restaurant Section</h1>
          <h2 className="text-gray-400 text-sm">
            Title, Description, Image, Signature
          </h2>
        </div>

        <div className="col-span-4 border border-gray-200">
          <Formik
            initialValues={{
              Title: "",
              Description: "",
              Image: "",
              Signature: "",
            }}

            validationSchema={Schemas}
            onSubmit={(values, { setSubmitting }) => {
            alert ("Submitted")
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="   flex flex-col gap-6 px-6 py-6  ">
                  <div className="text-2xl font-bold text-orange-400 ">
                    Edit Content
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex  gap-2 flex-col">
                      <label
                        className="text-base font-semibold"
                        htmlFor="Title"
                      >
                        Title:
                      </label>
                      <Field
                        type="text"
                        name="Title"
                        placeholder="Restaurant Title"
                        className=" border border-gray-400 rounded-sm outline-none p-2 "
                      />
                      <ErrorMessage
                          name="Title"
                          component={"div"}
                          className="text-red-700 "
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
                      <ErrorMessage
                          name="Description"
                          component={"div"}
                          className="text-red-700 "
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
                        {values.Image.length < 1 ? (
                          <div className="flex items-center text-2xl justify-center  bg-gray-200  h-44 w-full">
                            {" "}
                            <MdOutlineBrowserUpdated />
                          </div>
                        ) : (
                          <div>
                            <img
                              src={URL.createObjectURL(values.Image)}
                              className="h-44 w-full"
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
                        id="photo"
                        name="photo"
                        className="hidden"
                        accept=".jpg"
                      />
                      <ErrorMessage
                          name="Image"
                          component={"div"}
                          className="text-red-700 "
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
                        className="hidden"
                        accept=".png"
                        name="sign"
                      />
                      <ErrorMessage
                          name="Signature"
                          component={"div"}
                          className="text-red-700 "
                        />
                    </div>
                  </div>

                  <button
                    type="submit"
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
      </div>
    </div>
  );
};

export default TheRestaurant;
