import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../baseurl";
import Past from '../img/Past-1.png'; // Adjust the imports as needed
import Past2 from '../img/Past-2.png';
import Past3 from '../img/Past-3.png';
import { Modal } from "react-bootstrap";
import DirectorPopup from "../Popups/Station_profile_popups/Newsdirector_h";

const Dirctors3 = () => {

  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const [DirectorData, setDirectorData] = useState([]);

  useEffect(() => {
    const fetchDirectorData = async () => {
      try {
        const response = await axios.get(`${baseurl}/newsdirectordata`);
        setDirectorData(response.data);
      } catch (err) {
        console.error("Error fetching Director data:", err);
      }
    };

    fetchDirectorData();
  }, []);


  return (
    <>





      <div className="About-main-card-1-ah">
        <span className="edite">
          <h2>News Directors</h2>
         
        </span>

        <div className="Brooklyn-Simmons-box">
          {DirectorData.map((director, index) => (
            <div key={index} className="Brooklyn-Simmons-card">
              <div className="Brooklyn-Simmons-logo-div">
                <div className="Brooklyn-Simmons-logo">
                  {/* <img src={director.status === "current" ? Past : (index % 2 === 0 ? Past2 : Past3)} alt="Director" /> */}
                  <img src={director.image} alt="Director" />
                </div>
                <div className="Brooklyn-Simmons-tital">
                  <span>
                    <p>News Director</p>
                    <a href="#">{director.status === "current" ? "Current" : "Past"}</a>
                  </span>
                  <h2>{director.name}</h2>
                </div>
              </div>
              <button>Send email</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dirctors3;


