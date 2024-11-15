// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import { Col, Container, Row } from 'react-bootstrap'
// import RmsHeader from '../Rmsheader/RmsHeader';
// import Footerah from '../footerah/Footerah';




// const SubmitAStationForm = () => {
//     const navigate = useNavigate();
//     const stationsearchresult = () => {
//       navigate("/StationSearchResult");
//     };

    
//     return (
//         <>

//         <RmsHeader/>
//             <section className="submit-station-form-sec">
//                 <Container>
//                     <Row>
//                         <Col lg={12}>
//                             <div className="submit-station-box">
//                                 <Row>
//                                     <Col lg={12}>
//                                         <div className="submit-staion-form">
//                                             <h2>Fill out the form with the Station information</h2>
//                                             <form action="">
//                                                 <Row>
//                                                     <Col lg={6}>
//                                                         <div className="submit-staion-field">
//                                                             <label htmlFor="">What’s the name of the Station?</label>
//                                                             <input type="text" name="" id="" placeholder='Type your usename here...' />
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-staion-field">
//                                                             <label htmlFor="">Station category:</label>
//                                                             <div className="submit-select-svg"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
//                                                                     <path d="M21.5054 6.70982C21.5054 10.5732 21.5054 14.4366 21.5054 18.3058C21.4412 18.5158 21.4062 18.7376 21.3128 18.936C20.9393 19.7005 20.2973 20.039 19.4628 20.039C13.907 20.039 8.35708 20.039 2.80131 20.039C2.60872 20.039 2.40447 20.0273 2.21772 19.9748C1.31315 19.7297 0.752906 19.0177 0.752906 18.0782C0.74707 14.3665 0.741234 10.6666 0.758742 6.9666C0.758742 6.67481 0.828773 6.35383 0.957163 6.09122C1.31315 5.33839 1.94927 5.00574 2.77213 5.00574C5.31658 5.00574 7.86687 5.00574 10.4113 5.00574C10.4814 5.00574 10.5514 5.00574 10.6739 5.00574C9.41922 3.7627 8.19951 2.56634 7.01483 1.39332C7.24243 1.16572 7.45835 0.949792 7.68012 0.728027C8.929 1.9594 10.2012 3.20828 11.4851 4.47468C12.769 3.21412 14.0412 1.96524 15.296 0.733863C15.5294 0.955627 15.7512 1.17156 15.9788 1.39332C14.7707 2.58384 13.5569 3.78604 12.3022 5.02325C12.448 5.02325 12.5298 5.02325 12.6056 5.02325C14.8816 5.02325 17.1576 5.02325 19.4336 5.02325C20.1223 5.02325 20.7234 5.23334 21.1202 5.8111C21.3011 6.07371 21.377 6.40636 21.5054 6.70982ZM8.51465 8.03457C7.32413 8.03457 6.13944 8.03457 4.94892 8.03457C4.78551 8.03457 4.62211 8.04041 4.47037 8.08126C3.77007 8.26217 3.37906 8.79908 3.37906 9.56358C3.37906 11.5536 3.37906 13.5495 3.37906 15.5395C3.37906 16.5025 3.96849 17.0861 4.93725 17.0861C7.31246 17.0861 9.6935 17.0861 12.0687 17.0861C13.0433 17.0861 13.6386 16.4908 13.6386 15.522C13.6386 13.5437 13.6386 11.5653 13.6386 9.58692C13.6386 9.41768 13.6211 9.24844 13.5802 9.08504C13.3993 8.41391 12.8624 8.02874 12.1096 8.02874C10.9074 8.03457 9.71101 8.03457 8.51465 8.03457ZM17.2043 13.1877C16.2822 13.1877 15.5469 13.923 15.5469 14.8451C15.5411 15.773 16.2939 16.52 17.216 16.5141C18.1381 16.5083 18.8734 15.773 18.8734 14.8509C18.8734 13.923 18.1381 13.1877 17.2043 13.1877ZM19.1068 8.35555C17.8287 8.35555 16.5682 8.35555 15.3193 8.35555C15.3193 8.67652 15.3193 8.98583 15.3193 9.28929C16.5915 9.28929 17.8463 9.28929 19.1068 9.28929C19.1068 8.97415 19.1068 8.67069 19.1068 8.35555ZM19.1068 10.7424C17.8287 10.7424 16.5682 10.7424 15.3135 10.7424C15.3135 11.0576 15.3135 11.361 15.3135 11.6762C16.5799 11.6762 17.8404 11.6762 19.1068 11.6762C19.1068 11.3552 19.1068 11.0576 19.1068 10.7424Z" fill="#828282" />
//                                                                 </svg></div>
//                                                             <select name="" id="">
//                                                                 <option value="">TV News</option>
//                                                                 <option value="">Lorem Ipsum</option>
//                                                                 <option value="">Lorem Ipsum</option>
//                                                             </select>
                                                            
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-staion-field">
//                                                             <label htmlFor="">What State/Providence is this Station located in?</label>
//                                                             <input type="text" name="" id="" placeholder='Type Station location here...' />
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-staion-field">
//                                                             <label htmlFor="">Enter the Station’s email</label>
//                                                             <input type="email" name="" id="" placeholder='Type Station’s email here...' />
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-staion-field">
//                                                             <label htmlFor="">Enter your email</label>
//                                                             <input type="email" name="" id="" placeholder='Type  your email here...' />
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-staion-field">
//                                                             <label htmlFor="">What’s Station's website link</label>
//                                                             <input type="text" name="" id="" placeholder='Type Station’s website link here...' />
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-station-btn">
//                                                             <button type='submit' className='submitbtn-dark'>Submit</button>
//                                                             <button onClick={stationsearchresult} className='submitbtn-light'>Cancel</button>
//                                                         </div>
//                                                     </Col>
//                                                     <Col lg={6}>
//                                                         <div className="submit-checkbox">
//                                                             <input type="checkbox" name="" id="termscheck" />
//                                                             <label htmlFor="termscheck">Terms & conditions</label>
//                                                         </div>
//                                                     </Col>
//                                                 </Row>
//                                             </form>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <Footerah/>
//         </>
//     )
// }

