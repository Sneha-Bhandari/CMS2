import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { MdOutlineBrowserUpdated } from "react-icons/md";
// import axios from "axios";
import * as yup from "yup";
import GetMenu from "./GetMenu";

function Menu({ placeholder }) {
  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const Schemas = yup.object().shape({
    Title: yup.string().required("Title is required!!"),
    Description: yup.string().required("Description is required!!"),
    Amount: yup.string().required("Amount is required!!"),
    Image: yup.mixed().required("Image is required!!"),
  });

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
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
      label: "Amount",
      name: "Amount",
      type: "text",
      placeholder: "Enter Amount",
    },

    {
      label: "Image",
      name: "Image",
      type: "file",
      placeholder: "Enter Image",
    },
  ];

  return (
    <div className="h-fit w-full ">
      <div className=" grid grid-cols-5 gap-6  py-10 px-3 ">
        <div className="flex flex-col pt-5 ">
          <div className="font-semibold text-xl">Menu Section</div>
          <p className="text-gray-400 text-sm">
            Title, Description, Amount, Image
          </p>
        </div>
        <div className="col-span-4 border border-gray-200  ">
          <Formik
            initialValues={{
              Title: "",
              Description: "",
              Amount: "",
              Image: "",
            }}
            validationSchema={Schemas}
            onSubmit={(values) => {
              console.log(values);
             
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="flex flex-col gap-6 px-6 py-6">
                {Info.map((val, i) => {
                  if (val.name == "Title" || val.name == "Amount") {
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
                  } else if (val.name == "Description") {
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
                  } else {
                    return (
                      <div className="flex flex-col gap-2 items-start">
                        <h1 className="font-semibold text-base">{val.label}</h1>
                        <label htmlFor="MenuImage" className="cursor-pointer">
                          {values.Image ? (
                            <img
                              src={URL.createObjectURL(values.Image)}
                              className="  h-40 w-full"
                            />
                          ) : (
                            <div className="flex items-center justify-center  bg-gray-200  h-40 w-60">
                              <MdOutlineBrowserUpdated />
                            </div>
                          )}
                        </label>
                        <input
                          type="file"
                          id="MenuImage"
                          className="hidden"
                          accept=".jpg,.jpeg,.png"
                          onChange={(e) =>
                            setFieldValue("Image", e.target.files[0])
                          }
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
         
            < GetMenu/>
        
        </div>
      </div>
       
    </div>
  );
}

export default Menu;
