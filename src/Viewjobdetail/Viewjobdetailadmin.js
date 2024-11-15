import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  RiMapPin2Fill,
  RiMoneyDollarCircleFill,
  RiFlagFill,
  RiBookmarkFill,
  RiShareFill,
} from "react-icons/ri";
import jobCompLogo from "../img/job-comp-logo.jpg";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import axios from "axios";
import { baseurl } from "../baseurl";
import Header1 from "../Header/Header2";

const Viewjobdetailadmin = () => {
  const navigate = useNavigate();
  const [jobContent, setjobContent] = useState({});
  const [jobid, setjobId] = useState(0);

  const proddetail = () => {
    navigate("/productdetail");
  };

  const mycart = () => {
    navigate("/mycart");
  };

  const shop = () => {
    navigate("/shop");
  };

      
  useEffect(() => {
    // Retrieve user data from local storage
    const jobId = localStorage.getItem('jobId');
    console.log('job id ' , jobId)

    setjobId(jobId)



    if (jobId) {
      
      // setUser(user)  

      fetchJobData(jobId);

    }
}, []);



const fetchJobData = async (id) => {


  try{

      // const response = await axios.get(`${baseurl}/jobbyid/${id}?userId=${userId}`);
      // const response = await axios.get(`${baseurl}/jobbyid`, {
      //   params: {
      //     id: id,
      //     userId: userId
      //   }
      // });


      const response = await axios.get(`${baseurl}/jobbyadminid/${id}`);
      console.log('xxxxxssss' , response.data)
      setjobContent(response.data);

    
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  


  const appliedJob = async () => {
    try {





      
      const response = await axios.post(`${baseurl}/appliedjob ` , { jobid  });
    
      fetchJobData(jobid)
      toast.success('Applied to Job!');

    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Error!', error);

    }

  }




  const saveJob = async () => {
    try {




      
      const response = await axios.post(`${baseurl}/savejob ` , { jobid  });
      fetchJobData(jobid)
      toast.success('Applied to Job!');

      
      toast.success ('Job Saved!');
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error ('Erorr in Saving!' , error);
      
    }

  }


  return (
    <>
      {/* <Header1 /> */}
      <Header />

      <section className="view-job-detail-sec">
      <ToastContainer />
        <Container>
          <Row>
            <Col lg={12}>
              <div className="job-detail-name-description">
                <Row>
                  <Col lg={8}>
                    <div className="job-detailpg-nameflex">
                      <img src={jobCompLogo} alt="Job Company Logo" />
                      <div className="job-detailpg-txt">
                        <h3>{jobContent.jobTitle}</h3>
                        <h5>{jobContent.jobType}</h5>
                        <div className="assistant-city-dollar-time">
                          <p>
                            {/* <RiMapPin2Fill /> Los Angeles, CA */}
                            {jobContent.yearofexperience} of Experience
                          </p>
                          <p>
                            <RiMoneyDollarCircleFill /> ${jobContent.yearlySalary}
                          </p>
                          <p>
                            <RiMoneyDollarCircleFill /> Full time
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                   
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12}>
              <div className="view-job-detail-description">
                <div className="job-desceiption-detail">
                  <h3>Job Description</h3>
                  <p>
                   {jobContent.jobDescription}.
                  </p>
                
                  <hr />
                </div>
                <div className="job-qualification-detail">
                  <h4>Qualification</h4>
                  <div className="job-qualification-point">
                    <ul>
                      <li>
                        {jobContent.qualification}
                      </li>
                      
                     
                    </ul>
                    <ul>
                      <li>
                      {jobContent.qualification}
                      </li>
                     
                     
                    </ul>
                  </div>
                  <hr />
                </div>
                <div className="additional-information-job">
                  <h4>Additional Information</h4>
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="job-add-career">
                        <h6>Career Level</h6>
                        <h5>{jobContent.careerlevel}</h5>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="job-add-career">
                        <h6>Education level</h6>
                        <h5>{jobContent.educationlevel} </h5>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6}>
                      <div className="job-add-career">
                        <h6>Years of Experience</h6>
                        <h5>{jobContent.yearofexperience} year</h5>
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className="job-add-career">
                        <h6>Job Type</h6>
                        <h5>{jobContent.jobType}</h5>
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  <div className="addit-report-btn">
                    <a href="#">
                      <RiFlagFill /> Report
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ratemystation-shop-sec">
        <h4>RateMyStation's Shop</h4>
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img
                  src={ProdImage1}
                  alt="Don’t Make Me Use My News Voice Face Mask"
                />
                <img
                  className="prod-abslt-ratems"
                  src={BestsellerImage}
                  alt="Bestseller"
                />
                <div className="ratemystation-prod-txt">
                  <h3>Don’t Make Me Use My News Voice Face Mask</h3>
                  <h6>$18.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img
                  src={ProdImage2}
                  alt="America Needs Local News Sweatshirt"
                />
                <img
                  className="prod-abslt-ratems"
                  src={BestsellerImage}
                  alt="Bestseller"
                />
                <div className="ratemystation-prod-txt">
                  <h3>America Needs Local News Sweatshirt</h3>
                  <h6>$25.00 – $33.50</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage3} alt="Anonymous Source Onesie" />
                <div className="ratemystation-prod-txt">
                  <h3>Anonymous Source Onesie</h3>
                  <h6>$18.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="ratemystation-shop-prod">
                <img src={ProdImage4} alt="You Are A PKG Framed Poster" />
                <div className="ratemystation-prod-txt">
                  <h3>You Are A PKG Framed Poster</h3>
                  <h6>$26.00 – $105.00</h6>
                  <div className="ratemystation-prod-btn">
                    <a
                      onClick={proddetail}
                      variant="light"
                      className="prod-light-btn"
                    >
                      View Details
                    </a>
                    <a
                      onClick={mycart}
                      variant="dark"
                      className="prod-dark-btn"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footerah />
    </>
  );
};

export default Viewjobdetailadmin;
