import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";

import { Alert } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from "react";
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsDirectorForm = ({ onCancel, ongetdirector }) => {
  const [imageurl, setImage] = useState('');
  const [isImagedisplay, setImagedisplay] = useState('');

  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [phone, setphone] = useState('');
  const [Website, setWebsite] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [Twitter, setTwitter] = useState('');
  const [Facebook, setFacebook] = useState('');
 
  const [isCurrentDirector, setIsCurrentDirector] = useState(false);

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
      name,
      email,
      image: imageurl,
      isCurrentDirector, // Adding the new checkbox value
      userId,
      phone,
      Website,
      LinkedIn,
      Twitter,
      Facebook
    };

    try {
      const response = await axios.post(`${baseurl}/NewsDirectorPopup`, formData);

      localStorage.setItem('newsDirectorData', JSON.stringify(response.data.newsdirector));
      ongetdirector();
      toast.success(response.data.message);
      setError('');
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
                  News Director
                </h1>
                <div class="experience--close--h">
                  <img src={require("../../img/Union_h.png")}
                    onClick={onCancel} alt="close" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="news--director--img--h d-flex align-items-center">
                  <div className="news--director--img--h--cont">
                    <CloudinaryUpload isImagedisplay={isImagedisplay} cloudName={handleCallbackResume} number={"1"} />
                  </div>
                  <a href="#" className="profile--image--a--h">
                    Upload Image in <span>jpg or png format</span>
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="d-flex align-items-end mb-3 mt-1 experience--title--cont--h experience--col--h">
                  <div className="experience--email--h experience--col--child--h">
                    <label htmlFor="inputName" className="form-label form-label-alt">
                      Director’s name
                    </label>
                    <input
                      type="text"
                      className="form-control experience--email--inp--h"
                      id="inputName"
                      placeholder="Type here..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-check experience--chkbox--h d-flex align-items-center experience--col--child--h">
                    <input
                      className="form-check-input experience--form--check--input"
                      type="checkbox"
                      id="gridCheck"
                      checked={isCurrentDirector}
                      onChange={(e) => setIsCurrentDirector(e.target.checked)}
                    style={{width: '0%'}}

                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Current News Director
                    </label>
                  </div>
                </div>

                <div className="col-12 mb-3 mt-1">
                  <label htmlFor="inputEmail" className="form-label form-label-alt">
                    Director’s email
                  </label>
                  <input
                    type="email"
                    className="form-control experience--address--inp--h"
                    id="inputEmail"
                    placeholder="Type here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-12 mb-3 mt-1">
                  <label htmlFor="inputEmail" className="form-label form-label-alt">
                    Phone No
                  </label>
                  <input
                    type="email"
                    className="form-control experience--address--inp--h"
                    id="inputEmail"
                    placeholder="Type here..."
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>

                
                <div className="col-12 mb-3 mt-1">
                  <label htmlFor="inputEmail" className="form-label form-label-alt">
                    Portfolio Website
                  </label>
                  <input
                    type="email"
                    className="form-control experience--address--inp--h"
                    id="inputEmail"
                    placeholder="Type here..."
                    value={Website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                
                <div className="col-12 mb-3 mt-1">
                  <label htmlFor="inputEmail" className="form-label form-label-alt">
                    LinkedIn
                  </label>
                  <input
                    type=""
                    className="form-control experience--address--inp--h"
                    id="inputEmail"
                    placeholder="Type here..."
                    value={LinkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                </div>
                
                <div className="col-12 mb-3 mt-1">
                  <label htmlFor="inputEmail" className="form-label form-label-alt">
                    Twitter
                  </label>
                  <input
                    type=""
                    className="form-control experience--address--inp--h"
                    id="inputEmail"
                    placeholder="Type here..."
                    value={Twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>
                
                <div className="col-12 mb-3 mt-1">
                  <label htmlFor="inputEmail" className="form-label form-label-alt">
                    Facebook
                  </label>
                  <input
                    type=""
                    className="form-control experience--address--inp--h"
                    id="inputEmail"
                    placeholder="Type here..."
                    value={Facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
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
                    className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2" onClick={onCancel}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NewsDirectorForm;
