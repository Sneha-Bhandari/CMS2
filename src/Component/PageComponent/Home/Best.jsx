import React from "react";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MdOutlineBrowserUpdated } from "react-icons/md";

const Best = ({ placeholder }) => {
  const Info = [
    {
      label: "Title",
      name: "Title",
      type: "text",
      placeholder: "Enter Title ",
    },
    {
      label: "Description",
      name: "Description",
      type: "text",
      placeholder: "Enter  Description",
    },
    {
      label: "Image",
      name: "Image",
      type: "file",
      placeholder: "",
    },
  ];

  const editor = useRef(null);
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
   
  });

  return (
    <div className="h-full bg-white w-full">
      <div className="grid py-10 px-3 grid-cols-5 gap-6 ">
        <div className="flex flex-col pt-5  ">
          <h1 className="font-semibold text-xl">Best Section</h1>
          <h2 className="text-gray-400 text-sm">
            Title, Description, Image
          </h2>
        </div>

        <div className="col-span-4 border border-gray-200">
          <Formik
            initialValues={{
              Title: "",
              Description: "",
              Image: "",
              
            }}
            validationSchema={Schemas}
            onSubmit={(values) => {
              console.log(values);
             
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="flex flex-col gap-6 px-6 py-6">
                <div className="text-2xl font-bold text-orange-400 ">
                    Edit Content
                  </div>
                  
                {Info.map((val, i) => {
                  if (val.name == "Description") {
                    return (
                      <div className="flex gap-2 flex-col  ">
                        <label
                          className="text-base font-semibold "
                          htmlFor="Description"
                        >
                          Description:
                        </label>
                        <JoditEditor
                          ref={editor}
                          value={values.Description} // Bind Formik's value
                          config={config}
                          tabIndex={1}
                          onBlur={(newContent) =>
                            setFieldValue("Description", newContent)
                          } // Update Formik
                          onChange={(newContent) =>
                            setFieldValue("Description", newContent)
                          }
                          className=""
                        />
                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          className="text-red-700"
                        />
                      </div>
                    );
                  } else if (val.type == "file") {
                    return (
                      <div className="flex flex-col gap-2 items-start">
                        <h1 className="font-semibold text-base">{val.label}</h1>
                        <label htmlFor="BestImage" className="cursor-pointer">
                          {values.Image ? (
                            <img
                              src={URL.createObjectURL(values.Image)}
                              className="h-40 w-60"
                            />
                          ) : (
                            <div className="flex items-center justify-center bg-gray-200 h-40 w-60">
                              <MdOutlineBrowserUpdated />
                            </div>
                          )}
                        </label>
                        <input
                          type="file"
                          id="BestImage"
                          className="hidden"
                          accept=".jpg,.jpeg,.png"
                          onChange={(e) =>
                            setFieldValue("Image", e.target.files[0])
                          }
                        />
                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          className="text-red-700"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="flex flex-col gap-2">
                        <label className="font-semibold text-base">
                          {val.label}
                        </label>
                        <Field
                          name={val.name}
                          type={val.type}
                          placeholder={val.placeholder}
                          className=" border border-gray-400  rounded-sm outline-none p-2  "
                        />

                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          className="text-red-700 "
                        />
                      </div>
                    );
                  }
                })}

                <div className="">
                  <button
                    type="submit"
                    className="text-green-500 text-base hover:bg-green-500 
                  hover:text-white transition-all delay-75 duration-700 
                  ease-in-out border border-green-500 rounded-lg w-fit h-fit 
                  cursor-pointer p-2  mt-2"
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Best;