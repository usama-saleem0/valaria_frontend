import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { RiVerifiedBadgeFill, RiMore2Fill } from 'react-icons/ri';
import { Container, Row, Col, Button } from 'react-bootstrap';
import rmsabc from "../img/job-comp-logo.jpg"
import axios from 'axios';
import { baseurl } from '../baseurl';


const SeeProfileBox = () => {

    const navigate = useNavigate()
    const seeprofile = (e) => {


        localStorage.setItem('stationData', JSON.stringify(e));
        navigate("/seeprofile");
      };


      const [stationData, setstationData] = useState([]);

      useEffect(() => {
        fetchStationData();
      }, []);
    
    
      const fetchStationData = async () => {

        const isQuery = localStorage.getItem("isQuery");
       
          const query = JSON.parse(isQuery);
          console.log('hello', query);

        if(query !== null){

        
             
        try {
          // const response = await axios.get(`${baseurl}/getstation`);
          const response = await axios.post(`${baseurl}/getstationbyquery`, { query });
          console.log("xxxxx", response.data);
          setstationData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      else{

    


          
        try {
          const response = await axios.get(`${baseurl}/getstation`);
          console.log("xxxxx", response.data);
          setstationData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      };
    


  return (
    <>
     <div className='rms-profile-box'>


     {stationData.map((station, index) => (

        <Row>
            <Col lg={8}>
                <div className="rms-profile-logo-box">
                    <div className='rms-abc-logo'>
                        <img src={rmsabc} alt="img" />
                    </div>
                    <div className='rms-kabc-txt'>
                        <h3>{station.username} <RiVerifiedBadgeFill /></h3>
                        <h6>{station.stationtype}   |  {station.AboutNew ? station.AboutNew.Address:''}</h6>
                        <div className='rms-kabc-btn'>
                            <a onClick={() =>seeprofile(station)} className='themedark'>See Profile</a>
                            <a onClick={() =>seeprofile(station)} className='themelight'>See Ratings</a>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='rms-rating-review'>
                    <p><span>4.5</span> Ratings | 95 reviews</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
                        <rect x="0.903564" y="0.9375" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
                        <rect x="42.6974" y="0.9375" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
                        <rect x="84.4912" y="0.9375" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
                        <rect x="126.285" y="0.9375" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
                        <rect x="168.079" y="0.9375" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2"/>
                    </svg>
                </div>
            </Col>
            <hr className='padding-hr'/>
        </Row>

     ))}
      
        {/* <div className="rms-dots-icon">
            <span><RiMore2Fill /></span>
        </div> */}
        </div>
    </>
  )
}

export default SeeProfileBox