import React, { useEffect, useState } from "react";

import kabc from '../img/kabc.png'
import office from '../img/office-logo.png'
import axios from "axios";
import { baseurl } from "../baseurl";
import { Modal } from "react-bootstrap";
import Experience from '../Popups/Profile_popups/Experience_h';
import EmailVerifyModal from "./VerifyEmailModal";
import EnterOtpModal from "./EnterOtpModal";

import verifyimg from "../img/verify.png"
import Experience_Director from "../Popups/Profile_popups/Experience_Director";


const Experianceah = ({ experienceContent, id, showSvg  }) => {
    const [userdata, setUser] = useState({});
    const [experiencedataContent, setExperiencedataContent] = useState([]);

    const [fetch,setfetch]=useState(false)


    console.log('exper', experienceContent)

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUser = localStorage.getItem('userData');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            console.log(user); // Adjusted to log only user data
    
            // Assuming user.id is the id for the NewsDirector
            fetchExperienceData(id);
        }
    }, [fetch]); // You might want to adjust the fetch dependency based on your requirements
    
    const fetchExperienceData = async (id) => {
        try {
            const response = await axios.get(`${baseurl}/getexperincedirector/${id}`); // Fetching by director's id
            console.log('Fetched experience data:', response.data);
            setExperiencedataContent(response.data); // Ensure this state is set properly
        } catch (error) {
            console.error('Error fetching experience data:', error);
        }
    };
    const dataToRender = experienceContent && experienceContent.length > 0 ? experienceContent : experiencedataContent;

    const calculateDuration = (startMonth, startYear, endMonth, endYear) => {
        const startDate = new Date(`${startMonth} 1, ${startYear}`);
        const endDate = endYear ? new Date(`${endMonth} 1, ${endYear}`) : new Date();
        
        const diffTime = Math.abs(endDate - startDate);
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
        
        const years = Math.floor(diffMonths / 12);
        const months = diffMonths % 12;
        
        return `${years > 0 ? `${years} year${years > 1 ? 's' : ''} ` : ''}${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`.trim();
    }

    const [showModal, setShowModal] = useState(false);

    const handleSelectChange = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const [showEmail, setShowEmail] = useState(false);
    const [empcompanyname,setempcompanyname]=useState('')
    const [Exp_ID,setExp_ID]=useState('')
    const [expEmail,setexpEmail]=useState('')


    const handleShowemail = () => setShowEmail(true);

    const handleOpenOtpModal=(email)=>{
        setShowEmail(false);
        setShowOtpModal(true)
        setexpEmail(email)

    }
    const handleCloseemail = () => 
    {
        console.log("call")
        setShowEmail(false);

      

    }
        
    const handleVerify=(id,companyname)=>{
        console.log(id)
        setShowEmail(true);
        setempcompanyname(companyname)
        setExp_ID(id)


    }

    const [showOtpModal, setShowOtpModal] = useState(false);
    // const handleCloseOtpModal = () => setShowOtpModal(false);

    const handleCloseOtpModal = () => 
        {
            console.log("call")
            // setShowEmail(false);
    
            setShowOtpModal(false)
    
        }


const HandleOtpVerified=()=>{

    setShowOtpModal(false)

    setfetch(!fetch)
}


    
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
                    <Experience_Director onCancel={handleClose}  />
                </Modal.Body>
            </Modal>

            <div class="About-main-card-1-ah">
                <span class="edite">
                    <h2>Experience</h2>

                    {showSvg && (
                    <span class="edite-icon">
                        <div onClick={handleSelectChange}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
                        </svg>
                        </div>
                    </span>
                      )}
                </span>

                {dataToRender.map((experience, index) => (
                    <div key={index}>
                        <div className="Office-ah-box">
                      
                            <div className="Office-ah-logo">
                                <img src={office} alt="" />
                            </div>

                            <div className="Office-ah-span">
                                <h2>{experience.companyName} </h2>
                                <p>{calculateDuration(experience.startMonth, experience.startYear, experience.endMonth, experience.endYear)}</p>
                            </div>

                            {/* {
                                //   experience.isVerified===0 &&
                            <button onClick={()=>handleVerify(experience.id,experience.companyName)}>
                                Verify
                            </button>

                            } */}

                           {
                                // experience.isVerified===true &&
                            <img src={verifyimg} style={{height:'50px',width:'50px'}}/>
                           }

                        </div>

                        <div className="Current-ah-job">
                            <div className="Current-ah-job-box">
                                <div className="Current-ah-job-card">
                                    <span>
                                        <h2>{experience.title} {experience.isCurrentRole && '(Current)'}</h2>
                                        <p>{experience.jobType}</p>
                                    </span>

                                    <span>
                                        <h3>{experience.startMonth} {experience.startYear} - {experience.isCurrentRole ? 'Present' : `${experience.endMonth} ${experience.endYear}`}</h3>
                                        <p>{calculateDuration(experience.startMonth, experience.startYear, experience.endMonth, experience.endYear)}</p>
                                    </span>
                                </div>
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           {
            showEmail &&

            <EmailVerifyModal  companyname={empcompanyname} handleCloseemail={handleCloseemail}  handleOpenOtpModal={handleOpenOtpModal}/>
           }


{
            showOtpModal &&

            <EnterOtpModal  companyname={empcompanyname} handleCloseemail={handleCloseOtpModal} id={Exp_ID} email={expEmail}  HandleOtpVerified={HandleOtpVerified}/>
           }

        </>
    )
}
export default Experianceah