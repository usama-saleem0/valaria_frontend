import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseurl } from '../baseurl';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const NewsDirectorCard = ({ directors }) => {
    const navigate = useNavigate();

    

    const seeprofile = (e) => {
        localStorage.setItem('stationData', JSON.stringify(e));
        navigate("/NewsDirector_Info");
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
            {directors.map((director, index) => (<div className="news-director-card">
                <Row>
                    <Col lg={8}>
                        <div className="news-director-user-card">
                            <img src={director.image} alt="img" />
                            <div className="news-director-card-txt">
                                <h5>{director.name}</h5>
                                <p>{director.designation}<span>{director.company}</span></p>
                            </div>
                        </div>                       
                    </Col>
                    <Col lg={4}>
                        <div className="news-director-detail-btn">
                        <a onClick={() =>seeprofile(director)} className='themedark'>See Details</a>
                        </div>
                    </Col>
                </Row>
            </div>))}
        </>
    )
}

export default NewsDirectorCard