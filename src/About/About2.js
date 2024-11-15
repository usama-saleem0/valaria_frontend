import React, { useState, useEffect } from 'react';
import kabc from '../img/kabc.png'
import axios from "axios";
import { baseurl } from '../baseurl';
import { Modal } from "react-bootstrap";
import StationAboutPopup from "../Popups/Station_profile_popups/Stationabout_h";





const About2 = ( ) => {
  const [aboutData, setAboutData] = useState({});


  
  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const storedUser = getUserFromLocalStorage();
        if (storedUser) {
          const userId = storedUser.id;
          const response = await axios.get(`${baseurl}/getabout/${userId}`);
          setAboutData(response.data);
        }
      } catch (err) {
       
      }
    };

    fetchAboutData();
  }, []);


  const [aboutsdatas, setAboutsUser] = useState({});

  const ongetabout = () => {
      const aboutUser = localStorage.getItem("aboutData");
      const alpha = JSON.parse(aboutUser);
      setAboutsUser(alpha);
      console.log("Updated aboutsdatas:", alpha);
  };


  console.log(aboutsdatas)
  return (

    <>


<Modal
        show={showModal}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <StationAboutPopup onCancel={handleClose}  onSucess={ongetabout}   />
        </Modal.Body>
      </Modal>



    <div className="About-main-card-1-ah">
      <span className="edite">
        <h2>About</h2>
       

        <div onClick={handleSelectChange}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
              </svg>
</div>
      </span>
      <div >
        <p>{aboutsdatas.About ? aboutsdatas.About : aboutData.About}</p>

        <hr />
        <div className="Industry-ah">
          <span>
            <h2>Industry</h2>
            <p>{aboutsdatas.Industry ? aboutsdatas.Industry : aboutData.Industry}</p>
          </span>
          <span>
            <h2>Station Address</h2>
            <p>{aboutsdatas.Address ? aboutsdatas.Address : aboutData.Address}</p>
          </span>
        </div>
      </div>


    </div>
    </>
  );
};
export default About2