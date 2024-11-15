import { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../baseurl";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    recoveryEmail: '',
    current: '',
    newpass: '',
    confirmpass: '', 
  });
  
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

  const onCancel = () => {
    navigate('/kabcah1');
  }

  const handleSubmit = async (e) => {
    console.log('hello');
    e.preventDefault();
    const { recoveryEmail, current, newpass, confirmpass } = formData;

    if (newpass !== confirmpass) {
       setError('New passwords do not match.');
      toast.error('New passwords do not match', error);

      return;
    }

    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser ? storedUser.id : null;
    if (!userId) {
      setError('User ID is missing');
      return;
  }

    try {
      const response = await axios.post(`${baseurl}/updatepass`, {
        recoveryEmail,
        current,
        newpass,
        confirmpass,
        userId
      });
      
      console.log('Form submitted successfully:', response.data);
      setError('');
    } catch (error) {
      toast.error('All Fields are required', error);
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <h1 className="account-setting-right-title">Security</h1>
      <ToastContainer />

      <div className="col-12 mb-3">
        <label htmlFor="recoveryEmail" className="form-label form-label-alt">
          Recovery email
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="recoveryEmail"
          placeholder="recovery@mail.com"
          value={formData.recoveryEmail}
          onChange={handleChange}
        />
      </div>
      <h1 className="account-setting-right-title pt-5">Change password</h1>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="current" className="form-label form-label-alt">
          Current password
        </label>
        <input
          type="password"
          className="form-control experience--address--inp--h"
          id="current"
          placeholder="Type here..."
          value={formData.current}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="newpass" className="form-label form-label-alt">
          New password
        </label>
        <input
          type="password"
          className="form-control experience--address--inp--h"
          id="newpass"
          placeholder="Type here..."
          value={formData.newpass}
          onChange={handleChange}
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="confirmpass" className="form-label form-label-alt">
          Confirm new password
        </label>
        <input
          type="password"
          className="form-control experience--address--inp--h"
          id="confirmpass"
          placeholder="Type here..."
          value={formData.confirmpass}
          onChange={handleChange}
        />
      </div>
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
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </>
  );
};
export default PasswordComponent;
