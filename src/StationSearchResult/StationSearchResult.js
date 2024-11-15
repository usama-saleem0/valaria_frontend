import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SeeProfileBox from "../SeeProfileBox/SeeProfileBox";
import FindStationLookingFor from "../FindStationLookingFor/FindStationLookingFor";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import Lookingforwork from "../Lookingforwork/Lookingforwork";
import Footerah from "../footerah/Footerah";
import RmsHeader from "../Rmsheader/RmsHeader";
import { baseurl } from "../baseurl";
import axios from "axios";
import ProductsLimitedComponent from "../Shop/ProductsLimitedComponent";

const StationSearchResult = () => {
  const navigate = useNavigate();

  const [userQuery, setQuery] = useState('');


  useEffect(() => {
    // Retrieve user data from local storage
    const isQuery = localStorage.getItem("isQuery");
    if (isQuery) {
      const query = JSON.parse(isQuery);
      console.log('hello', query);
      setQuery(query)
      // setUser(user)

    
    }
  }, []);






  const proddetail = () => {
    navigate("/productdetail");
  };
  const mycart = () => {
    navigate("/mycart");
  };

  const shop = () => {
    navigate("/shop");
  };

  
  return (
    <>
      <RmsHeader />
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="station-search-result-txt">
                <h4>Here are your result for "{userQuery}"</h4>
                <p>
                  There are 12 Stations with <span>"{userQuery}"</span> on{" "}
                  <span>TV News Category</span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="search-station-sec">
        <Container>
          <Row>
            <Col lg={8}>
              <SeeProfileBox />
              
              <div className="seeprofile-box-btn">
                <a href="#">Load more</a>
              </div>
            </Col>
            <Col lg={4}>
              <FindStationLookingFor />
            </Col>
          </Row>  
          <Row>
            <Col lg={12}>
              <hr />
            </Col>
          </Row>
        </Container>
      </section>


      <section className="ratemystation-shop-sec">
        <h4 >RateMyStation's Shop</h4>

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

export default StationSearchResult;
