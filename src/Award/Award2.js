import React, { useState, useEffect } from "react";
import axios from "axios";

import { baseurl } from "../baseurl";
import AwardPopup from "../Popups/Station_profile_popups/Award_h";
import Awards from '../img/Award2022.png'
import { Modal } from "react-bootstrap";



const Award2 = () => {
    const [AwardData, setAwardData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [awardsdata, setawardsUser] = useState({});


    


    const ongetaward = () => {
        console.log("Checking for new awards");
    
        const AwardUser = localStorage.getItem("newsAwardData");
        if (AwardUser) {
          const alphaaward = JSON.parse(AwardUser);
          setAwardData((prevAwards) => [...prevAwards, alphaaward]);
        }
    
        console.log("Updated awards", AwardData);
      };
       // Check for updates in localStorage every time a new award is submitted
    window.addEventListener('storage', ongetaward);  // Real-time listening

    const handleSelectChange = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const [ShowAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    useEffect(() => {
        const fetchAwardData = async () => {
            try {
                const response = await axios.get(`${baseurl}/newsawarddata`);
                setAwardData(response.data);
            } catch (err) {
                console.error("Error fetching Director data:", err);
            }
        };

        fetchAwardData();
    }, []);

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
                    <AwardPopup onCancel={handleClose} ongetaward={ongetaward }/>
                </Modal.Body>
            </Modal>

   

            <div class="About-main-card-1-ah">
                <span class="edite">
                    <h2>Award</h2>
                    <span class="edite-icon">
                    <div onClick={handleSelectChange}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
                        </svg>
                        </div>
                    </span>
                </span>
                <div class="Award-box-ah">

                    {(ShowAll ? AwardData : AwardData.slice(0, 3)).map((award, index) => (

                        <div key={index} class="Award-card-ah">
                            <div class="Award-box-logo-ah">
                                <img src={award.image} alt="" />
                            </div>

                            <div class="Award-box-tital-ah">
                                <h2>{award.title}</h2>
                                <p>{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                      
            {!ShowAll && AwardData.length > 3 && (
                <div class="Award-a" onClick={handleShowAll}>
                    <a href="#">{AwardData.length -3 }+ more</a>
                </div>
                )}
                
            </div>
        </>

    )




}



export default Award2
