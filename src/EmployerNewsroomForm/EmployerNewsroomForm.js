//NEWS ROOM REGISTER

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { baseurl } from "../baseurl";
import { toast, ToastContainer } from "react-toastify";

const EmployerNewsroomForm = ({ }) => {

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscription: '',
     authtype: 'Employee',
     type:'Newsroom',
     stationtype:''
  });

  


  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, type, stationtype } = formData;

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
      setError('');
    } catch (err) {
      console.error('Error:', err);
      setError('Server Error');
      toast.error("Email or Station Type are not correct!")

    }
  };
 

  return (
    <div className="employer-register-form">
      <ToastContainer/>
       {message && <Alert variant="success">{message}</Alert>}
       {error && <Alert variant="danger">{error}</Alert>}
      <form>
        <Row>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="username">Station's name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type your username"
                value={formData.username}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
          <Col lg={6}>
          <div className="employer-inputfield employerregister-field">
            <label htmlFor="stationtype">Station type</label>
            <select
              name="stationtype"
              id="stationtype"
              value={formData.stationtype}
              onChange={handleFormDataChange}
            >
              <option value="">Select station type</option>
              <option value="Tv News">Tv News</option>
              <option value="Radio">Radio</option>
              <option value="Publications">Publications</option>
              <option value="Podcasts">Podcasts</option>
              <option value="Youtube">Youtube</option>


             
            </select>
          </div>

          </Col>
          <Col lg={12}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                value={formData.email}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                value={formData.password}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="employer-inputfield employerregister-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleFormDataChange}
              />
            </div>
          </Col>
        
          <Col lg={12}>
            <div className="employer-choose-subscription">
              <h6>Choose subscription</h6>
              <div className="free-subscribe-four">
                <div
                  className="employer-subscription"
                  onClick={() => handleFormDataChange({ target: { name: 'subscription', value: '1 month' } })}
                >
                  <h5>1 Month</h5>
                  <h6>subscription</h6>
                  <span>$34.95/m</span>
                </div>
                <div
                  className="employer-subscription"
                  onClick={() => handleFormDataChange({ target: { name: 'subscription', value: '2 months' } })}
                >
                  <h5>2 Months</h5>
                  <h6>subscription</h6>
                  <span>$19.95/m</span>
                  <h3 className='employer-save'>Save 30%</h3>
                </div>
                <div
                  className="employer-subscription"
                  onClick={() => handleFormDataChange({ target: { name: 'subscription', value: '6 months' } })}
                >
                  <h5>6 Months</h5>
                  <h6>subscription</h6>
                  <span>$9.95/m</span>
                  <h3 className='employer-save'>Save 40%</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} className='text-left'>
          <div className="employer-register-btn">
                      <a
                        href="#"
                        onClick={handleSubmit}
                      >
                        Register
                      </a>
                      <div className="employer-input-checkbox">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check">Terms & conditions</label>
                      </div>
                    </div>
                    </Col>
          <input
                type="hidden"
                name="type"
                id="type"
                placeholder="Type"
                value={formData.type || 'Newsroom'}
                onChange={handleFormDataChange}
              />
        </Row>
      </form>
    </div>
  );
};

export default EmployerNewsroomForm;
