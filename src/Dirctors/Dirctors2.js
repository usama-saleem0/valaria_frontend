import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../baseurl";
import Past from '../img/Past-1.png'; // Adjust the imports as needed
import Past2 from '../img/Past-2.png';
import Past3 from '../img/Past-3.png';
import { Modal } from "react-bootstrap";
import DirectorPopup from "../Popups/Station_profile_popups/Newsdirector_h";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const Dirctors2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();


  const [directordata, setdirectorsUser] = useState({});



  const ongetdirector = () => {
    console.log("Checking for new directors");

    const directorUser = localStorage.getItem("directorUser");
    if (directorUser) {
      const alphadirector = JSON.parse(directorUser);
      setdirectorsUser((prevDirectors) => [...prevDirectors, alphadirector]);
    }

    console.log('Updated Directors', directordata);
  };
  window.addEventListener('storage', ongetdirector);  // Real-time listening


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


  const [userdata, setUser] = useState({});
  const [DirectorData, setDirectorData] = useState([]);

  useEffect(() => {
    const storedUsers = getUserFromLocalStorage();

    const fetchDirectorData = async () => {
      try {
        const response = await axios.get(`${baseurl}/newsdirectordatahome/${storedUsers.id}`);

        const sortedDirectorData = response.data.sort((a, b) => {
          return b.isCurrentDirector - a.isCurrentDirector;
        });


        // setDirectorData(response.data);
        setDirectorData(sortedDirectorData);
      } catch (err) {
        console.error("Error fetching Director data:", err);
      }
    };

    fetchDirectorData();
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user, userdata);
      // setUser(user)

      fetchUserData(id);
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


  const usersetting = (director) => navigate(`/kabc/${director.id}`);

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
          <DirectorPopup onCancel={handleClose} ongetdirector={ongetdirector}/>
        </Modal.Body>
      </Modal>





      <div className="About-main-card-1-ah">
        <span className="edite">
          <h2>News Directors</h2>
          <span className="edite-icon">

            <div onClick={handleSelectChange}>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
              </svg>
            </div>
          </span>
        </span>



        <div className="Brooklyn-Simmons-box">
          {DirectorData.map((director, index) => (



            <div key={index} className="Brooklyn-Simmons-card" >
              {
                director.verified_account == 0 ?

                  <div className="notapproved" style={{ fontSize: '12px' }}>

                    New Director is under review. Once approved by the administrator, you'll see uploaded News Director

                  </div>


                  :
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>


                    <div className="Brooklyn-Simmons-logo-div">
                      <div className="Brooklyn-Simmons-logo">
                        {/* <img src={director.status === "current" ? Past : (index % 2 === 0 ? Past2 : Past3)} alt="Director" /> */}
                        <img src={director.image} alt="Director" />
                      </div>
                      <div className="Brooklyn-Simmons-tital">
                        <span>
                          <p>News Director</p>
                          <a href="#" style={{
                            backgroundColor: director.isCurrentDirector ? '#89c400' : '#f2f2f2',
                            color: director.isCurrentDirector ? '#fff' : '#828282'
                          }}>

                            {director.isCurrentDirector ? "Current" : "Past"}
                          </a>
                        </span>
                        <h2>{director.name}</h2>
                      </div>
                    </div>
                    <button onClick={() => usersetting(director)}>See Details</button>


                  </div>
              }

            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Dirctors2;


