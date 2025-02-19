import React from "react";
import { Formik, Form, Field } from "formik";
import { MdOutlineBrowserUpdated } from "react-icons/md";



const NewsTitle = () => {

 
  return (
    <div className="h-full w-full ">
      <div className="grid py-10 px-3 grid-cols-5 gap-6 ">
        <div className="flex flex-col pt-5  ">
          <h1 className="font-semibold text-xl"> News Title Section</h1>
          <h2 className="text-gray-400 text-sm">
            Image, Title, SubTitle
          </h2>
        </div>
        <div className="col-span-4 border border-gray-200 ">
          <Formik
            initialValues={{
              Image: "",
              Title: "",
              Subtitle: "",
              
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className=" px-6 py-6 flex flex-col gap-6">
                  <div className="text-2xl font-bold text-orange-400 ">
                    Edit Content
                  </div>
                  
                  <div className="flex flex-col gap-6 ">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-semibold text-base"> Image</h1>

                      <label htmlFor="ImageNews">
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
                        id="ImageNews"
                        name="ImageNews"
                        className="hidden"
                        accept=".jpg"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                    <label className="text-base font-semibold" htmlFor="Title">
                      Title:
                    </label>
                    <Field
                      type="text"
                      name="Title"
                      placeholder="News Title"
                      className=" border border-gray-400  rounded-sm outline-none p-2 "
                    />
                    </div>
                    <div className="flex flex-col gap-4">
                    <label className="text-base font-semibold" htmlFor="Subtitle">
                      Subtitle:
                    </label>
                    <Field
                      type="text"
                      name="Subtitle"
                      placeholder="News Subtitle"
                      className=" border border-gray-400  rounded-sm outline-none p-2 "
                    />
                    </div>
                    
                  </div>
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

export default NewsTitle;
