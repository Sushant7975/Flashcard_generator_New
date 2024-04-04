import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../store/flashcardSlice";
import TermCard from "./TermCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFileUpload } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const CreateFlashCard = () => {
  const dispatch = useDispatch();

  const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

  const imgError = (val) => {
    toast.warn(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const initialValues = {
    groupName: "",
    uploadimage: null,
    description: "",
    terms: [{ title: "", definition: "", term_uploadimage: null }],
  };

  const validationSchema = Yup.object({
    groupName: Yup.string()
      .min(10, "Group name must be 10 characters")
      .required("Please Enter Group Name"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Please Add Description"),
    terms: Yup.array(
      Yup.object({
        title: Yup.string()
          .min(5, "Term name should be 5 characters")
          .required("Please Enter Term"),
        definition: Yup.string()
          .min(10, "Term definition shoud be 10 characters")
          .required("Please Enter Definition"),
      })
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(
      addFlashcard({
        title: values.groupName,
        uploadImage: values.uploadimage,
        description: values.description,
        terms: values.terms,
      })
    );
    resetForm();
    toast.success("👍 Flashcard Created!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="w-4/5 m-auto mt-2 py-5">
        <Formik
          initialValues= {initialValues}
          validationSchema= {validationSchema}
          onSubmit= {onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex flex-col flex-wrap shadow-md p-10 border-2">
                
                <label
                  className="text-zinc-500 font-bold text-lg"
                  htmlFor="groupName"
                >
                  Create Group*
                </label>
                <div className="flex flex-wrap">
                <Field
                  type="text"
                  id="groupName"
                  name="groupName"
                  placeholder="Group Name"
                  className="w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold"
                />

                <ErrorMessage
                  name="groupName"
                  component="div"
                  className="text-red-500"
                />

               
                  {/* it's a image upload button 
                  if image is present it's shows the image preview with delete icon to delete image
                  if image is not present its shows image uploading button */}
                  {values.uploadimage ? (
                    <div className="flex ">
              
                      <img
                        className="h-16 mt-2"
                        src={values.uploadimage}
                        alt=""
                      />
                      <TiDeleteOutline
                        className="text-3xl text-red-600"
                        onClick={() => setFieldValue("uploadimage", "")}
                      />
                    </div>
                  ) : (
                    <label
                      htmlFor="uploadimage"
                      className="w-40 h-10  cursor-pointer p-2 mt-2 mx-10 bg-gray-200 border-gray-200 flex  items-center justify-center  rounded"
                    >
                      <FaFileUpload className=" text-[1.8em] text-blue-700 p-1" />  
                      <span className="text-blue-700 font-bold">
                        Upload Image
                      </span>
                    </label>
                  )}
                  {/* it's input field for image upload */}
                  <input
                    onChange={(event) => {
                      //  it's validation on image
                      if (
                        event.target.files[0] &&
                        !SUPPORTED_FORMATS.includes(event.target.files[0].type)
                      ) {
                        imgError("unsupported file format");
                      } else if (
                        event.target.files[0].size >
                        1024 * 1024 * 10
                      ) {
                        imgError("image size is very large");
                      } else if (
                        event.target.files[0].size <=
                        1024 * 1024 * 10
                      ) {
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          setFieldValue("uploadimage", reader.result);
                        };
                      }
                    }}
                    className="hidden"
                    name="uploadimage"
                    id="uploadimage"
                    type="file"
                      />
                     
                    
                </div>

                <label
                  className="text-zinc-500 mt-4 font-bold text-lg"
                  htmlFor="description"
                >
                  Add Description*
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Write your thoughts here..."
                  className="w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2">
                <FieldArray
                  name="terms"
                  render={({ push, remove, form: { values, setFieldValue } }) => (
                    <TermCard
                      terms= {values.terms}
                      push= {push}
                      remove= {remove}
                      setFieldValue= {setFieldValue}
                    />
                  )}
                />
              </div>

              <div className="flex justify-center mb-10">
                <button
                  type="submit"
                  className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white"
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateFlashCard;