import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Row, Col, Button } from "react-bootstrap";
import Reportersd from "../reportersd/Reportersd";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import ProdImage5 from "../img/ratemystation-prod-img-5.png";
import ProdImage6 from "../img/ratemystation-prod-img-6.png";
import ProdImage7 from "../img/ratemystation-prod-img-7.png";
import ProdImage8 from "../img/ratemystation-prod-img-8.png";
import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import Lookingforwork from "../Lookingforwork/Lookingforwork";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiSearchLine,
  RiThumbUpFill,
  RiFlagFill,
} from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import HomeSelectOption from "../Homeselectoption/HomeSelectOption";
import { baseurl } from '../baseurl';
import Chat from '../Sockets/Chats_Components/Chat';
import ProductsComponent from '../Shop/PorductsComponent';
import ProductsLimitedComponent from '../Shop/ProductsLimitedComponent';
import Reportersdall from '../reportersd/Reportersdall';

import { Typeahead } from 'react-bootstrap-typeahead';
import rmsabc from "../img/job-comp-logo.jpg";
import { RiVerifiedBadgeFill, RiMore2Fill } from 'react-icons/ri';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-typeahead/css/Typeahead.css';
// import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';

export const Homepage = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState('');
  // const searchstaion = () => navigate("/stationsearchresult");




  console.log("Screen Width", window.innerWidth)

  const newsletter = () => {
    navigate("/newsletter");
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isquery, setIsQuey] = useState('');

  const [isqueryDirector, setisqueryDirector] = useState('');

  const [selected, setSelected] = useState([]);
  const [selectedDirector, setselectedDirector] = useState([]);
  const [isQueryDirector, setIsQueryDirector] = useState('');



  const searchDirector = () => {
    localStorage.setItem('isQueryDirector', JSON.stringify(isqueryDirector));
  }


  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const [isSearchByName, setIsSearchByName] = useState(false);

  const toggleSearchMode = () => {
    setIsSearchByName(!isSearchByName);
  };

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


  const seeprofile = (e) => {
    console.log('basit', e);
    localStorage.setItem('stationData', JSON.stringify(e));
    navigate("/seeprofile");
  };

  const searchstaion = () => {
    localStorage.setItem('isQuery', JSON.stringify(isquery));
    navigate("/stationsearchresult");
  }

  // const seeDirector = (director) => {
  //   localStorage.setItem('DirectorData', JSON.stringify(director)); // Store selected director in localStorage
  //   navigate("/NewsDirector_Info"); // Redirect to the Director Info page
  // };
  


const createstation = () => {
  console.log("basit here");
  navigate("/submitstaionform");
};


  const [stationData, setstationData] = useState([]);

  useEffect(() => {
    fetchStationData();
    fetchDirectorData();

  }, []);


  const fetchStationData = async () => {

    const isQuery = localStorage.getItem("isQuery");

    const query = JSON.parse(isQuery);
    console.log('hello', query);

    if (query !== null) {



      try {
        // const response = await axios.get(`${baseurl}/getstation`);
        const response = await axios.post(`${baseurl}/getstationbyquery`, { query });
        console.log("xxxxx", response.data);
        setstationData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    else {





      try {
        const response = await axios.get(`${baseurl}/getstation`);
        console.log("xxxxx", response.data);
        setstationData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

  };



  const [DirectorData, setDirectorData] = useState([]);



  const fetchDirectorData = async () => {
    try {
      const response = await axios.get(`${baseurl}/newsdirectordatahome`);
      setDirectorData(response.data);
    } catch (err) {
      console.error("Error fetching Director data:", err);
    }
  };

  // const fetchDirectorData = async () => {

  //   const isQueryDirector = localStorage.getItem("isQueryDirector");

  //   const queryDirector = JSON.parse(isQueryDirector);
  //   console.log('hello', queryDirector);

  //   if (queryDirector !== null) {

  //     try {
  //       const response = await axios.get(`${baseurl}/newsdirectordata`);
  //       setDirectorData(response.data);
  //     } catch (err) {
  //       console.error("Error fetching Director data:", err);
  //     }
  //   }

  // };


  // const fetchDirectorData = async () => {
  //   const isQueryDirector = localStorage.getItem("isQueryDirector");
  
  //   const queryDirector = JSON.parse(isQueryDirector);
  //   console.log('hello', queryDirector);
  
  //   if (queryDirector !== null) {
  //     try {
  //       const response = await axios.post(`${baseurl}/newsdirectordata`);
  //       setDirectorData(response.data);
  //     } catch (err) {
  //       console.error("Error fetching Director data:", err);
  //     }
  //   }
  // };
  


  const seeDirector = (director) => {
    navigate(`/New1/${director.id}`); // Redirect to /New1 page with the Director_Id in query params
  };


  const createStattion = () => {
    navigate ('/submitstaionform')
  };





  return (
    <>


      <ToastContainer />

      <Header />
      <section className="first-banner-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="first-banner-txt">
                <h3>Find thousands of Ratings from real Journalists</h3>

                <div className={`search-stations-input ${isSearchByName ? 'full-width' : ''}`}>
                  {isSearchByName ? (
        <Typeahead
        id="director-search"
        onInputChange={(q) => setIsQueryDirector(q)} // Update the query based on input
        onChange={(selected) => {
          if (selected.length > 0) {
            const selectedDirector = selected[0]; // Get the selected director object
            if (selectedDirector) {
              seeDirector(selectedDirector); // Redirect to profile if director is selected
            }
          }
        }}
        options={DirectorData} // Pass the entire director data as options
        labelKey={(option) => option.username || ''} // Use username as label
        placeholder="Search for a director..."
        filterBy={(director) => {
          // Check if director name or username exists to avoid undefined errors
          const directorName = director.name ? director.name.toLowerCase() : '';
          const directorUsername = director.username ? director.username.toLowerCase() : '';
          const searchTerm = isQueryDirector.toLowerCase();
          return (
            directorName.includes(searchTerm) || directorUsername.includes(searchTerm)
          );
        }}
        renderMenuItemChildren={(director, index) => (
          <Row key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Col lg={8}>
              <div className="news-director-user-card">
                <img
                  src={director.image}
                  alt="Director Profile"
                />
                <div className="news-director-card-txt">
                  <h5>{director.name || "N/A"}</h5>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="news-director-detail-btn">
                <a onClick={() => seeDirector(director)} className='themedark'>See Details</a>
              </div>
            </Col>
          </Row>
        )}
      />
      
           

                  ) : (
                    <>
                      <HomeSelectOption />

                      {/* 
                      <Typeahead
                        id="station-search"
                        onInputChange={(q) => setIsQuey(q)}
                        onChange={(selected) => {
                          if (selected.length > 0) {
                            // seeprofile(selected);
                            const selectedStationName = selected[0];
                                  const selectedStation = stationData.find(station => station.username === selectedStationName);

                    if (selectedStation) {
                      // Store the entire station object in local storage
                      // localStorage.setItem('stationData', JSON.stringify(selectedStation));
                      
                      seeprofile(selectedStation); // Redirect to profile if station is selected
                    }
 
                          }
                        }}

                
                        options={stationData.map(station => station.username
                          
                        )} // Display station names
                        placeholder="Search for a station..."
                        selected={selected}
                       

                        emptyLabel={isquery ? (

                          <Button onClick={() => navigate('/submitstaionform')} className="submit-btn">
                            Submit a Station
                          </Button>
                          
                        ) : 'No stations found'}


                        renderMenuItemChildren={(option, props) => (
                          <div style={{ color: 'black' }}>
                            {option}
                          </div>
                        )}

                      /> */}

                      {/* FOR NEWS STARITONS */}

                      <Typeahead
                        id="station-search"
                        onInputChange={(q) => setIsQuey(q !== '')}
                        onChange={(selected) => {
                          if (selected.length > 0) {
                            const selectedStationName = selected[0];
                            const selectedStation = stationData.find(station => station.username === selectedStationName);

                            if (selectedStation) {
                              seeprofile(selectedStation); // Redirect to profile if station is selected
                            }
                          }
                        }}
                        options={stationData.map(station => station.username)} // Display station names
                        placeholder="Search for a station..."
                        selected={selected}
                        emptyLabel={isquery ? (
                          <Button className="submit-btn" onClick={createStattion}>
                             Submit a Station
                          </Button>
                        ) : 'No stations found'}

                        // Custom render for each suggestion
                        renderMenuItemChildren={(option, props) => {
                          const station = stationData.find(station => station.username === option);

                          return station ? (
                            <Row key={station.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                              <Col lg={9}>
                                <div className="rms-profile-logo-box" style={{ alignItems: 'flex-start', width: '100%' }}>
                                  <div className='rms-abc-logo' >
                                    <img src={station.logo || rmsabc} alt="station logo" style={{ width: '50px', height: '50px' }} />
                                  </div>
                                  <div className='rms-kabc-txt'>
                                    <h3>{station.username} <RiVerifiedBadgeFill /></h3>
                                  </div>

                                  
                                </div>
                              </Col>

                              <Col lg={3}>
                              <div className='rms-kabc-btn' >
                                    <a onClick={() => seeprofile(station)} className='themedark' style={{ margin: '0px' }}>See Profile</a>
                                    {/* <a onClick={() => seeprofile(station)} className='themelight' style={{ margin: '0px' }}>See Ratings</a> */}
                                  </div>
                              </Col>
                            </Row>
                          ) : null;
                        }}
                      />

                    </>
                  )}
                  <span>

                    <RiSearchLine onClick={searchstaion} />
                  </span>
                </div>



                <a href="#" onClick={toggleSearchMode}>
                  {isSearchByName ? 'Find a Station by name' : 'Find a News Director by name'}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="latest-rating-sec">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="latest-rating-txt">
                <h3>Latest Ratings</h3>
                <Reportersdall />

                {/* <div className="latest-rating-loadmore-btn">
                  <a href="#">Load more</a>
                </div> */}
              </div>
            </Col>
            <Col lg={4}>
              <div class="newsletter-side-sec">
                <div class="newsletter-side-head">
                  <h3 onClick={newsletter}>Newsletter</h3>
                  <a onClick={newsletter}>See all</a>
                </div>
                <Newslettersidesd />

                <div class="side-subscribe-box">
                  <h5 style={{ paddingBottom: '5px' }}>Subscribe to our Newsletter, so you'll never miss one</h5>
                  <input type="email" placeholder="Your email" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
                  <button onClick={handleSave}>Submit</button>
                </div>


                <div class="newsletter-follow-box">
                  <h4>Follow RMS</h4>
                  <div class="follow-us-rate">
                    <ul>
                      <li>
                        <a href="#">
                          <RiFacebookFill /> @RateMyStation{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiInstagramLine /> @RateMyStation{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiTwitterFill /> @RateMyStation{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="latesthomepg-line">
                <hr />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ratemystation-shop-sec more-x">
        <h4>RateMyStation's Shop</h4>
        <Container>
          <Row>
            <ProductsLimitedComponent />
          </Row>
        </Container>
      </section>

      <Lookingforwork />

      <Footerah />
    </>
  );
};
