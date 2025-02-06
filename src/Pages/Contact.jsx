// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='h-full w-full'>
//       <div className='h-screen'>hi</div>
//       <div className='h-screen'>hee</div>
//     </div>
//   )
// }

// export default Contact

import React from "react";



import { Formik, Form, Field, ErrorMessage } from "formik";

import { MdOutlineBrowserUpdated } from "react-icons/md";

const Contact = () => {
  
  
  return (
    
      <div className="h-screen w-full">
        <div className="mt-12 flex flex-col gap-6 m-6  ">
          <h1 className="font-medium text-xl">
           Contact Us: Title, Image
          </h1>

          <Formik
            className=""
            initialValues={{
              Photo: "",
             
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className=" bg-gray-100  flex flex-col gap-6 px-12 py-6 shadow-lg rounded-xl">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <label className="text-xl font-medium" htmlFor="Title">
                        Title:
                      </label>
                      <input
                        type="text"
                        placeholder="Contact Us Title"
                        className=" border border-black p-2 "
                      />
                    </div>
                   
                     
                     
                  </div>
                 
                    {/* image */}
                  <div> <h1 className="text-xl font-semibold"> Upload Photo:</h1></div>
                   
                 
                   <label htmlFor="photo">
                     {values.Photo.length < 1 ? (
                       <div className="flex items-center justify-center  bg-gray-200  h-24 w-24">
                         {" "}
                         <MdOutlineBrowserUpdated />
                       </div>
                     ) : (
                       <div>
                         <img
                           src={URL.createObjectURL(values.Photo)}
                           className="h-24 w-24"
                         />
                       </div>
                     )}
                   </label>
                   <input
                     onChange={(e) => {
                       setFieldValue("Photo", e.target.files[0]);
                       console.log(e.target.files);
                     }}
                     type="file"
                     id="photo"
                     name="photo"
                     className="hidden"
                     accept=".jpg"
                   />
                 
                
                  
                  <div className="flex items-center justify-center">

                  <button
                    type="button"
                    onClick={() => setFieldValue(val.name, "")}
                    className="text-green-500  border border-black rounded-lg w-fit h-fit cursor-pointer p-2 capitalize mt-2"
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

export default Contact;
