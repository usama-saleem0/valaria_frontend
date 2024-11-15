import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
import axios from 'axios';
import { baseurl } from '../../baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Experience_Director({onSuccess , onCancel}) {

  const [error, setError] = useState('');

  // State variables for form fields
  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobType, setJobType] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [description, setDescription] = useState('');
  const [isCurrentRole, setIsCurrentRole] = useState(false);

  const [isJobType, setIsJobType] = useState(false);
  const [isStartDateMonth, setIsStartDateMonth] = useState(false);
  const [isStartDateYear, setIsStartDateYear] = useState(false);
  const [isEndDateMonth, setIsEndDateMonth] = useState(false);
  const [isEndDateYear, setIsEndDateYear] = useState(false);

  const currentYear = new Date().getFullYear();
  
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => currentYear - i);
  const toggleJobType = () => setIsJobType(!isJobType);
  const toggleStartMonth = () => setIsStartDateMonth(!isStartDateMonth);
  const toggleStartYear = () => setIsStartDateYear(!isStartDateYear);
  const toggleEndMonth = () => setIsEndDateMonth(!isEndDateMonth);
  const toggleEndYear = () => setIsEndDateYear(!isEndDateYear);

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  

  const handleSubmit = async (e) => {

    
    e.preventDefault();


    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser.id;

    


    const formData = {
      title,
      companyName,
      jobType,
      startMonth,
      startYear,
      endMonth,
      endYear,
      description,
      isCurrentRole,
      userId
    };

    try {


      const response =  await axios.post(`${baseurl}/createExperienceDirector`, {
        formData        
      });

      localStorage.setItem('experienceData', JSON.stringify(response.data.data));

      // onSuccess()
      toast.success("Profile Saved successfully");

      setError(''); 
    } catch (error) {
      console.error('Error:', error);
      toast.error('All Fields are required', error);
    }
  };

  return (
    <div className="container">
               <ToastContainer/>

      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <h1 className="form-label form-label-alt mb-1">Experience</h1>
                <div className="experience--close--h"  onClick={()=>onCancel(true)}> 
                  <img src={require("../../img/Union_h.png")} alt="close" />
                </div>
              </div>

              <div className="d-flex align-items-end mb-3 mt-1 experience--title--cont--h experience--col--h">
                <div className="experience--email--h experience--col--child--h">
                  <label htmlFor="inputTitle" className="form-label form-label-alt">Title</label>
                  <input
                    type="text"
                    className="form-control experience--email--inp--h"
                    id="inputTitle"
                    placeholder="Type here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-check experience--chkbox--h d-flex align-items-center experience--col--child--h">
                  <input
                    className="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                    checked={isCurrentRole}
                    onChange={(e) => setIsCurrentRole(e.target.checked)} 
                    style={{width: '0%'}}
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    I am currently working in this role
                  </label>
                </div>
              </div>

              <div className="col-12 mb-3 mt-1">
                <label htmlFor="inputCompanyName" className="form-label form-label-alt">Company Name</label>
                <input
                  type="text"
                  className="form-control experience--address--inp--h"
                  id="inputCompanyName"
                  placeholder="Type here..."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-3 mt-1 col-12 drop--position">
                <label htmlFor="inputJobType" className="form-label form-label-alt">Job Type</label>
                <div
                  onClick={toggleJobType}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isJobType ? `experience--job--inp--h--dropdown--click--rad` : ``}`}
                  id="inputWorkPlace"
                >
                  {jobType || 'Choose Option...'}
                </div>
                {isJobType && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={() => { setJobType('Option 1'); toggleJobType(); }}>Option 1</li>
                    <li onClick={() => { setJobType('Option 2'); toggleJobType(); }}>Option 2</li>
                    <li onClick={() => { setJobType('Option 3'); toggleJobType(); }}>Option 3</li>
                  </ul>
                )}
              </div>

           

              <div className="experience--col--h d-flex align-items-end mb-3 mt-1 justify-content-between">
                <div className="experience--email--h experience--col--child--h drop--position">
                  <label htmlFor="inputStartMonth" className="form-label form-label-alt">Start Date</label>
                  <div
                    onClick={toggleStartMonth}
                    className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isStartDateMonth ? `experience--job--inp--h--dropdown--click--rad` : ``}`}
                    id="inputStartMonth"
                  >
                    {startMonth || 'Month'}
                  </div>
                  {isStartDateMonth && (
                    <ul className=" experience--job--inp--h experience--job--inp--h--dropdown" style={{ height: '250px', overflowY: 'scroll' }}>
                      <li onClick={() => { setStartMonth('January'); toggleStartMonth(); }}>January</li>
                      <li onClick={() => { setStartMonth('February'); toggleStartMonth(); }}>February</li>
                      <li onClick={() => { setStartMonth('March'); toggleStartMonth(); }}>March</li>
                      <li onClick={() => { setStartMonth('April'); toggleStartMonth(); }}>April</li>
                      <li onClick={() => { setStartMonth('May'); toggleStartMonth(); }}>May</li>
                      <li onClick={() => { setStartMonth('June'); toggleStartMonth(); }}>June</li>
                      <li onClick={() => { setStartMonth('July'); toggleStartMonth(); }}>July</li>
                      <li onClick={() => { setStartMonth('August'); toggleStartMonth(); }}>August</li>
                      <li onClick={() => { setStartMonth('September'); toggleStartMonth(); }}>September</li>
                      <li onClick={() => { setStartMonth('October'); toggleStartMonth(); }}>October</li>
                      <li onClick={() => { setStartMonth('November'); toggleStartMonth(); }}>November</li>
                      <li onClick={() => { setStartMonth('December'); toggleStartMonth(); }}>December</li>
                    </ul>
                  )}
                </div>
                <div className="experience--email--h experience--col--child--h drop--position">
                  <div
                    onClick={toggleStartYear}
                    className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isStartDateYear ? `experience--job--inp--h--dropdown--click--rad` : ``}`}
                    id="inputStartYear"
                  >
                    {startYear || 'Year'}
                  </div>
                  {isStartDateYear && (
                    <ul className="experience--job--inp--h experience--job--inp--h--dropdown" style={{ height: '250px', overflowY: 'scroll' }}>
                      {years.map((year) => (
                        <li key={year} onClick={() => { setStartYear(year); toggleStartYear(); }}>{year}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="experience--col--h d-flex align-items-end mb-3 mt-1 justify-content-between">
                <div className="experience--email--h experience--col--child--h drop--position">
                  <label htmlFor="inputEndMonth" className="form-label form-label-alt">End Date</label>
                  <div
                    onClick={toggleEndMonth}
                    className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEndDateMonth ? `experience--job--inp--h--dropdown--click--rad` : ``}`}
                    id="inputEndMonth"
                  >
                    {endMonth || 'Month'}
                  </div>
                  {isEndDateMonth && (
                    <ul className=" experience--job--inp--h experience--job--inp--h--dropdown" style={{ height: '250px', overflowY: 'scroll' }}>
                      <li onClick={() => { setEndMonth('January'); toggleEndMonth(); }}>January</li>
                      <li onClick={() => { setEndMonth('February'); toggleEndMonth(); }}>February</li>
                      <li onClick={() => { setEndMonth('March'); toggleEndMonth(); }}>March</li>
                      <li onClick={() => { setEndMonth('April'); toggleEndMonth(); }}>April</li>
                      <li onClick={() => { setEndMonth('May'); toggleEndMonth(); }}>May</li>
                      <li onClick={() => { setEndMonth('June'); toggleEndMonth(); }}>June</li>
                      <li onClick={() => { setEndMonth('July'); toggleEndMonth(); }}>July</li>
                      <li onClick={() => { setEndMonth('August'); toggleEndMonth(); }}>August</li>
                      <li onClick={() => { setEndMonth('September'); toggleEndMonth(); }}>September</li>
                      <li onClick={() => { setEndMonth('October'); toggleEndMonth(); }}>October</li>
                      <li onClick={() => { setEndMonth('November'); toggleEndMonth(); }}>November</li>
                      <li onClick={() => { setEndMonth('December'); toggleEndMonth(); }}>December</li>
                    </ul>
                  )}
                </div>
                <div className="experience--email--h experience--col--child--h drop--position">
                  <div
                    onClick={toggleEndYear}
                    className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEndDateYear ? `experience--job--inp--h--dropdown--click--rad` : ``}`}
                    id="inputEndYear"
                  >
                    {endYear || 'Year'}
                  </div>
                  {isEndDateYear && (
                    <ul className=" experience--job--inp--h experience--job--inp--h--dropdown" style={{ height: '250px', overflowY: 'scroll' }}>
                      {years.map((year) => (
                        <li key={year} onClick={() => { setEndYear(year); toggleEndYear(); }}>{year}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="col-12 mb-3 mt-1">
                <label htmlFor="inputDescription" className="form-label form-label-alt">Description</label>
                <textarea
                  className="form-control experience--address--inp--h"
                  id="inputDescription"
                  rows="3"
                  placeholder="Type here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* <div className="d-flex justify-content-between mt-4"> */}
                {/* <Buttonh text="Cancel" /> */}
                
                {/* <Buttonh text="Save" type="submit" /> */}
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
          onClick={()=>onCancel(true)}
        >
          Cancel
        </button>
      </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience_Director;
