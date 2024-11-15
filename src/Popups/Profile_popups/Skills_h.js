import { useState } from "react";
import { baseurl } from "../../baseurl";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SkillsForm = ({ onSuccess , onCancel }) => {

  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    userSkill: "",
    description: "",
  });

  const handleFormDataChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  const handleSubmit = async (e) => {
    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser.id;

    e.preventDefault();
    const { userSkill, description } = formData;

    if (!userSkill || !description) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/SkillPopup`, {
        userSkill,
        description,
        userId
      });
      
      localStorage.setItem('skillData', JSON.stringify(response.data.data));
      toast.success("Skill Saved successfully");
      onSuccess()
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
              <h1 className="form-label form-label-alt mb-1">Skills</h1>
              <div className="about--close--h" onClick={() => onCancel(true)}>
                <img src={require("../../img/Union_h.png")} alt="close" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="skillsInput" className="form-label form-label-alt">Your skills</label>
              <input
                type="text"
                className="form-control skills--inp--h mb-3"
                id="skillsInput"
                placeholder="Type here..."
                value={formData.userSkill}
                onChange={(e) => handleFormDataChange('userSkill', e.target.value)}
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
                onClick={onCancel}
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

export default SkillsForm;
