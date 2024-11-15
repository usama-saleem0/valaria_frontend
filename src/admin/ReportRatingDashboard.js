import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png";
import { RiThumbUpFill, RiFlagFill } from "react-icons/ri";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Reportersdalladmin from "../reportersd/Reportersdalladmin";
import Reportersallrating from "../reportersd/Reportersallrating";

const ReportRatingDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const [isSearchByName, setIsSearchByName] = useState(false);

  const toggleSearchMode = () => {
    setIsSearchByName(!isSearchByName);
  };

  return (
    <>
      <section className="ah1">
        <Row>
          <Col lg={12}>
            <div className="dashboard_product_head reported-rating-border">
              <h2>Reported Rating</h2>
              <p>Neque ut amet habitasse donec sed vitae massa.</p>
              <div className="dashboard_addnewprod">
                <Row>
                  <Col lg={5} className="p-0">
                    <div className="ignore_delete_btns">
                      <a href="#" className="ignore_all">
                        Ignore all
                      </a>
                      <a href="#" className="delete_all">
                        Delete all
                      </a>
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="dashprod_filter_box dashprod-sort">
                      <div className="dashfilter-stock">
                        <div className="dashfilter-select-box">
                          <label htmlFor="">Sort:</label>
                          <select name="" id="">
                            <option value="">Newest</option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
          <br/>
         <Reportersallrating/>
            {/* <div className="dashreport_rating_box">
              <h1>
                Username001 <span>report this</span> rating.
              </h1>
              <div className="dashrepoting_rating_box">
                <div class="latest-rating-box">
                  <div class="latest-rating-user-verified">
                    <div class="rating-user-box">
                      <img src={Latestuserratingicon} alt="" />
                      <div class="latest-rating-user-txt">
                        <h5>Reporter | MMJ (OMB)</h5>
                        <div className="jobdetail-click-btn">
                          <h6 onClick={toggleDetails}>
                            Job details{" "}
                            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                          </h6>
                          {isOpen && (
                            <div className="job-details">
                              <div className="job-detail">
                                <span>Yearly salary</span>
                                <p>+$100,000</p>
                              </div>
                              <div className="job-detail">
                                <span>Contract</span>
                                <p>3 years</p>
                              </div>
                              <div className="job-detail">
                                <span>Paired with a photog</span>
                                <p>When Necessary</p>
                              </div>
                              <div className="job-detail">
                                <span>Station market rank</span>
                                <p>Between #1-2</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="verified-rating-box">
                      <h6>
                        <span class="rating-of">Rating of</span>
                      </h6>
                      <div class="karc-txt-logo">
                        <img src={karbabclogo} alt="" />
                        <h4>KABC</h4>
                      </div>
                    </div>
                  </div>
                  <div class="review-news-director review-news-director-second">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="reporter-topline">
                          <hr />
                        </div>
                      </div>
                      <div class="col-lg-4 p-0">
                        <div class="director-urer">
                          <img src={reviewdirectorimg} alt="" />
                          <div class="director-name-txt">
                            <div class="news-director-current">
                              <h5>News Director</h5>
                              <a href="#">Current</a>
                            </div>
                            <h3>Brooklyn Simmons</h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="review-director-para">
                          <h6>Review of News Director</h6>
                          <h5>
                            Nice guy, but lacks decisiveness, leadership, and
                            aggressiveness.
                          </h5>
                          <p>
                            Eu elementum pellentesque nibh molestie. Tempor
                            purus sed pellentesque integer non. Nec sed tortor
                            nec quis tempor diam non turpis. Sed venenatis at
                            montes, leo tellus egestas. Nulla pharetra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="racial-discrimination">
                    <h6>While working here, this person experienced</h6>
                    <p>
                      Sexual discrimination, Racial discrimination, Sexual
                      harassment, An overall work environment
                    </p>
                  </div>
                  <div class="racial-discrimination">
                    <h6>Additional comments</h6>
                    <p>
                      One of the best places you could ever work. Very relaxed
                      environment.
                    </p>
                    <h5>
                      Everyone is the best at what they do. Management is great.
                      No complaints. Eu pellentesque nibh...{" "}
                      <a href="#">see more</a>
                    </h5>
                  </div>
                  <div class="newroom-coworker-box">
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <div class="newroom-coworker-txt">
                          <h6>Newsroom rating</h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="203"
                            height="14"
                            viewBox="0 0 203 14"
                            fill="none"
                          >
                            <rect
                              x="0.148438"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="41.9414"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="83.7363"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="125.529"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="167.324"
                              y="0.888672"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#F2F2F2"
                            />
                          </svg>
                          <h5>This newsroom is friendly</h5>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="newroom-coworker-txt">
                          <h6>Coworkers rating</h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="203"
                            height="14"
                            viewBox="0 0 203 14"
                            fill="none"
                          >
                            <rect
                              x="0.164185"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="41.9572"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="83.7521"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="125.545"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="167.34"
                              y="0.888674"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                          </svg>
                          <h5>Super friendly</h5>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <div class="newroom-coworker-txt">
                          <h6>Would recommend working here?</h6>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="203"
                            height="14"
                            viewBox="0 0 203 14"
                            fill="none"
                          >
                            <rect
                              x="0.179932"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="41.9729"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="83.7678"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#89C400"
                            />
                            <rect
                              x="125.561"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#F2F2F2"
                            />
                            <rect
                              x="167.356"
                              y="0.158203"
                              width="34.7061"
                              height="12.9881"
                              rx="6.49406"
                              fill="#F2F2F2"
                            />
                          </svg>
                          <h5>I'm not sure</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="four-select-tab">
                    <h5>Tags:</h5>
                    <ul>
                      <li>
                        <a href="">Organized</a>
                      </li>
                      <li>
                        <a href="">Positive</a>
                      </li>
                      <li>
                        <a href="">Fun</a>
                      </li>
                    </ul>
                  </div>
                  <div className="report_ratingigdel_btn">
                    <a href="#" className="ignore_all">
                      Ignore
                    </a>
                    <a href="#" className="delete_all">
                      Delete
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="26"
                        viewBox="0 0 7 26"
                        fill="none"
                      >
                        <circle
                          cx="3.42105"
                          cy="3.42105"
                          r="3.42105"
                          fill="#828282"
                        />
                        <circle
                          cx="3.42105"
                          cy="13"
                          r="3.42105"
                          fill="#828282"
                        />
                        <circle
                          cx="3.42105"
                          cy="22.5789"
                          r="3.42105"
                          fill="#828282"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ReportRatingDashboard;
