import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  RiVerifiedBadgeFill,
  RiMapPinFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import Asistantnewsdirector from "../Asistantnewsdirector/Asistantnewsdirector";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import jobCompLogo from "../img/job-comp-logo.jpg";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";

const Jobopening = () => {
  const navigate = useNavigate();

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
      <Header />
      <section className="job-opening-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="job-detail-name-description">
                <Row>
                  <Col lg={8}>
                    <div className="job-detailpg-nameflex">
                      <img src={jobCompLogo} alt="Job Company Logo" />
                      <div className="job-openingpg-txt">
                        <h3>
                          KABC <RiVerifiedBadgeFill />
                        </h3>
                        <h5>TV News Station</h5>
                        <h6>
                          <RiMapPinFill /> Los Angeles, CA | DMA: 2
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="job-select-opts job-opening-btn">
                      <a href="#">See Station’s ratings</a>
                      <a href="#" className="themelight">
                        See Station’s profile
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="shop-product-search-sec">
        <Container>
          <Row>
            <Col lg={7} md={6}>
              <div className="newsletter-article-search">
                <h4>
                  Available job opening <p>(6)</p>
                </h4>
              </div>
            </Col>
            <Col lg={5} md={6}>
              <div className="filter-short-box">
                <Row>
                  <Col lg={6} md={6}>
                    <div className="filter-box">
                      <p>filter:</p>
                      <select name="" id="">
                        <option value="">Writer</option>
                        <option value="">Writer</option>
                        <option value="">Writer</option>
                      </select>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="filter-box">
                      <p>Short:</p>
                      <select name="" id="">
                        <option value="">Newest</option>
                        <option value="">Newest</option>
                        <option value="">Newest</option>
                      </select>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="assistant-news-director-box-sec">
        <Container>
          <Row>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={6}>
              <Asistantnewsdirector />
            </Col>
            <Col lg={12}>
              <div className="job-opening-hr">
              <hr />
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
          <Row>
            <Col lg={12}>
              <div className="ratemystation-allprod-btn">
                <a onClick={shop}>See All Products</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footerah />
    </>
  );
};

export default Jobopening;
