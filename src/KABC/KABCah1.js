import React, { useEffect, useState } from "react";
import "../css/App.css";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Experience from "../Popups/Profile_popups/Experience_h";
import Skill from "../Popups/Profile_popups/Skills_h";
import Education from "../Popups/Profile_popups/Education_h";
import { FaPlusCircle } from "react-icons/fa";
import admin from "../img/admin.png";
import kabc from "../img/kabc.png";
import Award from "../Award/Award";
import Dirctors from "../Dirctors/Dirctors";
import Openings from "../Openings/Openings";
import Cardah from "../Cardah/Cardah";
import About1 from "../About/About1";
import Aboutah1 from "../About/Aboutah1";
import Experianceah from "../Experianceah/Experianceah";
import Skillsah from "../Skills/Skillsah";
import Educationah from "../Educationah/Educationah";
import Aboutah2 from "../About/Aboutah2";
import Experianceah1 from "../Experianceah/Experianceah1";
import Skillsah1 from "../Skills/Skillsah1";
import Educationah1 from "../Educationah/Educationah1";
import Filter from "../Filter/Filter";
import Reportersd from "../reportersd/Reportersd";
import Cardah2 from "../Cardah/Cardah2";
import Cardah3 from "../Cardah/Cardah3";
import Scheduleah from "../Scheduleah/Scheduleah";
import Stationsnaw from "../Stationsah/Stationsnaw";
import Footerah from "../footerah/Footerah";
import { Container } from "react-bootstrap";
import Header1 from "../Header/Header2";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import { baseurl } from "../baseurl";
import Abouth from "../Popups/Profile_popups/About_h";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";

