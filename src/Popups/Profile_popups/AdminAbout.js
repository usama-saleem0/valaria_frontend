import { useState } from "react";
import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
import axios from "axios";
import { baseurl } from "../../baseurl";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminAbout = ({onUpdateAbout , onCancel,ts}) => {
  const [aboutContent, setAboutContent] = useState("");

  console.log(ts,"CHILD PROPS")

  const handleInputChange = (e) => {
    setAboutContent(e.target.value);
  };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Submitting form...');
//     try {
//       const response = await axios.post(`${baseurl}/addaboutadmin`, {
//         about: aboutContent, // Submitting only aboutContent
//       });
  
//       // Optionally update user data in localStorage if the response contains it
//       if (response.data && response.data.user) {
//         localStorage.setItem('userData', JSON.stringify(response.data.user));
//       }
  
//       console.log('Form submitted successfully:', response.data);
//       toast.success('Form submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Error submitting form.');
//     }
//   };
  

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aboutContent) {
      toast.error('About content cannot be empty.');
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/addaboutadmin`, {
        about: aboutContent,
      });

      // Call the function passed from parent to update content
      onUpdateAbout(aboutContent); // Pass the saved content to the parent

      console.log('Form submitted successfully:', response.data);
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form.');
    }
  };


  return (
    <div className="container">
        <ToastContainer/>
      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">About</h1>
              <div className="about--close--h">
                <img src={require("../../img/Union_h.png" )} onClick= {onCancel} alt="" />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                You can write about your years of experience, industry, or
                skills.
              </label>
              <textarea
                className="form-control about--input--h"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
                value={aboutContent}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {/* <Buttonh /> */}
            <div className="experience--button--h pt-1">
        <button 
          type="button"
          className="btn btn-primary experience--btn--h experience--btn--h--alt"
          onClick={handleSubmit}>
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
          onClick= {onCancel}
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

export default AdminAbout;
