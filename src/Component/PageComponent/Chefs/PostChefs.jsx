import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MdOutlineBrowserUpdated } from "react-icons/md";
// import axios from "axios";
import * as yup from "yup";
import GetChefs from "./GetChefs";

function PostChefs() {
 
  const Schemas = yup.object().shape({
    Image: yup.mixed().required("Image is required!!"),
    Name: yup.string().required("Name is required!!"),
    Post: yup.string().required("Post is required")
  });

  const Info = [
    {
        label: "Image",
        name: "Image",
        type: "file",
        placeholder:""
    },
    {
      label: "Name",
      name: "Name",
      type: "text",
      placeholder: "Enter Name",
    },
    {
      label: "Post",
      name: "Post",
      type: "text",
      placeholder: "Enter Post",
    }, 
  ];

  return (
    <div className="h-fit w-full ">
      <div className=" grid grid-cols-5 gap-6  py-10 px-3 ">
        <div className="flex flex-col pt-5 ">
          <div className="font-semibold text-xl">Chefs </div>
          <p className="text-gray-400 text-sm">
            Image Name, Post
          </p>
        </div>
        <div className="col-span-4 border border-gray-200  ">
          <Formik
            initialValues={{
                Image: "",
                Name:"",
                Post:"",
              
            }}
            validationSchema={Schemas}
            onSubmit={(values) => {
              console.log(values);
             
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="flex flex-col gap-6 px-6 py-6">
                {Info.map((val, i) => {
                if (val.type == "file") {
                    return (
                      <div className="flex flex-col gap-2 items-start">
                        <h1 className="font-semibold text-base">{val.label}</h1>
                        <label htmlFor="ChefsImage" className="cursor-pointer">
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
                          id="ChefsImage"
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
         
            <GetChefs/>
        
        </div>
      </div>
       
    </div>
  );
}

export default PostChefs;

