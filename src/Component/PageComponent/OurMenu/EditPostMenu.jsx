import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { FaSpinner } from "react-icons/fa";

const EditPostMenu = ({ setEdit }) => {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (Loading == true) {
      const timeoutId = setTimeout(() => {
        toast.update("Data is updated");
        setEdit();
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [Loading]);

  const details = [
    {
      name: "Title",
      type: "text",
      placeholder: "Menu Title",
    },
    {
      name: "Description",
      type: "text",
      placeholder: "Menu Description",
    },
    {
      name: "Amount",
      type: "text",
      placeholder: "Menu Amount",
    },
    {
      name: "Image",
      type: "text",
      placeholder: "Menu Image",
    },
    
  ];
  const schemas = yup.object().shape({
    Title: yup.string().required("Title is required"),
    Description: yup.string().required("Description is required"),
    Amount: yup.string().required("Amount is required"),
    Image: yup.string().required("Image is required"),
   
  });

  return (
    <div
      onClick={() => setEdit(false)}
      className={
        "w-2/3 "
      }
    >
      <div className="w-full ">
        <Formik
          initialValues={{
            Title: "",
            Description: "",
            Amount: "",
            Image: "",
            
          }}
          validationSchema={schemas}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="w-full">
              <div
                className="h-fit bg-gray-300  w-full
                            flex items-center justify-center flex-col gap-6 py-8 shadow-lg rounded-lg "
              >
                <h2 className="font-semibold text-4xl text-blue-950">
                  Menu Details
                </h2>

                <div className="grid grid-cols-2 w-full p-4    gap-4">
                  {details.map((val, i) => {
                    return (
                      <div key={i} className="flex flex-col w-full gap-1">
                        <div className="font-semibold text-gray-500  text-transform: capitalize tracking-tight ">
                          {val.name}
                        </div>
                        <Field
                          className=" p-2 w-full rounded-sm"
                          name={val.name}
                          type={val.type}
                          placeholder={val.placeholder}
                        ></Field>
                        <ErrorMessage
                          name={val.name}
                          component={"div"}
                          className="text-red-600"
                        ></ErrorMessage>
                      </div>
                    );
                  })}
                </div>
              
              </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditPostMenu;

  {/* <div className="flex flex-row gap-2 justify-between">
                  <button
                    className="text-xl bg-green-600 text-white w-fit h-fit p-2 rounded-lg shadow-lg "
                    type="submit"
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    {Loading ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                  <button
                    className="text-xl bg-red-700 text-white w-fit h-fit p-2 rounded-lg shadow-lg"
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    Cancel
                  </button>
                </div> */}