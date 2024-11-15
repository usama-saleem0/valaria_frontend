import { useState } from "react";
import { baseurl } from "../../baseurl";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";


const NewsletterForm = ({ onCancel }) => {

  const [error, setError] = useState('');
  const [imageurl, setImage] = useState('');
  const [isImagedisplay, setImagedisplay] = useState('');

  const [formData, setFormData] = useState({
    mainheading: "",
    subheading: "",
    description:"",
    writer:""
  });

  const handleFormDataChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  // const handleCallbackResume = (imageUrl) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: imageUrl 
  //   }));
  // };
  

  const handleCallbackResume = (e) => {
    setImage(e);
    setImagedisplay(e)
    console.log(e, "Clod");
  }

 

  const handleSubmit = async (e) => {
    
    
    e.preventDefault();
    const { mainheading, subheading , description , writer} = formData;
    console.log(subheading)

    if (!mainheading || !subheading || !description || !writer || !imageurl ) {
      setError("All fields are required!");
      console.log('here');
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/addnewsletter`, {
        mainheading,
        subheading,
        description,
        writer,
        image: imageurl


      }); 
      
   
      toast.success("Articles Saved successfully");
      
      setTimeout(() => {
        onCancel()
       
      }, 1000);
      console.log('result' , response);
      // Optionally, clear the form or redirect the user
    } catch (err) {
      console.error('Error:', err);
   
      setError('Server Error');
    }
  };


  return (
    <div className="container">
              <ToastContainer/>
      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">NewLetter</h1>
              <div className="about--close--h" onClick={() => onCancel(true)}>
                <img src={require("../../img/Union_h.png")} alt="close" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="skillsInput" className="form-label form-label-alt">Main Heading</label>
              <input
                type="text"
                className="form-control skills--inp--h mb-3"
                id="skillsInput"
                placeholder="Type here..."
                value={formData.mainheading}
                onChange={(e) => handleFormDataChange('mainheading', e.target.value)}
              />

            <label htmlFor="skillsInput" className="form-label form-label-alt">Sub Heading</label>
              <input
                type="text"
                className="form-control skills--inp--h mb-3"
                id="skillsInput"
                placeholder="Type here..."
                value={formData.subheading}
                onChange={(e) => handleFormDataChange('subheading', e.target.value)}
              />


              <label htmlFor="skillsInput" className="form-label form-label-alt">Writer</label>
              <input
                type="text"
                className="form-control skills--inp--h mb-3"
                id="skillsInput"
                placeholder="Type here..."
                value={formData.writer}
                onChange={(e) => handleFormDataChange('writer', e.target.value)}
              />
              <label htmlFor="descriptionTextarea" className="form-label form-label-alt mt-1">Description</label>
              <textarea
                className="form-control about--input--h"
                id="descriptionTextarea"
                rows="3"
                placeholder="Type here..."
                value={formData.description}
                onChange={(e) => handleFormDataChange('description', e.target.value)}
              ></textarea>
            </div>

            <div className="col-12 mb-3 mt-1">
            <label
                htmlFor="inputAddress"
                className="form-label form-label-alt"
              >
                Article Image
              </label>
            <div className="account--profile--img--h d-flex align-items-center">
                <div className="account--profile--img--h--cont">
                  
                    <CloudinaryUpload
                    isImagedisplay={isImagedisplay} 
                    cloudName={handleCallbackResume} 
                    number={"1"} />
                </div>
                <a href="#" className="profile--image--a--h">
                    Upload Image in <span>jpg or png format</span>
                </a>
            </div>
            </div>

            <div className="experience--button--h pt-1">
              <button
                type="button"
                className="btn btn-primary experience--btn--h experience--btn--h--alt"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
                onClick={() => onCancel(true)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
