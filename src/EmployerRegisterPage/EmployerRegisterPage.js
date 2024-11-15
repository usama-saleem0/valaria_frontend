import React, { useState } from "react";
import { Tabs, Alert } from "flowbite-react";
import { Col, Container, Row } from "react-bootstrap";
import employerratemystation from "../img/employer-ratemy-station.png";
import EmployerRegisterForm from "../EmployerRegisterForm/EmployerRegisterForm";
import EmployerNewsroomForm from "../EmployerNewsroomForm/EmployerNewsroomForm";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { baseurl } from "../baseurl";

const EmployerRegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscription: '',
     authtype: 'Employee',
     type:''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const subsribe = () => navigate("/subscription");

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleTabChange = (tabName) => {
    setFormData((prevData) => ({
      ...prevData,
      authtype: tabName
    }));
  };


  
 

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, stationtype , type} = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/signup`, {
         
        username,
        email,
        password,
        type,
        stationtype
      });

      setMessage('User created successfully');
      // Optionally, clear the form or redirect the user
      setFormData({
        username: '',
        email: '',  
        password: '',
        confirmPassword: '',
        subscription: 'free',
        type:''
      });
     navigate('/employerlogin')
      setError('');
    } catch (err) {
      console.error('Error:', err);
      setError('Server Error');
    }
  };


  const employerlogin = () => {
    navigate("/employerlogin");
  };


 
  return (
    <>
      <Header />
      <section className="employer-login-pg-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="employer-login-box">
                <Row>
                  <Col lg={6} className="p-0">
                    <div className="rating-real-journalist">
                      <img src={employerratemystation} alt="" />
                      <h3>Find thousands of Ratings from real Journalists</h3>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="employer-newroom-box">
                    <Tabs
                        aria-label="Pills"
                        style="pills"
                                              
                      >

                        <Tabs.Item active title="Employee"  onChange={() => handleTabChange('Employee')}>
                          <EmployerRegisterForm
                           
                          />
                        </Tabs.Item>
                      
                        
                        <Tabs.Item title="Newsroom" onClick={() => handleTabChange('Newsroom')} >
                          <EmployerNewsroomForm
                            
                          />
                        </Tabs.Item>
                      </Tabs>
                    </div>
                    <div className="employer-dont-have-acc">
                      <a href="#">Already registered <span onClick={employerlogin}>Sign in</span></a>
                      <a href="#">
                        This is recurring subscription that you can cancel
                        anytime. <span onClick={subsribe}>Learn more</span>
                      </a>
                    </div>
                    {/* <div className="employer-register-btn">
                      <a
                        href="#"
                        onClick={handleFormSubmit}
                      >
                        Register
                      </a>
                      <div className="employer-input-checkbox">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">Terms & conditions</label>
                      </div>
                    </div> */}
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default EmployerRegisterPage;

