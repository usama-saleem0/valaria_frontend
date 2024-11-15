import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";

import { Alert } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from "react";
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AwardForm = ({onCancel, ongetaward}) => {
  const [message, setMessage] = useState('');
  const [imageurl, setImage] = useState('');
  const [isImagedisplay, setImagedisplay] = useState('');

  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  const handleCallbackResume = (e) => {
    setImage(e);
    setImagedisplay(e)
    console.log(e, "Clod");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUser = getUserFromLocalStorage();
    if (!storedUser) {
      setError('No user data found in local storage.');
      return;
    }

    const userId = storedUser.id;

    const formData = {
      title,
      description,
      image: imageurl,
      userId
    };

    try {
      const response = await axios.post(`${baseurl}/NewsAwardPopup`, formData);


      localStorage.setItem('newsAwardData', JSON.stringify(response.data.newsaward));
      ongetaward(); 

      toast.success(response.data.message);
    } catch (err) {
      console.error('Error:', err);
      toast.error('All Fields are required', error);

    }
  };

  return (
    <div class="container">
      <ToastContainer />
      <div class="my--container--h mx-auto">
        <div class="row">
          <div class="col">
            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h1
                for="exampleFormControlInput1"
                class="form-label form-label-alt mb-1"
              >
                Award
              </h1>
              <div class="about--close--h">
                <img src={require("../../img/Union_h.png")} alt="" onClick={onCancel}/>
              </div>
            </div>
            <form onSubmit={handleSubmit}>

              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label form-label-alt"
                >
                  Award title
                </label>
                <input
                  type="text"
                  class="form-control skills--inp--h mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Type here..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}

                />
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label form-label-alt mt-1"
                >
                  Description
                </label>
                <textarea
                  class="form-control about--input--h"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Type here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div class="col-lg-8">
                <div class="award--img--h d-flex align-items-center">
                  <div class="news--director--img--h--cont">
                    <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} />
                  </div>
                  <a href="#" class="profile--image--a--h">
                    Upload Image in <span>jpg or png format</span>
                  </a>
                </div>
                </div>


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
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
            </form >
          </div >

        </div >
      </div >

    </div >
  );
};
export default AwardForm;
