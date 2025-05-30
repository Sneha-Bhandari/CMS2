import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


const EditChefs = ({ setEdit, placeholder }) => {

  const Schemas = yup.object().shape({

    Image: yup.mixed().required("Image is required!!"),
    Name: yup.string().required("Name is required!!"),
    Post: yup.string().required("Post is required")
  });

  const Info = [
   
    { 
      label: "Image", name: "Image", type: "file", placeholder: "Enter Image" 
    },
    {
      label: "Name", name: "Name", type: "text", placeholder: "Enter Name"
    },
    {
      label: "Post", name: "Post", type: "text", placeholder: "Enter Post"
    }
  ];

  return (
    
      <div className="w-full h-full flex items-center justify-center">
        <Formik
          initialValues={{
            Title: "",
            Description: "",
            Image: "",
            Name: "",
            Post:""
          }}
          
          validationSchema={Schemas}
          onSubmit={(values) => {
            console.log(values);
           
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="w-1/2 h-fit ">
              
              <div className=" bg-gray-100 w-full flex flex-col gap-2 p-4 shadow-lg rounded-lg" >
              <div className="font-medium text-xl text-green-500">Edit Content</div>
                {Info.map((val, i) => {
                  if (val.type == "file") {
                    return (
                        <div className="flex flex-col gap-2 items-start">
                        <h1 className="font-semibold text-base">{val.label}</h1>
                        <label
                          htmlFor="MenuImageinside"
                          className="cursor-pointer"
                        >
                          {values.Image ? (
                            <img
                              src={URL.createObjectURL(values.Image)}
                              className="  h-24 w-32"
                            />
                          ) : (
                            <div className="flex items-center justify-center  bg-gray-200  h-24 w-32 border border-gray-400">
                              Update Image
                            </div>
                          )}
                        </label>
                        <input
                          type="file" id="MenuImageinside" className="hidden" accept=".jpg,.jpeg,.png" 
                           onChange={(e) =>  setFieldValue("Image", e.target.files[0])
                          }
                        />
                        <ErrorMessage name={val.name}  component={"div"} className="text-red-700 "/>
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
              <div className="flex gap-2  justify-start">
                <button  type="submit" className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded" >  Save Changes</button>
                <button onClick={() => setEdit(false)} type="button" className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded" >  Cancel</button>
              </div>

             </div>
            </Form>
          )}
        </Formik>
      </div>
 
  );
};

export default EditChefs;
