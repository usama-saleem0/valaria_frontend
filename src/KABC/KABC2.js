import React, { useEffect, useState } from "react";

import StationAboutPopup from "../Popups/Station_profile_popups/Stationabout_h";
import DirectorPopup from "../Popups/Station_profile_popups/Newsdirector_h";
import AwardPopup from "../Popups/Station_profile_popups/Award_h";
import JobopeningPopup from "../Popups/Station_profile_popups/Jobopening_h";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal, Button, ModalBody } from "react-bootstrap";
import kabc from "../img/kabc.png";
import Assistant from "../img/Assistant.png";
import Award from "../Award/Award";
import { FaPlusCircle } from "react-icons/fa";
import Jobopening from "../Popups/Station_profile_popups/Jobopening_h";
import Dirctors from "../Dirctors/Dirctors";
import Openings from "../Openings/Openings";
import Cardah from "../Cardah/Cardah";
import About2 from "../About/About2";
import Dirctors2 from "../Dirctors/Dirctors2";
import Award2 from "../Award/Award2";
import Openings2 from "../Openings/Openings2";
import Station from "../Station/Station";
import Filter from "../Filter/Filter";
import Reportersd from "../reportersd/Reportersd";
import Reportersd2 from "../reportersd/Reportersd2";
import Chartah1 from "../Chart/Chartah1";
import Chartah2 from "../Chart/Chartah2";
import Chartah3 from "../Chart/Chartah3";
import Assistantah from "../Assistantah/Assistantah";
import Jobah from "../Jobah/Jobah";
import Footerah from "../footerah/Footerah";
import { Container } from "react-bootstrap";
import Header1 from "../Header/Header2";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { baseurl } from "../baseurl";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
// import { profile } from "console";

  const KABC2 = () => {


   

  const closePopup = (e) => {
    console.log(e, "TS");
    setShowModal(false);
  };

  const [activeTab, setActiveTab] = useState("ratings"); // State to track active tab


  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update the active tab (ratings or jobs)
  };

  

  const navigate = useNavigate();
  const usersetting = () => navigate("/accountsettingh");
  const [userdata, setUser] = useState({});
  const [aboutsdatas, setAboutsUser] = useState({});
  const [directordata, setdirectorsUser] = useState({});  
  const [awardsdata, setawardsUser] = useState({});
  const [showrequest, setShowrequest] = useState(false);
  const [jobContent, setjobContent] = useState([]);
  const [jobData, setjobData] = useState({});
  const [error, setError] = useState(null);

  const [ContactData, setContactData] = useState([]);

  const [aboutData, setAboutData] = useState();
  const [currentData, setcurrentData] = useState({});

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  // useEffect(() => {
  //   const fetchAboutData = async () => {
  //     try {
  //       const storedUser = getUserFromLocalStorage();
  //       if (storedUser) {
  //         const userId = storedUser.id;
  //         const response = await axios.get(`${baseurl}/getabout/${userId}`);
  //         setAboutData(response.data);
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };

  //   fetchAboutData();
  // }, []);


  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user, userdata);
      setcurrentData(user)
      // setUser(user)
      
      fetchUserData(user.id);
    fetchContactData();
    }
  }, []);


  const [email, setemail] = useState('');
  const handleSave = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${baseurl}/SubscribeNewsLetter`, {
          email
        });

        toast.success("Subscribed successfully");
        console.log('result', response);

    } catch (error) {
        console.error('Error updating date:', error);
        toast.error('Error subscribing to');
    }
};




  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getuserdata/${userId}`);

      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  
  const fetchContactData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getcontacts`);
      setContactData(response.data);
    } catch (err) {
      console.error("Error fetching Contact data:", err);
    }
  };


  const ongetabout = () => {
    console.log("here");
    const aboutUser = localStorage.getItem("aboutData");
    const alpha = JSON.parse(aboutUser);
    setAboutsUser(alpha);
    console.log("done", aboutsdatas, "alpha", alpha);
  };





  const onFecth = () => {
    setShowrequest(true);

    fetchJobsData();


  };


  const fetchJobsData = async () => {
    const id = localStorage.getItem("jobgetId");
    console.log("Job ID from localStorage:", id);
    
    setjobContent([]);
    try {
      const response = await axios.get(`${baseurl}/jobbyjobid/${id}`);
      console.log("Fetched Job Data from API:", response.data);
      
      setjobContent(response.data);  // Assuming response.data is an array
      setjobData(response.data[0]);  // Assuming this is relevant to your state
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };
  
  const [sortOrder, setSortOrder] = useState('Newest'); 
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  const sortJobs = (jobs) => {
    return jobs.sort((a, b) => {
      const dateA = new Date(a.createdAt);  // Use createdAt for sorting
      const dateB = new Date(b.createdAt);
  
      if (sortOrder === 'Newest') {
        return dateB - dateA;  // Sort by newest first
      } else {
        return dateA - dateB;  // Sort by oldest first
      }
    });
  };
  
  const filteredAndSortedJobs = sortJobs(
    jobContent.filter(job => jobTypeFilter === '' || job.Job.jobType === jobTypeFilter)
  );


  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setShowModal(true);
    setIsOpen(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOption(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

 
  
  return (
    <>
    <ToastContainer/>
      <Header1 />

      {
        // currentData.verified_account == 0 ?
        currentData && currentData.verified_account === 0 ? 
        <div style={{height:'100vh', display:'flex' , justifyContent:'center' , alignContent:'center', alignItems:'center'}} > 
          <div className="notapproved">

          Your account is under review. Once approved by the administrator, you'll gain access to the portal

          </div>

          <div style={{width:'100%' , position:'absolute', bottom:0}}>

<Footerah />

</div>

        </div>

        
        :
        <div>

       
        <Tabs>
        <section class="KABC-ah">
          <Container>
            <div class="main-KABC-ah ah-spas">
              <div class="KABC-box-ah">
                <div class="KABC-part-1-ah">
                  <div class="KABC-logo-ah">
                    <img src={kabc} alt="" />
                    <button>Subscibed</button>
                  </div>

                  <div class="KABC-tital-ah">
                    <span>
                      <h2>{userdata.username}</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          d="M15.4735 20.2877C15.2633 20.261 14.9807 20.2409 14.7113 20.1874C14.5799 20.1607 14.5274 20.1941 14.4551 20.3011C13.5746 21.5843 12.3656 22.2192 10.8281 22.159C9.48114 22.1056 8.4167 21.484 7.6348 20.3679C7.52967 20.2209 7.45082 20.1674 7.26684 20.2008C4.92113 20.6152 2.75283 19.0312 2.43744 16.6319C2.37831 16.1842 2.44401 15.7163 2.47687 15.2619C2.48344 15.1282 2.48344 15.0614 2.36517 14.9812C-0.0922437 13.2636 -0.0856731 9.74814 2.37174 8.0038C2.47687 7.93029 2.49658 7.87014 2.47687 7.74316C2.04978 5.31044 3.53473 3.15842 5.93301 2.77078C6.38638 2.69727 6.85946 2.77747 7.32598 2.8042C7.44425 2.81088 7.50996 2.81757 7.5888 2.70395C9.32344 0.191033 12.7336 0.18435 14.4617 2.69727C14.5339 2.8042 14.5996 2.81757 14.7245 2.79752C17.1162 2.3631 19.2254 3.87353 19.6065 6.31961C19.6787 6.77408 19.6065 7.24859 19.5736 7.70974C19.5605 7.85009 19.5736 7.9236 19.6984 8.01049C22.1361 9.70136 22.1296 13.2836 19.6919 14.9745C19.5802 15.0547 19.5539 15.1148 19.5802 15.2552C20.0073 17.6812 18.5092 19.8266 16.1109 20.2275C15.9138 20.2676 15.7232 20.2676 15.4735 20.2877ZM10.0396 12.1608C10.0068 12.1675 9.96737 12.1742 9.93451 12.1742C9.88852 12.094 9.8491 12.0071 9.78996 11.9403C9.39572 11.5326 9.00149 11.1182 8.58754 10.7239C8.16045 10.3162 7.5231 10.3363 7.12229 10.744C6.72148 11.1516 6.70177 11.8066 7.10915 12.2276C7.81877 12.9695 8.53497 13.698 9.26431 14.4198C9.67826 14.8274 10.2959 14.8341 10.7098 14.4198C12.1225 13.0029 13.5221 11.5727 14.915 10.1425C15.1976 9.85508 15.2764 9.4875 15.1647 9.09986C14.9347 8.30455 13.9952 8.07732 13.3907 8.67882C12.3196 9.75483 11.2552 10.8442 10.1908 11.9336C10.1382 12.0004 10.0922 12.0873 10.0396 12.1608Z"
                          fill="#89C400"
                        />
                      </svg>
                    </span>
                    <p>{userdata.stationtype}</p>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                        fill="none"
                      >
                        <path
                          d="M0.400391 7.01762C0.400391 3.81044 2.19097 1.30766 4.92627 0.437829C8.86993 -0.821563 12.9784 1.41973 13.7144 5.45939C14.0989 7.55126 13.5771 9.43501 12.1984 11.084C10.7209 12.8503 9.21596 14.6007 7.72747 16.3617C7.32652 16.8366 6.90908 16.8366 6.50263 16.3617C4.96471 14.5473 3.41032 12.7436 1.89437 10.9079C0.878244 9.68582 0.416868 8.25567 0.400391 7.01762ZM7.11231 3.92784C5.65128 3.93318 4.47588 5.08584 4.48137 6.50532C4.48686 7.9088 5.67875 9.04546 7.13428 9.04012C8.57882 9.03478 9.76522 7.87678 9.75423 6.47331C9.74325 5.06449 8.55685 3.9225 7.11231 3.92784Z"
                          fill="#194D79"
                        />
                      </svg>
                      <p>{userdata.Profile ? userdata.Profile.address : 'Add Your Address'}</p>
                    </span>
                  </div>
                </div>

                <div class="KABC-btn-box-ah">
                  <span class="See">
                    <button onClick={usersetting} class="more">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                      >
                        <path
                          d="M8.67686 0.149902C9.14554 0.181294 9.50174 0.382199 9.79544 0.733783C10.4141 1.47462 11.214 1.85132 12.1826 1.81993C13.0762 1.78854 13.8011 1.40556 14.3697 0.714948C14.6822 0.338251 15.0696 0.149902 15.5571 0.181294C15.6945 0.187572 15.8383 0.225242 15.9633 0.26919C17.1631 0.70867 18.2504 1.34278 19.2315 2.16523C19.7314 2.58588 19.8627 3.13837 19.6377 3.79759C19.0503 5.499 20.0126 7.26948 21.7561 7.67757C21.8561 7.70268 21.9561 7.71524 22.0561 7.74035C22.631 7.86592 23.0309 8.28656 23.1434 8.86416C23.3871 10.1575 23.3809 11.4445 23.1372 12.7379C23.0247 13.3531 22.5685 13.7989 21.9436 13.8994C19.9626 14.2195 18.9066 16.0402 19.6002 17.93C19.8314 18.5578 19.6752 19.1417 19.1565 19.5749C18.2879 20.2906 17.338 20.862 16.2945 21.2952C15.6196 21.5714 15.0259 21.4207 14.5635 20.8494C13.3886 19.3866 11.3015 19.2924 10.0704 20.6485C9.97042 20.7552 9.88293 20.8808 9.79544 20.9938C9.408 21.4835 8.80809 21.6656 8.22068 21.4459C7.00212 21.0001 5.90853 20.366 4.92118 19.5373C4.44001 19.1292 4.31502 18.5139 4.57748 17.8923C4.93368 17.0385 4.92743 16.1972 4.50874 15.3747C4.05256 14.477 3.30893 13.9496 2.31533 13.7989C1.47171 13.6733 1.07177 13.2966 0.940537 12.4553C0.746816 11.2185 0.78431 9.98798 1.02177 8.76371C1.153 8.10449 1.60919 7.6964 2.29658 7.60851C3.85884 7.40132 4.95243 6.13311 4.88369 4.56354C4.87119 4.24962 4.7837 3.92943 4.68997 3.62807C4.465 2.95002 4.62123 2.37242 5.18364 1.93294C6.08976 1.22977 7.07711 0.671 8.15819 0.275468C8.32067 0.212685 8.50189 0.19385 8.67686 0.149902ZM12.0763 14.6088C14.1448 14.6088 15.8195 12.9199 15.8195 10.8293C15.8195 8.77627 14.1323 7.08741 12.0888 7.08741C10.0142 7.08741 8.32692 8.75743 8.32067 10.8167C8.31442 12.9137 9.98916 14.6025 12.0763 14.6088Z"
                          fill="white"
                        />
                      </svg>
                      Account settings
                    </button>
                  </span>
                  <span className="See">
                    <button
                      className="Contact-ah more"
                      onClick={toggleDropdown}
                    >
                      <FaPlusCircle /> Add profile section
                    </button>
                    {isOpen && (
                      <ul className="add_profile_ul">
                        <li
                          onClick={() =>
                            handleSelectChange("StationAboutPopup")
                          }
                        >
                          <FaPlusCircle /> Add About
                        </li>
                        <li onClick={() => handleSelectChange("Director")}>
                          <FaPlusCircle /> Add Director
                        </li>
                        <li onClick={() => handleSelectChange("Award")}>
                          <FaPlusCircle /> Add Award
                        </li>
                        <li onClick={() => handleSelectChange("Jobopening")}>
                          <FaPlusCircle /> Add Jobopening
                        </li>
                      </ul>
                    )}

                    <Modal
                      show={showModal}
                      onHide={handleClose}
                      size="xl"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      {/* onClose={closePopup} */}
                      <Modal.Body>
                        {/* Render different components based on selected option */}
                        {selectedOption === "StationAboutPopup" && (
                          <StationAboutPopup onCancel={handleClose} onSuccess={ongetabout} />
                        )}
                        {selectedOption === "Director" && (
                          <DirectorPopup onCancel={handleClose} />
                        )}
                        {selectedOption === "Award" && (
                          <AwardPopup onCancel={handleClose} />
                        )}
                        {selectedOption === "Jobopening" && (
                          <JobopeningPopup onCancel={handleClose} />
                        )}
                      </Modal.Body>
                    </Modal>
                  </span>
                </div>
              </div>

              <div class="navtabs">
                <TabList>
                  <Tab>
                    <div class="navtab active" data-target="Profile">
                      Profile
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div class="navtab" data-target="Stationratings">
                      My ratings
                    </div>
                  </Tab>
                  <Tab>
                    <div class="navtab" data-target="Statistic">
                      Statistic
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div
                      class="navtab"
                      data-target="Posted"
                      onClick={() => setShowrequest(false)}
                    >
                      Posted job
                    </div>
                  </Tab>
                  {/* <Tab > <div class="navtab"  data-target="Posteds" >
                    Incoming Jobs
                  </div></Tab> */}
                  <Tab>
                    {" "}
                    <div class="navtab" data-target="Contact">
                      Contact Info
                    </div>
                  </Tab>
                </TabList>
                <div class="underline"></div>
              </div>
            </div>
          </Container>
        </section>

        <div class="main-tabs-ah">
          <TabPanel>
            <div id="Profile" class="content   active">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <About2  aboutsdatas={aboutsdatas} />
                      <Dirctors2 directordata={directordata} />
                      <Award2 awardsdata={awardsdata} />
                      <Openings2 onSuccess={onFecth} />
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Recommend</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah">
                        {/* <Cardah /> */}  
                        <Newslettersidesd/>

                  

                        <div class="Recommend-card-ah">
                          <div class="Recommend-card-tital-ah">
                            <h2>
                              Subscribe to our Newsletter, so you'll never miss
                              one
                            </h2>
                            <input type="email" placeholder="Your email" />
                            <button>Subscribe</button>
                          </div>
                        </div>
                      </div>

                      <div class="About-main-box-2-tital-ah padding-ah">
                        <h2>Follow RMS</h2>
                      </div>

                      <div class="Recommend-card-ah">
                        <div class="Recommend-card-tital-ah">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="24"
                              viewBox="0 0 12 24"
                              fill="none"
                            >
                              <path
                                d="M10.6686 0.688859L8.22131 0.684082C5.47187 0.684082 3.69506 2.90163 3.69506 6.33388V8.93882H1.23442C1.02179 8.93882 0.849609 9.14851 0.849609 9.40717V13.1814C0.849609 13.4401 1.02199 13.6495 1.23442 13.6495H3.69506V23.1732C3.69506 23.4318 3.86724 23.6413 4.07987 23.6413H7.2903C7.50293 23.6413 7.67511 23.4316 7.67511 23.1732V13.6495H10.5522C10.7648 13.6495 10.937 13.4401 10.937 13.1814L10.9382 9.40717C10.9382 9.28298 10.8975 9.16404 10.8255 9.07615C10.7534 8.98826 10.6552 8.93882 10.5532 8.93882H7.67511V6.73058C7.67511 5.66922 7.88303 5.13041 9.0196 5.13041L10.6682 5.12969C10.8806 5.12969 11.0528 4.92 11.0528 4.66158V1.15697C11.0528 0.898792 10.8808 0.689336 10.6686 0.688859Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                            >
                              <path
                                d="M21.1006 6.62311C21.0528 5.58402 20.8775 4.86965 20.6262 4.25064C20.3671 3.59357 19.9683 3.0053 19.446 2.51627C18.9356 2.01963 18.3176 1.63372 17.6397 1.38928C16.99 1.14857 16.2483 0.980534 15.1638 0.93472C14.0712 0.885026 13.7244 0.873535 10.9533 0.873535C8.18218 0.873535 7.83533 0.885026 6.7468 0.93084C5.66232 0.976654 4.91675 1.14484 4.27085 1.3854C3.58493 1.63372 2.97097 2.01575 2.46058 2.51627C1.94225 3.0053 1.53964 3.59745 1.28436 4.24691C1.03314 4.86965 0.857766 5.58014 0.809951 6.61923C0.758086 7.66609 0.746094 7.99843 0.746094 10.6535C0.746094 13.3087 0.758086 13.641 0.805901 14.684C0.853716 15.7231 1.02925 16.4375 1.28047 17.0565C1.53964 17.7135 1.94225 18.3018 2.46058 18.7908C2.97097 19.2875 3.58898 19.6734 4.2668 19.9178C4.91675 20.1585 5.65827 20.3266 6.7429 20.3724C7.83128 20.4183 8.17829 20.4297 10.9494 20.4297C13.7205 20.4297 14.0673 20.4183 15.1559 20.3724C16.2403 20.3266 16.9859 20.1585 17.6318 19.9178C19.0035 19.4097 20.088 18.3706 20.6183 17.0565C20.8694 16.4337 21.0449 15.7231 21.0927 14.684C21.1405 13.641 21.1525 13.3087 21.1525 10.6535C21.1525 7.99843 21.1485 7.66609 21.1006 6.62311ZM19.2626 14.6076C19.2187 15.5627 19.0513 16.0784 18.9117 16.4222C18.5688 17.2742 17.8631 17.9504 16.9739 18.279C16.6151 18.4127 16.0729 18.5731 15.08 18.615C14.0035 18.661 13.6806 18.6723 10.9573 18.6723C8.23405 18.6723 7.90713 18.661 6.83449 18.615C5.83769 18.5731 5.29942 18.4127 4.94058 18.279C4.49809 18.1223 4.09532 17.8739 3.76841 17.5492C3.4295 17.2321 3.17033 16.8501 3.00679 16.4261C2.86724 16.0823 2.69981 15.5627 2.65605 14.6115C2.60808 13.58 2.59624 13.2705 2.59624 10.6612C2.59624 8.05185 2.60808 7.73862 2.65605 6.71101C2.69981 5.75593 2.86724 5.24019 3.00679 4.89636C3.17033 4.47224 3.4295 4.08648 3.77246 3.7731C4.10327 3.44837 4.50199 3.20005 4.94462 3.04351C5.30347 2.90979 5.84579 2.74937 6.83853 2.70729C7.91507 2.66147 8.2381 2.64998 10.9612 2.64998C13.6885 2.64998 14.0114 2.66147 15.0841 2.70729C16.0808 2.74937 16.6191 2.90979 16.978 3.04351C17.4204 3.20005 17.8232 3.44837 18.1501 3.7731C18.489 4.09021 18.7482 4.47224 18.9117 4.89636C19.0513 5.24019 19.2187 5.75966 19.2626 6.71101C19.3105 7.7425 19.3225 8.05185 19.3225 10.6612C19.3225 13.2705 19.3105 13.5761 19.2626 14.6076Z"
                                fill="black"
                              />
                              <path
                                d="M10.9535 5.62974C8.05891 5.62974 5.71037 7.87985 5.71037 10.6535C5.71037 13.4271 8.05891 15.6772 10.9535 15.6772C13.8483 15.6772 16.1967 13.4271 16.1967 10.6535C16.1967 7.87985 13.8483 5.62974 10.9535 5.62974ZM10.9535 13.9122C9.07564 13.9122 7.55242 12.4529 7.55242 10.6535C7.55242 8.85403 9.07564 7.3947 10.9535 7.3947C12.8315 7.3947 14.3546 8.85403 14.3546 10.6535C14.3546 12.4529 12.8315 13.9122 10.9535 13.9122Z"
                                fill="black"
                              />
                              <path
                                d="M17.6282 5.43118C17.6282 6.07885 17.0801 6.60399 16.404 6.60399C15.728 6.60399 15.1799 6.07885 15.1799 5.43118C15.1799 4.78337 15.728 4.25837 16.404 4.25837C17.0801 4.25837 17.6282 4.78337 17.6282 5.43118Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>

                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                            >
                              <path
                                d="M23.0034 3.00257C22.1813 3.37813 21.3053 3.62706 20.3921 3.74793C21.3316 3.16373 22.0487 2.24571 22.3858 1.13918C21.5098 1.68309 20.5427 2.06728 19.5119 2.28168C18.6801 1.35934 17.4947 0.788086 16.2014 0.788086C13.6923 0.788086 11.6722 2.90905 11.6722 5.50916C11.6722 5.88328 11.7026 6.24301 11.7772 6.58547C8.0094 6.39409 4.67539 4.51343 2.43568 1.64856C2.04466 2.35506 1.8153 3.16373 1.8153 4.03428C1.8153 5.66888 2.62359 7.11787 3.82842 7.95676C3.10027 7.94237 2.38594 7.72221 1.78076 7.37543C1.78076 7.38982 1.78076 7.40853 1.78076 7.42724C1.78076 9.72086 3.35174 11.626 5.41183 12.0649C5.04292 12.1699 4.64085 12.2203 4.22358 12.2203C3.93343 12.2203 3.64051 12.203 3.36555 12.1397C3.95277 14.0088 5.61908 15.383 7.60042 15.4276C6.05846 16.6838 4.10061 17.4406 1.98111 17.4406C1.60943 17.4406 1.25296 17.4234 0.896484 17.3759C2.90407 18.7241 5.28333 19.494 7.84912 19.494C16.189 19.494 20.7485 12.2994 20.7485 6.06314C20.7485 5.8545 20.7416 5.65305 20.7319 5.45305C21.6314 4.78827 22.3872 3.95801 23.0034 3.00257Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="Stationratings" class="content  active" >
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <Station fetchUserData={fetchUserData} />

                      <Filter activeTab="Stationratings" sortOrder={sortOrder} setSortOrder={setSortOrder} />

                      <Reportersd2 sortOrder={sortOrder} />

                      {/* <Reportersd2 /> */}

                      <div class="job-post-btn-box">
                        <button>Load more</button>
                      </div>
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Recommend</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah">
                        <Newslettersidesd />

                       

                        <div class="side-subscribe-box">
                        <h5 style={{ paddingBottom: '5px' }}>Subscribe to our Newsletter, so you'll never miss one</h5>
                        <input type="email" placeholder="Your email" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
                        <button onClick={handleSave}>Submit</button>
                      </div>
                      </div>

                      <div class="About-main-box-2-tital-ah padding-ah">
                        <h2>Follow RMS</h2>
                      </div>

                      <div class="Recommend-card-ah">
                        <div class="Recommend-card-tital-ah">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="24"
                              viewBox="0 0 12 24"
                              fill="none"
                            >
                              <path
                                d="M10.6686 0.688859L8.22131 0.684082C5.47187 0.684082 3.69506 2.90163 3.69506 6.33388V8.93882H1.23442C1.02179 8.93882 0.849609 9.14851 0.849609 9.40717V13.1814C0.849609 13.4401 1.02199 13.6495 1.23442 13.6495H3.69506V23.1732C3.69506 23.4318 3.86724 23.6413 4.07987 23.6413H7.2903C7.50293 23.6413 7.67511 23.4316 7.67511 23.1732V13.6495H10.5522C10.7648 13.6495 10.937 13.4401 10.937 13.1814L10.9382 9.40717C10.9382 9.28298 10.8975 9.16404 10.8255 9.07615C10.7534 8.98826 10.6552 8.93882 10.5532 8.93882H7.67511V6.73058C7.67511 5.66922 7.88303 5.13041 9.0196 5.13041L10.6682 5.12969C10.8806 5.12969 11.0528 4.92 11.0528 4.66158V1.15697C11.0528 0.898792 10.8808 0.689336 10.6686 0.688859Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                            >
                              <path
                                d="M21.1006 6.62311C21.0528 5.58402 20.8775 4.86965 20.6262 4.25064C20.3671 3.59357 19.9683 3.0053 19.446 2.51627C18.9356 2.01963 18.3176 1.63372 17.6397 1.38928C16.99 1.14857 16.2483 0.980534 15.1638 0.93472C14.0712 0.885026 13.7244 0.873535 10.9533 0.873535C8.18218 0.873535 7.83533 0.885026 6.7468 0.93084C5.66232 0.976654 4.91675 1.14484 4.27085 1.3854C3.58493 1.63372 2.97097 2.01575 2.46058 2.51627C1.94225 3.0053 1.53964 3.59745 1.28436 4.24691C1.03314 4.86965 0.857766 5.58014 0.809951 6.61923C0.758086 7.66609 0.746094 7.99843 0.746094 10.6535C0.746094 13.3087 0.758086 13.641 0.805901 14.684C0.853716 15.7231 1.02925 16.4375 1.28047 17.0565C1.53964 17.7135 1.94225 18.3018 2.46058 18.7908C2.97097 19.2875 3.58898 19.6734 4.2668 19.9178C4.91675 20.1585 5.65827 20.3266 6.7429 20.3724C7.83128 20.4183 8.17829 20.4297 10.9494 20.4297C13.7205 20.4297 14.0673 20.4183 15.1559 20.3724C16.2403 20.3266 16.9859 20.1585 17.6318 19.9178C19.0035 19.4097 20.088 18.3706 20.6183 17.0565C20.8694 16.4337 21.0449 15.7231 21.0927 14.684C21.1405 13.641 21.1525 13.3087 21.1525 10.6535C21.1525 7.99843 21.1485 7.66609 21.1006 6.62311ZM19.2626 14.6076C19.2187 15.5627 19.0513 16.0784 18.9117 16.4222C18.5688 17.2742 17.8631 17.9504 16.9739 18.279C16.6151 18.4127 16.0729 18.5731 15.08 18.615C14.0035 18.661 13.6806 18.6723 10.9573 18.6723C8.23405 18.6723 7.90713 18.661 6.83449 18.615C5.83769 18.5731 5.29942 18.4127 4.94058 18.279C4.49809 18.1223 4.09532 17.8739 3.76841 17.5492C3.4295 17.2321 3.17033 16.8501 3.00679 16.4261C2.86724 16.0823 2.69981 15.5627 2.65605 14.6115C2.60808 13.58 2.59624 13.2705 2.59624 10.6612C2.59624 8.05185 2.60808 7.73862 2.65605 6.71101C2.69981 5.75593 2.86724 5.24019 3.00679 4.89636C3.17033 4.47224 3.4295 4.08648 3.77246 3.7731C4.10327 3.44837 4.50199 3.20005 4.94462 3.04351C5.30347 2.90979 5.84579 2.74937 6.83853 2.70729C7.91507 2.66147 8.2381 2.64998 10.9612 2.64998C13.6885 2.64998 14.0114 2.66147 15.0841 2.70729C16.0808 2.74937 16.6191 2.90979 16.978 3.04351C17.4204 3.20005 17.8232 3.44837 18.1501 3.7731C18.489 4.09021 18.7482 4.47224 18.9117 4.89636C19.0513 5.24019 19.2187 5.75966 19.2626 6.71101C19.3105 7.7425 19.3225 8.05185 19.3225 10.6612C19.3225 13.2705 19.3105 13.5761 19.2626 14.6076Z"
                                fill="black"
                              />
                              <path
                                d="M10.9535 5.62974C8.05891 5.62974 5.71037 7.87985 5.71037 10.6535C5.71037 13.4271 8.05891 15.6772 10.9535 15.6772C13.8483 15.6772 16.1967 13.4271 16.1967 10.6535C16.1967 7.87985 13.8483 5.62974 10.9535 5.62974ZM10.9535 13.9122C9.07564 13.9122 7.55242 12.4529 7.55242 10.6535C7.55242 8.85403 9.07564 7.3947 10.9535 7.3947C12.8315 7.3947 14.3546 8.85403 14.3546 10.6535C14.3546 12.4529 12.8315 13.9122 10.9535 13.9122Z"
                                fill="black"
                              />
                              <path
                                d="M17.6282 5.43118C17.6282 6.07885 17.0801 6.60399 16.404 6.60399C15.728 6.60399 15.1799 6.07885 15.1799 5.43118C15.1799 4.78337 15.728 4.25837 16.404 4.25837C17.0801 4.25837 17.6282 4.78337 17.6282 5.43118Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>

                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                            >
                              <path
                                d="M23.0034 3.00257C22.1813 3.37813 21.3053 3.62706 20.3921 3.74793C21.3316 3.16373 22.0487 2.24571 22.3858 1.13918C21.5098 1.68309 20.5427 2.06728 19.5119 2.28168C18.6801 1.35934 17.4947 0.788086 16.2014 0.788086C13.6923 0.788086 11.6722 2.90905 11.6722 5.50916C11.6722 5.88328 11.7026 6.24301 11.7772 6.58547C8.0094 6.39409 4.67539 4.51343 2.43568 1.64856C2.04466 2.35506 1.8153 3.16373 1.8153 4.03428C1.8153 5.66888 2.62359 7.11787 3.82842 7.95676C3.10027 7.94237 2.38594 7.72221 1.78076 7.37543C1.78076 7.38982 1.78076 7.40853 1.78076 7.42724C1.78076 9.72086 3.35174 11.626 5.41183 12.0649C5.04292 12.1699 4.64085 12.2203 4.22358 12.2203C3.93343 12.2203 3.64051 12.203 3.36555 12.1397C3.95277 14.0088 5.61908 15.383 7.60042 15.4276C6.05846 16.6838 4.10061 17.4406 1.98111 17.4406C1.60943 17.4406 1.25296 17.4234 0.896484 17.3759C2.90407 18.7241 5.28333 19.494 7.84912 19.494C16.189 19.494 20.7485 12.2994 20.7485 6.06314C20.7485 5.8545 20.7416 5.65305 20.7319 5.45305C21.6314 4.78827 22.3872 3.95801 23.0034 3.00257Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="Statistic" class="content  active">
              <section class="Statistic-ah">
                <Container>
                  <div class="main-Statistic-ah">
                    <Chartah1 />
                    <Chartah2 />
                    <Chartah2 />
                    <Chartah3 />
                  </div>
                </Container>
              </section>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="Posted" class="content active "  onClick={() => handleTabChange("PostedJobs")}>
              {showrequest ? (
                <section class="About-ah">
                  <Container>
                    <div class="About-main-ah">
                      <div class="Angeles-my-box-ah">
                        <div class="Angeles-ah-box">
                          <div class="Angeles-logo-side-box">
                            <div class="Angeles-logo-ah">
                              <img src={Assistant} alt="" />
                            </div>
                            
                            <span>
                              <h2>{jobData.jobTitle}</h2>
                              <p>
                                {jobData.yearofexperience} of Experiance• $
                                {jobData.yearlySalary} • {jobData.jobType}
                              </p>
                            </span>
                          
                          </div>
                        </div>
                        <Filter setJobTypeFilter={setJobTypeFilter} jobTypeFilter={jobTypeFilter} setSortOrder={setSortOrder} sortOrder={sortOrder}/>
                        <Jobah jobContent={jobContent} jobTypeFilter={jobTypeFilter} />
                      </div>
                    </div>
                  </Container>
                </section>
              ) : (
                <section class="About-ah">
                  <Container>
                    <div class="About-main-ah">
                      <div class="About-main-box-1-ah">
                        <div class="About-main-card-1-hello-ah">
                          <Filter activeTab={activeTab} setJobTypeFilter={setJobTypeFilter} jobTypeFilter={jobTypeFilter} setSortOrder={setSortOrder} sortOrder={sortOrder} />

                          <Assistantah onSuccess={onFecth}  jobTypeFilter={jobTypeFilter} sortJobs={sortJobs}/>
                        </div>
                      </div>

                      <div class="About-main-box-2-ah">
                        <div class="Hire-ah-box">
                          <h2>Hire the right employee for your company now!</h2>
                          <p>
                            Pellentesque vel tristique ultrices habitasse
                            feugiat nulla tempor quam.{" "}
                          </p>
                          <button
                            onClick={() => handleSelectChange("Jobopening")}
                          >
                            Post job opening
                          </button>
                        </div>
                      </div>
                    </div>
                  </Container>
                </section>
              )}
            </div>
          </TabPanel>

        
          <TabPanel>
            <div id="Contact" class="content active">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <div class="About-main-card-1-ah">
                        <span class="edite">
                          <h2>{userdata.username}</h2>
                          {/* <span class="edite-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z"
                                fill="#828282"
                              />
                            </svg>{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                            >
                              <path
                                d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z"
                                fill="#828282"
                              />
                              <path
                                d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z"
                                fill="#828282"
                              />
                            </svg>
                          </span> */}
                        </span>

                        <div class="Website-ah-box">
                          <div class="Website-ah-card">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M6.03722 0.0673828C6.53098 0.177106 7.00645 0.323405 7.40267 0.658671C7.45753 0.707438 7.51849 0.750108 7.56726 0.798874C8.68888 1.92049 9.81659 3.03602 10.9321 4.16373C11.7611 5.00495 11.9013 6.15705 11.3222 7.11408C11.0601 7.54688 10.6883 7.85167 10.2128 8.02235C9.524 8.27227 8.99367 8.69288 8.69497 9.37561C8.49991 9.83279 8.46943 10.2961 8.59744 10.7776C8.93271 12.0334 9.62153 13.0879 10.4627 14.0511C11.4685 15.2092 12.6206 16.1907 14.0105 16.8734C14.5896 17.1599 15.187 17.4037 15.8575 17.3123C16.7414 17.1904 17.418 16.7576 17.7655 15.9164C17.991 15.3616 18.2714 14.8679 18.8078 14.5509C19.6795 14.0389 20.7829 14.1059 21.5326 14.7886C22.2154 15.4104 22.8615 16.0809 23.5138 16.7393C24.1111 17.3367 24.7329 17.9158 25.2876 18.5558C25.9886 19.3544 26.0069 20.6101 25.3913 21.4757C25.2632 21.6525 25.123 21.8231 24.9706 21.9755C24.3123 22.64 23.6357 23.2861 22.9895 23.9689C22.3007 24.6943 21.4534 25.0112 20.4842 25.0539C19.4418 25.0966 18.4482 24.8649 17.4729 24.5358C15.5527 23.8835 13.8215 22.8777 12.1817 21.7073C9.46304 19.7628 7.0796 17.4647 5.03142 14.8313C3.51967 12.8929 2.22737 10.8203 1.42883 8.47953C1.08137 7.46154 0.843636 6.41307 0.898498 5.32193C0.947264 4.37099 1.25815 3.53587 1.97135 2.86534C2.56874 2.29843 3.14783 1.71933 3.71474 1.12195C4.21459 0.597714 4.75711 0.164915 5.5008 0.0673828C5.67757 0.0673828 5.85435 0.0673828 6.03722 0.0673828Z"
                                  fill="#194D79"
                                />
                              </svg>
                            </button>

                            
                            <span>
                              <h2>Email</h2>
                              <h3>{userdata.email}</h3>
                            </span>
                          </div>

                          <div class="Website-ah-card">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="31"
                                height="23"
                                viewBox="0 0 31 23"
                                fill="none"
                              >
                                <path
                                  d="M0.515625 6.29022C2.40093 7.45114 4.2948 8.61206 6.1801 9.77299C8.8795 11.4364 11.5875 13.0998 14.2869 14.7805C15.0067 15.2311 15.6837 15.2224 16.4036 14.7805C20.8854 12.0082 25.3673 9.25317 29.8578 6.48948C29.952 6.42884 30.0549 6.36819 30.2091 6.28155C30.2091 6.42017 30.2091 6.52414 30.2091 6.61943C30.2091 10.2668 30.2091 13.9055 30.2091 17.5529C30.2091 20.2386 28.3152 22.1533 25.633 22.1533C19.3086 22.1533 12.9757 22.1533 6.65142 22.1533C5.8116 22.1533 4.96322 22.1879 4.14054 22.058C2.27238 21.7721 0.858407 20.2646 0.575612 18.4019C0.567042 18.3499 0.541334 18.298 0.515625 18.246C0.515625 14.2607 0.515625 10.2755 0.515625 6.29022ZM5.04892 0.0351005C2.96652 0.0437641 1.26118 1.30865 0.721294 3.23197C0.661307 3.43989 0.695585 3.54386 0.875546 3.65648C5.64878 6.58478 10.4135 9.52174 15.1695 12.4587C15.3238 12.554 15.4352 12.5453 15.5809 12.45C16.155 12.0862 16.7292 11.731 17.3119 11.3758C21.4682 8.80266 25.6244 6.23824 29.7892 3.67381C30.0034 3.54386 30.072 3.4139 29.9692 3.18865C29.8492 2.91142 29.7721 2.61685 29.6178 2.35694C28.7523 0.806161 27.4154 0.0437641 25.6501 0.0351005C22.2223 0.0264369 18.7945 0.0351005 15.3581 0.0351005C11.9217 0.0351005 8.4853 0.0351005 5.04892 0.0351005Z"
                                  fill="#194D79"
                                />
                              </svg>
                            </button>  


                            <span>
                              <h2>Phone</h2>
                              <h3>{userdata.Contact ? userdata.Contact.phone: ''}</h3>

                            </span>
                          </div>

                          <div class="Website-ah-card">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="none"
                              >
                                <path
                                  d="M0.429688 15.4333C0.429688 14.8943 0.429688 14.3448 0.429688 13.8058C0.450832 13.7107 0.461404 13.6156 0.482548 13.5205C0.567124 12.9181 0.619984 12.3157 0.746848 11.7239C1.47632 8.38443 3.18898 5.63675 5.91656 3.57599C9.31017 1.00797 13.1267 0.151959 17.292 1.01853C20.6222 1.71602 23.3287 3.45974 25.4008 6.15458C27.642 9.06078 28.5724 12.3686 28.2235 16.0145C27.938 18.963 26.7963 21.5733 24.8299 23.8031C22.6732 26.2443 19.9879 27.7661 16.774 28.3368C16.2454 28.4319 15.7168 28.4848 15.1882 28.5587C14.649 28.5587 14.0993 28.5587 13.5601 28.5587C13.4861 28.5482 13.4227 28.5165 13.3487 28.5165C11.1708 28.3579 9.13045 27.7344 7.26978 26.6037C3.66472 24.3949 1.43403 21.2034 0.662272 17.0396C0.54598 16.4901 0.503692 15.9617 0.429688 15.4333ZM19.7025 11.2695C19.9033 13.5205 19.8928 15.7292 19.7025 17.959C21.4468 18.2338 23.1278 18.6142 24.7664 19.3012C26.0985 16.1625 26.0985 13.0555 24.7664 9.92735C23.1278 10.6143 21.4468 10.9947 19.7025 11.2695ZM9.02473 11.2695C7.28035 10.9947 5.5994 10.6143 4.00303 9.94849C2.64981 12.1361 2.66038 17.4623 4.0136 19.2906C5.60997 18.6248 7.30149 18.2444 9.02473 17.9696C8.83443 15.7292 8.83443 13.5205 9.02473 11.2695ZM11.5409 17.6314C13.4438 17.6314 15.3151 17.6314 17.1863 17.6314C17.3555 15.6235 17.3555 13.5944 17.1863 11.6077C15.2834 11.6077 13.4227 11.6077 11.5409 11.6077C11.3717 13.6156 11.3717 15.6235 11.5409 17.6314ZM16.8692 9.02908C16.848 8.91283 16.8269 8.83885 16.8163 8.77544C16.5626 7.43331 16.2454 6.10174 15.664 4.85472C15.4208 4.32632 15.1459 3.81905 14.7019 3.41747C14.4376 3.17441 14.279 3.17441 14.0253 3.41747C13.8456 3.58656 13.687 3.77678 13.5601 3.97757C12.5769 5.50993 12.2069 7.25365 11.8686 9.02908C13.539 9.15589 15.1882 9.15589 16.8692 9.02908ZM11.8475 20.1677C11.9109 20.4953 11.9637 20.7596 12.0166 21.0132C12.2809 22.3659 12.6509 23.6975 13.3275 24.9022C13.5284 25.2509 13.8033 25.5574 14.0676 25.8639C14.2367 26.0541 14.4587 26.0541 14.6385 25.8639C14.8182 25.6737 15.0085 25.4834 15.1565 25.2721C15.7802 24.3421 16.1291 23.2959 16.4146 22.2285C16.5837 21.5733 16.7212 20.8969 16.8797 20.1677C15.1882 20.1677 13.539 20.1677 11.8475 20.1677ZM5.28224 7.73978C6.61431 8.24704 7.95696 8.54295 9.2996 8.74374C9.50047 7.88773 9.65905 7.06343 9.89163 6.24969C10.1136 5.43596 10.4097 4.65392 10.6845 3.84019C8.5067 4.60108 6.72003 5.90095 5.28224 7.73978ZM5.28224 21.4993C6.70946 23.3487 8.49613 24.638 10.7374 25.42C10.0185 23.8031 9.62733 22.1757 9.33132 20.4848C7.94638 20.6961 6.60374 20.992 5.28224 21.4993ZM17.9792 25.42C20.2205 24.638 22.0072 23.3381 23.4344 21.4993C22.1023 20.992 20.7702 20.6961 19.3853 20.4848C19.0893 22.1757 18.6981 23.8137 17.9792 25.42ZM18.0427 3.84019C18.3175 4.66449 18.603 5.44652 18.825 6.24969C19.0576 7.06343 19.2161 7.8983 19.417 8.74374C20.7702 8.53238 22.1234 8.24704 23.4344 7.72921C22.0072 5.90095 20.2205 4.60108 18.0427 3.84019Z"
                                  fill="#194D79"
                                />
                              </svg>
                            </button>

                            <span>
                              <h2>Website</h2>
                              <h3>{userdata.Contact ? userdata.Contact.website: ''}</h3>
                            </span>
                          </div>

                          <div class="Website-ah-card">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                              >
                                <path
                                  d="M13.8702 24.8135C12.157 24.8135 10.4759 24.8135 8.77071 24.8135C8.77071 19.344 8.77071 13.8745 8.77071 8.38085C10.3794 8.38085 11.9961 8.38085 13.6611 8.38085C13.6611 9.1128 13.6611 9.8367 13.6611 10.5686C14.015 10.1584 14.3126 9.74018 14.6745 9.39432C15.5754 8.54172 16.6773 8.10738 17.8999 7.99477C18.9536 7.89825 20.0073 7.97064 21.0288 8.29238C22.726 8.82324 23.7314 10.0137 24.2301 11.6867C24.5598 12.7886 24.6805 13.9308 24.6885 15.0729C24.7127 18.2581 24.7046 21.4352 24.7046 24.6204C24.7046 24.6606 24.6966 24.7008 24.6885 24.7652C22.9994 24.7652 21.3103 24.7652 19.581 24.7652C19.581 24.6445 19.581 24.5319 19.581 24.4113C19.581 21.6926 19.589 18.974 19.573 16.2553C19.573 15.6842 19.5167 15.1132 19.4121 14.5501C19.0984 12.861 18.0045 12.2738 16.42 12.4669C14.9963 12.6438 14.2161 13.4803 13.9989 15.0327C13.9185 15.5958 13.8863 16.1749 13.8783 16.7379C13.8622 19.3037 13.8702 21.8776 13.8702 24.4435C13.8702 24.5561 13.8702 24.6767 13.8702 24.8135ZM5.52924 8.37281C3.82404 8.37281 2.14298 8.37281 0.453873 8.37281C0.453873 13.8584 0.453873 19.3359 0.453873 24.8135C2.15907 24.8135 3.84013 24.8135 5.52924 24.8135C5.52924 19.3118 5.52924 13.8423 5.52924 8.37281ZM2.9634 0.152488C1.34669 0.168575 0.0195312 1.50377 0.0195312 3.11245C0.0195312 4.75329 1.37886 6.11262 3.00362 6.10458C4.62034 6.09654 5.94749 4.73721 5.93945 3.1044C5.93141 1.46356 4.59621 0.136402 2.9634 0.152488Z"
                                  fill="#194D79"
                                />
                              </svg>
                            </button>

                            <span>
                              <h2>Linkedin</h2>
                              <h3>{userdata.Contact ? userdata.Contact.linkedin: ''}</h3>
                            </span>
                          </div>

                          <div class="Website-ah-card">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="24"
                                viewBox="0 0 28 24"
                                fill="none"
                              >
                                <path
                                  d="M27.7721 3.35349C26.7748 3.8091 25.7121 4.11109 24.6041 4.25772C25.7439 3.549 26.6138 2.4353 27.0228 1.09292C25.9601 1.75276 24.7868 2.21884 23.5364 2.47894C22.5273 1.36 21.0891 0.666992 19.5202 0.666992C16.4763 0.666992 14.0257 3.24003 14.0257 6.39435C14.0257 6.84821 14.0626 7.28461 14.1531 7.70007C9.58212 7.4679 5.53749 5.18638 2.82039 1.71087C2.34603 2.56796 2.06779 3.549 2.06779 4.6051C2.06779 6.58811 3.04836 8.34594 4.50999 9.36364C3.62664 9.34618 2.76005 9.0791 2.02588 8.65841C2.02588 8.67587 2.02588 8.69856 2.02588 8.72125C2.02588 11.5038 3.93171 13.8149 6.4309 14.3474C5.98336 14.4748 5.49559 14.5359 4.98938 14.5359C4.63738 14.5359 4.28203 14.5149 3.94847 14.4381C4.66085 16.7057 6.68233 18.3727 9.08597 18.4269C7.21535 19.9508 4.8402 20.869 2.26893 20.869C1.81804 20.869 1.38558 20.848 0.953125 20.7904C3.38862 22.4261 6.27501 23.36 9.38769 23.36C19.5051 23.36 25.0366 14.6319 25.0366 7.06641C25.0366 6.8133 25.0282 6.56891 25.0164 6.32627C26.1076 5.5198 27.0245 4.51258 27.7721 3.35349Z"
                                  fill="#194D79"
                                />
                              </svg>
                            </button>

                            <span>
                              <h2>Twitter</h2>
                              <h3>{userdata.Contact ? userdata.Contact.twitter: ''}</h3>
                            </span>
                          </div>

                          <div class="Website-ah-card">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="28"
                                viewBox="0 0 13 28"
                                fill="none"
                              >
                                <path
                                  d="M11.8775 0.800995L9.01596 0.79541C5.80113 0.79541 3.72357 3.38832 3.72357 7.40153V10.4474H0.846432C0.597813 10.4474 0.396484 10.6926 0.396484 10.995V15.4081C0.396484 15.7106 0.598043 15.9555 0.846432 15.9555H3.72357V27.0911C3.72357 27.3936 3.9249 27.6385 4.17352 27.6385H7.92736C8.17598 27.6385 8.37731 27.3933 8.37731 27.0911V15.9555H11.7414C11.99 15.9555 12.1913 15.7106 12.1913 15.4081L12.1927 10.995C12.1927 10.8498 12.1452 10.7107 12.0609 10.608C11.9767 10.5052 11.8619 10.4474 11.7425 10.4474H8.37731V7.86538C8.37731 6.62435 8.62042 5.99435 9.94937 5.99435L11.877 5.99351C12.1254 5.99351 12.3267 5.74832 12.3267 5.44617V1.34834C12.3267 1.04646 12.1256 0.801554 11.8775 0.800995Z"
                                  fill="#194D79"
                                />
                              </svg>
                            </button>

                            <span>
                              <h2>Facebook</h2>
                              <h3>{userdata.Contact ? userdata.Contact.facebook: ''}</h3>
                            </span>
                          </div>

                      </div>
          
                      </div>
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Recommend</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah">
                        <Newslettersidesd />
                       
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </div>
          </TabPanel>
        </div>
      </Tabs>

     

      <div>

      <Footerah />

      </div>
      </div>
       }
      
    </>
  );
};

export default KABC2;
