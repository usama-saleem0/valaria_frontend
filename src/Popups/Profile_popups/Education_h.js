import { Alert } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import { baseurl } from "../../baseurl";
import "react-datepicker/dist/react-datepicker.css";
import CloudinaryUpload from "../../cloundanary/CloudinaryUpload";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navigate, useNavigate } from 'react-router-dom';
// import { abort } from "process";
const EducationForm = ({ onCancel, onSuccess }) => {

  const [error, setError] = useState("");
  const [imageurl, setImage] = useState('');
  const [isImagedisplay, setImagedisplay] = useState('');

//   const handleCallbackResume = (e) => {
//     setImage(e);
//     setImagedisplay(e)
//     console.log(e, "Clod");
// }


const handleCallbackResume = (imageUrl) => {
  setFormData((prevData) => ({
    ...prevData,
    image: imageUrl // Set the image URL here
  }));
};

const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    image: '',
    startMonth: null,
    startYear: null,
    endMonth: null,
    endYear: null,
    description: "",
  });


  const handleFormDataChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      school,
      degree,
      fieldOfStudy,
      image: imageurl,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
    } = formData;

    if (
      !school ||
      !degree ||
      !fieldOfStudy ||
      !startMonth ||
      !startYear ||
      !endMonth ||
      !endYear ||
      !description
    ) {
      setError("All fields are required!");
      return;
    }


    const storedData = getUserFromLocalStorage();
    try {
      const response = await axios.post(`${baseurl}/EducationPopup`, {
        school,
        degree,
        fieldOfStudy,
        image: imageurl,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description,
        userId: storedData.id

      });


      localStorage.setItem('educationData', JSON.stringify(response.data.data));

      // onSuccess()

      toast.success("Education Saved successfully");
      setError('');
      // Optionally, clear the form or redirect the user
    } catch (err) {
      console.error("Error:", err);
      toast.error("All fields are required", err);
    }
  };

  const [isStartDateMonth, setIsStartDateMonth] = useState(false);
  const [isStartDateYear, setIsStartDateYear] = useState(false);
  const [isEndDateMonth, setIsEndDateMonth] = useState(false);
  const [isEndDateYear, setIsEndDateYear] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, i) => currentYear - i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container">
      <ToastContainer />

      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">Education</h1>
              <div className="about--close--h">
                <img src={require("../../img/Union_h.png")} onClick={onCancel} alt="" />
              </div>
            </div>

            <div className="col-12 mb-3 mt-1">
              <label
                htmlFor="inputAddress"
                className="form-label form-label-alt"
              >
                School
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputAddress"
                placeholder="Type here..."
                value={formData.school}
                onChange={(e) => handleFormDataChange("school", e.target.value)}
              />
            </div>

            <div className="col-12 mb-3 mt-1">
              <label
                htmlFor="inputDegree"
                className="form-label form-label-alt"
              >
                Degree
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputDegree"
                placeholder="Type here..."
                value={formData.degree}
                onChange={(e) => handleFormDataChange("degree", e.target.value)}
              />
            </div>

            <div className="col-12 mb-3 mt-1">
              <label
                htmlFor="inputFieldOfStudy"
                className="form-label form-label-alt"
              >
                Field of Study
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputFieldOfStudy"
                placeholder="Type here..."
                value={formData.fieldOfStudy}
                onChange={(e) =>
                  handleFormDataChange("fieldOfStudy", e.target.value)
                }
              />
            </div>


            <div className="col-12 mb-3 mt-1">
            <label
                htmlFor="inputAddress"
                className="form-label form-label-alt"
              >
                Institution logo
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

            <div className="experience--col--h d-flex align-items-end mb-3 mt-1 justify-content-between">
              <div className="experience--email--h experience--col--child--h drop--position">
                <label
                  htmlFor="inputStartMonth"
                  className="form-label form-label-alt"
                >
                  Start Date
                </label>
                <div
                  onClick={() => setIsStartDateMonth(!isStartDateMonth)}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isStartDateMonth
                      ? "experience--job--inp--h--dropdown--click--rad"
                      : ""
                    }`}
                  id="inputStartMonth"
                >
                  {formData.startMonth || "Month"}
                </div>
                {isStartDateMonth && (
                  <ul
                    className="experience--job--inp--h experience--job--inp--h--dropdown"
                    style={{ height: "250px", overflowY: "scroll" }}
                  >
                    {months.map((month, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleFormDataChange("startMonth", month);
                          setIsStartDateMonth(false);
                        }}
                      >
                        {month}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="experience--email--h experience--col--child--h drop--position">
                <div
                  onClick={() => setIsStartDateYear(!isStartDateYear)}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isStartDateYear
                      ? "experience--job--inp--h--dropdown--click--rad"
                      : ""
                    }`}
                  id="inputStartYear"
                >
                  {formData.startYear || "Year"}
                </div>
                {isStartDateYear && (
                  <ul
                    className="experience--job--inp--h experience--job--inp--h--dropdown"
                    style={{ height: "250px", overflowY: "scroll" }}
                  >
                    {years.map((year) => (
                      <li
                        key={year}
                        onClick={() => {
                          handleFormDataChange("startYear", year);
                          setIsStartDateYear(false);
                        }}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="experience--col--h d-flex align-items-end mb-3 mt-1 justify-content-between">
              <div className="experience--email--h experience--col--child--h drop--position">
                <label
                  htmlFor="inputEndMonth"
                  className="form-label form-label-alt"
                >
                  End Date
                </label>
                <div
                  onClick={() => setIsEndDateMonth(!isEndDateMonth)}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEndDateMonth
                      ? "experience--job--inp--h--dropdown--click--rad"
                      : ""
                    }`}
                  id="inputEndMonth"
                >
                  {formData.endMonth || "Month"}
                </div>
                {isEndDateMonth && (
                  <ul
                    className="experience--job--inp--h experience--job--inp--h--dropdown"
                    style={{ height: "250px", overflowY: "scroll" }}
                  >
                    {months.map((month, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleFormDataChange("endMonth", month);
                          setIsEndDateMonth(false);
                        }}
                      >
                        {month}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="experience--email--h experience--col--child--h drop--position">
                <div
                  onClick={() => setIsEndDateYear(!isEndDateYear)}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEndDateYear
                      ? "experience--job--inp--h--dropdown--click--rad"
                      : ""
                    }`}
                  id="inputEndYear"
                >
                  {formData.endYear || "Year"}
                </div>
                {isEndDateYear && (
                  <ul
                    className="experience--job--inp--h experience--job--inp--h--dropdown"
                    style={{ height: "250px", overflowY: "scroll" }}
                  >
                    {years.map((year) => (
                      <li
                        key={year}
                        onClick={() => {
                          handleFormDataChange("endYear", year);
                          setIsEndDateYear(false);
                        }}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                Description
              </label>
              <textarea
                className="form-control about--input--h experience--desc--h"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
                value={formData.description}
                onChange={(e) =>
                  handleFormDataChange("description", e.target.value)
                }
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
                onClick={onCancel} // Go back to the previous page
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

export default EducationForm;