// export default SubmitAStationForm



import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import RmsHeader from '../Rmsheader/RmsHeader';
import Footerah from '../footerah/Footerah';
import axios from 'axios';
import { baseurl } from '../baseurl';
import { toast, ToastContainer } from 'react-toastify';

const SubmitAStationForm = () => {
  const navigate = useNavigate();
  
  // State for form data
  const [formData, setFormData] = useState({
    stationName: '',
    stationCategory: '',
    stationLocation: '',
    stationEmail: '',
    userEmail: '',
    stationWebsite: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission

    axios.post(`${baseurl}/create-station`,formData)
    .then((e)=>{
        console.log(e)
        toast.success("Station Successfully Created.")

    })
    .catch((err)=>{
        console.log(err)
        toast.error("An error occured. Please Try Again Later.")
    })
  };

  const stationsearchresult = () => {
    navigate("/StationSearchResult");
  };

  return (
    <>
      <RmsHeader />
      <ToastContainer/>
      <section className="submit-station-form-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="submit-station-box">
                <Row>
                  <Col lg={12}>
                    <div className="submit-staion-form">
                      <h2>Fill out the form with the Station information</h2>
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col lg={6}>
                            <div className="submit-staion-field">
                              <label htmlFor="stationName">What’s the name of the Station?</label>
                              <input 
                                type="text" 
                                name="stationName" 
                                placeholder='Type your username here...' 
                                value={formData.stationName}
                                onChange={handleChange}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-staion-field">
                              <label htmlFor="stationCategory">Station category:</label>
                              <div className="submit-select-svg">
                                {/* SVG icon */}
                              </div>
                              <select 
                                name="stationCategory" 
                                value={formData.stationCategory}
                                onChange={handleChange}
                              >
                                <option value="TV News">TV News</option>
                                <option value="Radio">Radio</option>
                                <option value="Publications">Publications</option>
                                <option value="Podcast">Podcast</option>
                                <option value="Youtube">Youtube</option>
                              </select>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-staion-field">
                              <label htmlFor="stationLocation">What State/Province is this Station located in?</label>
                              <input 
                                type="text" 
                                name="stationLocation" 
                                placeholder='Type Station location here...' 
                                value={formData.stationLocation}
                                onChange={handleChange}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-staion-field">
                              <label htmlFor="stationEmail">Enter the Station’s email</label>
                              <input 
                                type="email" 
                                name="stationEmail" 
                                placeholder='Type Station’s email here...' 
                                value={formData.stationEmail}
                                onChange={handleChange}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-staion-field">
                              <label htmlFor="userEmail">Enter your email</label>
                              <input 
                                type="email" 
                                name="userEmail" 
                                placeholder='Type your email here...' 
                                value={formData.userEmail}
                                onChange={handleChange}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-staion-field">
                              <label htmlFor="stationWebsite">What’s Station's website link</label>
                              <input 
                                type="text" 
                                name="stationWebsite" 
                                placeholder='Type Station’s website link here...' 
                                value={formData.stationWebsite}
                                onChange={handleChange}
                              />
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-station-btn">
                              <button type='submit' className='submitbtn-dark'>Submit</button>
                              <button type="button" onClick={stationsearchresult} className='submitbtn-light'>Cancel</button>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="submit-checkbox">
                              <input 
                                type="checkbox" 
                                name="termsAccepted" 
                                id="termscheck"
                                checked={formData.termsAccepted}
                                onChange={handleChange} 
                              />
                              <label htmlFor="termscheck">Terms & conditions</label>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default SubmitAStationForm;
