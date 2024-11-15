import { useState } from "react";
import Buttonh from "./savecnclbtn_h";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactComponent = () => {
  
  const [formData, setFormData] = useState({
    
    phone: '',
    website: '',
    linkedin: '',
    twitter: '',
    facebook:'',
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const [imageurl, setImage] = useState('');
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  const handleSaveClick = () => {
    handleSubmit({ preventDefault: () => {} });
    console.log('hello world');
};
const handleCancel = () => {
  console.log('Form submission cancelled');
}

  const handleSubmit = async (e) => {
    console.log('hello');
    e.preventDefault();
    const {phone, website, linkedin, twitter, facebook } = formData;

    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser.id;
    
    if (!userId) {
      setError('User ID is missing');
      return;
  }


    try {
      const response = await axios.post(`${baseurl}/createcontacts`, {
        phone,
        website,
        linkedin,
        twitter,
        facebook,
        userId
      });
      
      console.log('Form submitted successfully:', response.data);
      toast.success("Contact Saved successfully");

    } catch (error) {
      setError(error)
      console.error('Error submitting form:', error);
      toast.error('All Fields are required', error);

    }
  };

  return (
    <>
      <h1 className="account-setting-right-title">Contact Info</h1>
      <div className="col-12 mb-3 mt-1">
      <ToastContainer/>

        <label htmlFor="inputProfile" className="form-label form-label-alt">
          Phone
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="phone"
          placeholder="Type here..."
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputWebsite" className="form-label form-label-alt">
          Website
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="website"
          placeholder="Type here..."
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputLinkedIn" className="form-label form-label-alt">
          Linkedin
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="linkedin"
          placeholder="Type here..."
          value={formData.linkedin}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputTwitter" className="form-label form-label-alt">
          Twitter
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="twitter"
          placeholder="Type here..."
          value={formData.twitter}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputFacebook" className="form-label form-label-alt">
          Facebook
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="facebook"
          placeholder="Type here..."
          value={formData.facebook}
          onChange={handleChange}
        />
      </div>
      {/* <Buttonh /> */}
      <div className="experience--button--h pt-1">
        <button 
          type="button"
          className="btn btn-primary experience--btn--h experience--btn--h--alt"
          onClick={handleSaveClick}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ContactComponent;
