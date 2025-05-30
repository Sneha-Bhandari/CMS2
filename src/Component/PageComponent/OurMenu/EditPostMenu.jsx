import React, { useState, useEffect, useRef, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import JoditEditor from "jodit-react";

const EditPostMenu = ({ setEdit,blured, placeholder}) => {
  const [Loading, setLoading] = useState(false);
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
    Amount: yup.string().required("Amount is required!!"),
    Image: yup.mixed().required("Image is required!!"),
  });

  const Info = [
    {
      label: "Title", name: "Title", type: "text",placeholder: "Enter Title ",
    },
    {
      label: "Description", name: "Description", type: "text", placeholder: "Enter  Description",
    },
    {
      label: "Amount", name: "Amount", type: "text", placeholder: "Enter Amount",
    },
    { 
      label: "Image", name: "Image", type: "file", placeholder: "Enter Image" 
    }
  ];

  return (
    <div onClick={blured}   className="w-full  flex items-center justify-center ">
      <div onClick={(e)=> {e.stopPropagation()}} className="w-1/2 h-full ">
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
            <Form className="w-full h-fit ">
              
              <div className=" bg-gray-100 w-full flex flex-col gap-2 p-4 shadow-lg rounded-lg" >
              <div className="font-medium text-xl text-green-500">Edit Content</div>
                {Info.map((val, i) => {
                  if (val.name == "Title" || val.name == "Amount") {
                    return (
                      <div key={i} className="flex flex-col gap-1">
                        <label className="font-semibold text-base">
                          {val.label}
                        </label>
                        <Field
                          name={val.name}
                          type={val.type}
                          placeholder={val.placeholder}
                          className=" border border-gray-400 w-full rounded-sm outline-none p-2  "
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
                          value={values.Description} 
                          config={config}
                          tabIndex={1}
                          onBlur={(newContent) =>
                            setFieldValue("Description", newContent)
                          }
                          onChange={(newContent) =>
                            setFieldValue("Description", newContent)
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
                  }
                })}
              <div className="flex gap-2  justify-start">
                <button  type="submit" className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded" >  Save Changes</button>
                <button   onClick={blured}  type="button" className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded" >  Cancel</button>
              </div>

             </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditPostMenu;