const Kabcah1 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = (e) => {
    setShowModal(false);
  };


  const [activeTab, setActiveTab] = useState("ratings"); // State to track active tab
  const [sortOrder, setSortOrder] = useState("newest");

  const [jobTypeFilter, setJobTypeFilter] = useState('');



  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update the active tab (ratings or jobs)
  };


  const handleCallbackCLoseAboutPopup = (e) => {
    console.log(e, "AHTI");
    setSelectedOption("");
  };

  const navigate = useNavigate();
  const usersetting = () => navigate("/accountsettingh");
  const [userdata, setUser] = useState({});
  const [aboutContent, setAboutContent] = useState("");
  const [experienceContent, setExperinceContent] = useState("");

  const [skillContent, setSkillContent] = useState([]);
  // const [educationContent, setEducationContent] = useState([]);

  const [educationContent, setEducationContent] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user, userdata);
      // setUser(user)

      fetchUserData(user.id);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getuserdata/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSelectChange = (option) => {
    console.log(option, "TSsssssss");
    setSelectedOption(option);
    setShowModal(true);
    setIsOpen(false);
  };

  const getLocal = () => {
    console.log("achiveo");
    const storedUser = localStorage.getItem("userData");
    const user = JSON.parse(storedUser);

    setAboutContent(user.about);
    console.log("here", aboutContent);
    console.log("here", aboutContent);
  };

  const getExperinces = () => {
    console.log("achiveo");
    const storedUsers = localStorage.getItem("experienceData");
    const experience = JSON.parse(storedUsers);

    setExperinceContent(experience);
    console.log("here", aboutContent);
  };
  const getSkills = () => {
    console.log("achiveoaa");
    const storedUserskills = localStorage.getItem("skillData");
    const Skill = JSON.parse(storedUserskills);

    setSkillContent(Skill);
    console.log("here", experienceContent);
  };


  const getEdu = () => {
    console.log("achiveoaa");
    const storedUsereducation = localStorage.getItem("educationData");
    const Educate = JSON.parse(storedUsereducation);

    setEducationContent(Educate);
    console.log("here", experienceContent);
  };

  const getEducation = () => {
    console.log("achiveo");
    const storedUsersEducation = localStorage.getItem("eeducationData");
    const Education = JSON.parse(storedUsersEducation);

    setEducationContent(Education);
    console.log("here", skillContent);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOption(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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




  const sortSubscribedArticles = (articles) => {
    return articles.sort((a, b) => {
      const dateA = new Date(a.createdAt);  // Use createdAt for sorting
      const dateB = new Date(b.createdAt);
  
      if (sortOrder === 'Newest') {
        return dateB - dateA;  // Sort by newest first
      } else {
        return dateA - dateB;  // Sort by oldest first
      }
    });
  };





  



  return (
    <>
      <ToastContainer />

      <Header1 />
      <Tabs>
        <section class="KABC-ah">
          <Container>
            <div class="main-KABC-ah ah-spas">
              <div class="KABC-box-ah">
                <div class="KABC-part-1-ah">
                  <div class="KABC-logo-ah">
                    <img
                      src={
                        userdata.Profile && userdata.Profile.image
                          ? userdata.Profile.image
                          : admin
                      }
                      alt=""
                    />
                    <button>Subscribed</button>
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
                    <p>
                      {userdata.Profile
                        ? userdata.Profile.jobTitle
                        : "Add Your Position"}
                      {/* News Director at <span>KABC</span> */}
                    </p>
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
                      <p>
                        {userdata.Profile
                          ? userdata.Profile.address
                          : "Add Your Address"}
                      </p>
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
                          d="M8.67686 0.369019C9.14554 0.40041 9.50174 0.601315 9.79544 0.952899C10.4141 1.69374 11.214 2.07043 12.1826 2.03904C13.0762 2.00765 13.8011 1.62468 14.3697 0.934064C14.6822 0.557367 15.0696 0.369019 15.5571 0.40041C15.6945 0.406688 15.8383 0.444358 15.9633 0.488306C17.1631 0.927786 18.2504 1.56189 19.2315 2.38435C19.7314 2.80499 19.8627 3.35748 19.6377 4.0167C19.0503 5.71812 20.0126 7.4886 21.7561 7.89668C21.8561 7.9218 21.9561 7.93435 22.0561 7.95947C22.631 8.08503 23.0309 8.50568 23.1434 9.08328C23.3871 10.3766 23.3809 11.6637 23.1372 12.957C23.0247 13.5723 22.5685 14.018 21.9436 14.1185C19.9626 14.4387 18.9066 16.2594 19.6002 18.1491C19.8314 18.777 19.6752 19.3608 19.1565 19.794C18.2879 20.5098 17.338 21.0811 16.2945 21.5143C15.6196 21.7905 15.0259 21.6399 14.5635 21.0685C13.3886 19.6057 11.3015 19.5115 10.0704 20.8676C9.97042 20.9744 9.88293 21.0999 9.79544 21.2129C9.408 21.7026 8.80809 21.8847 8.22068 21.665C7.00212 21.2192 5.90853 20.5851 4.92118 19.7564C4.44001 19.3483 4.31502 18.733 4.57748 18.1115C4.93368 17.2576 4.92743 16.4163 4.50874 15.5939C4.05256 14.6961 3.30893 14.1687 2.31533 14.018C1.47171 13.8924 1.07177 13.5158 0.940537 12.6745C0.746816 11.4376 0.78431 10.2071 1.02177 8.98283C1.153 8.32361 1.60919 7.91552 2.29658 7.82762C3.85884 7.62044 4.95243 6.35223 4.88369 4.78265C4.87119 4.46874 4.7837 4.14855 4.68997 3.84719C4.465 3.16913 4.62123 2.59153 5.18364 2.15205C6.08976 1.44888 7.07711 0.890116 8.15819 0.494584C8.32067 0.431801 8.50189 0.412967 8.67686 0.369019ZM12.0763 14.8279C14.1448 14.8279 15.8195 13.1391 15.8195 11.0484C15.8195 8.99539 14.1323 7.30653 12.0888 7.30653C10.0142 7.30653 8.32692 8.97655 8.32067 11.0358C8.31442 13.1328 9.98916 14.8216 12.0763 14.8279Z"
                          fill="white"
                        />
                      </svg>
                      Account settings
                    </button>
                  </span>

                  <span class="See">
                    <button
                      className="Contact-ah more"
                      onClick={toggleDropdown}
                    >
                      <FaPlusCircle /> Add profile section
                    </button>
                    {isOpen && (
                      <ul className="add_profile_ul">
                        <li onClick={() => handleSelectChange("about")}>
                          <FaPlusCircle /> Add About
                        </li>
                        <li onClick={() => handleSelectChange("experience")}>
                          <FaPlusCircle /> Add Experience
                        </li>
                        <li onClick={() => handleSelectChange("skill")}>
                          <FaPlusCircle /> Add Skill
                        </li>
                        <li onClick={() => handleSelectChange("education")}>
                          <FaPlusCircle /> Add Education
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
                      <Modal.Body>
                        {/* Render differ ent components based on selected option */}
                        {selectedOption === "experience" && (
                          <Experience
                            onCancel={closePopup}
                            onSuccess={getExperinces}
                          />
                        )}
                        {selectedOption === "skill" && (
                          <Skill onCancel={closePopup}
                            onSuccess={getSkills}
                          />
                        )}
                        {selectedOption === "education" && (
                          <Education onCancel={closePopup} onSuccess={getEdu} />
                        )}
                        {selectedOption === "about" && (
                          <Abouth
                            onCancel={closePopup}
                            ts={handleCallbackCLoseAboutPopup}
                            onSuccess={getLocal}
                          />
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
                    <div class="navtab" data-target="ratings" onClick={() => handleTabChange("ratings")}>
                      My ratings
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div class="navtab" data-target="Statistic" onClick={() => handleTabChange("jobs")}>
                      Applied job
                    </div>
                  </Tab>
                  <Tab>
                    <div class="navtab" data-target="Contact">
                      Contact Info
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div class="navtab" data-target="Posteds" onClick={() => handleTabChange("SubscribedNews")}>
                      Subscribed News
                    </div>
                  </Tab>
                  <Tab>
                    <div class="navtab" data-target="Posted">
                      Saved
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
            <div id="Profile" class="content active">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <Aboutah2
                        onSuccess={getLocal}
                        aboutContent={aboutContent}
                      />
                      <Experianceah1 experienceContent={experienceContent} />
                      <Skillsah1 skillContent={skillContent} />
                      <Educationah1 educationContent={educationContent} />
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Job Openings</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah   button-box">
                        <Cardah2 />
                      </div>
                      <div class="About-main-box-2-tital-ah">
                        <h2>Newsletter</h2>
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

          <TabPanel>
            <div id="ratings" class="content active ">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <Filter activeTab={activeTab} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
                    

                      <Reportersd sortOrder={sortOrder} />
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Job Openings</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah   button-box">
                        <Cardah2 />


                      </div>

                      <div class="About-main-box-2-tital-ah">
                        <h2>Newsletter</h2>
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
                    </div>
                  </div>
                </Container>
              </section>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="Statistic" class="content active">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <Filter activeTab="Statistic" sortOrder={sortOrder} setSortOrder={setSortOrder}  setJobTypeFilter={setJobTypeFilter} jobTypeFilter={jobTypeFilter}/>
                      <Cardah3 sortOrder={sortOrder} setSortOrder={setSortOrder} setJobTypeFilter={setJobTypeFilter} jobTypeFilter={jobTypeFilter}/>
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Job Openings</h2>
                        <a href="#  ">See all</a>
                      </div>

                      <div class="Recommend-box-ah   button-box">
                        <Cardah2 />

                      </div>

                      <div class="About-main-box-2-tital-ah">
                        <h2>Newsletter</h2>
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

          <TabPanel>
            <div id="Contact" class="content active ">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <div class="About-main-card-1-ah">
                        <span class="edite">
                          <h2>{userdata.username}</h2>

                          <span class="edite-icon">
                            {/* <svg
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
                            </svg> */}
                          </span>
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
                              <h3>
                                {userdata.Contact ? userdata.Contact.phone : ""}
                              </h3>
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
                              <h3>
                                {userdata.Contact
                                  ? userdata.Contact.website
                                  : ""}
                              </h3>
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
                              <h3>
                                {userdata.Contact
                                  ? userdata.Contact.linkedin
                                  : ""}
                              </h3>
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
                              <h3>
                                {userdata.Contact
                                  ? userdata.Contact.twitter
                                  : ""}
                              </h3>
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
                              <h3>
                                {userdata.Contact
                                  ? userdata.Contact.facebook
                                  : ""}
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Job Openings</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah   button-box">
                        <Cardah2 />

                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </div>
          </TabPanel>

          <TabPanel>
            <div id="Posteds" class="content active ">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <Filter  activeTab={activeTab} sortOrder={sortOrder} setSortOrder={setSortOrder} />
                      <Scheduleah sortSubscribedArticles={sortSubscribedArticles} />

                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Job Openings</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah   button-box">
                        <Cardah2 />

                      </div>

                      <div class="About-main-box-2-tital-ah">
                        <h2>Newsletter</h2>
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

          <TabPanel>
            <div id="Posted" class="content active">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                      <Stationsnaw />
                      <Scheduleah sortSubscribedArticles={sortSubscribedArticles} />

                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Job Openings</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah   button-box">
                        <Cardah2 />
                      </div>

                      <div class="About-main-box-2-tital-ah">
                        <h2>Newsletter</h2>
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
      <Footerah />
    </>
  );
};

export default Kabcah1;
