import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import kabc from '../img/kabc.png'
import Education from '../img/Education-logo.png'
import { baseurl } from "../baseurl";
import Educations from '../Popups/Profile_popups/Education_h';
import { Modal } from "react-bootstrap";

const Educationah1 = ({educationContent}) => {

    console.log('edu', educationContent)


    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend when the component mounts
        const fetchData = async () => {

            const storedData = getUserFromLocalStorage();
           
            const userId = storedData.id
            
            try {
                const response = await axios.get(`${baseurl}/educationdata/${userId}`);
                setEducationData(response.data); // Set the fetched data to state
            } catch (error) {
                console.error("Error fetching education data:", error);
            }
        };

        fetchData();
    }, []);

    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
      };
    


    const [showModal, setShowModal] = useState(false);

    const handleSelectChange = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };


        const newdata = educationContent && educationContent.length > 0 ? educationContent : educationData

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
                    <Educations onCancel={handleClose}  />
                </Modal.Body>
            </Modal>

            <div class="About-main-card-1-ah">
                <span class="edite">
                    <h2>Education</h2>
                    <span class="edite-icon">
                        <div onClick={handleSelectChange}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
                            </svg>
                        </div>
                    </span>
                </span>

                <div className="Education-ah-boxing">
                    {newdata.map((education, index) => (
                        <div key={index} className="Education-card-ah">
                            <div className="Education-logo-side">
                                <div className="Education-logo">
                                    <img src={education.image || Education} alt="" />
                                </div>
                                <div className="Education-side-ah">
                                    <h2>{education.degree}</h2>
                                    <h3>{education.school}</h3>
                                    <p>
                                        {education.startMonth} {education.startYear} -{" "}
                                        {education.endMonth} {education.endYear}
                                    </p>
                                    <h4>{education.description}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}


    
export default Educationah1