import React, { useEffect, useState } from "react";
import { RiThumbUpFill, RiFlagFill, RiVerifiedBadgeFill } from "react-icons/ri";
import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png";
import { baseurl } from "../baseurl";
import axios from "axios";

const Reportersdall = () => {
  const [stationratings, setStationRatings] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage

    // setUser(user)

    fetchUserData();

  }, []);





  const fetchUserData = async () => {




    try {
      const response = await axios.get(`${baseurl}/getrallatings`);
      const ratings = response.data.ratings;

      console.log("ahtisahm", response.data.ratings);
      setStationRatings(ratings);

      console.log("hamza", stationratings);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [visibleCount, setVisibleCount] = useState(5);

  const loadMore = () => {
    setVisibleCount(stationratings.length); // Show all ratings
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
    return formattedDate;
  };


  return (
    <>
      {stationratings.length > 0 ? (
        // stationratings.map((data) => (
        stationratings.slice(0, visibleCount).map((data, index) => (
          <div class="latest-rating-box" key={index}>
            <div class="latest-rating-user-verified">
              <div class="rating-user-box">
                <img src={Latestuserratingicon} alt="" />
                <div class="latest-rating-user-txt">
                  <h5> {data.User.stationtype || 'Youtube'} | {data.User.username}</h5>
                  <select name="" id="">
                    <option value="">Job details</option>
                    <option value="">Lorem</option>
                    <option value="">Lorem</option>
                  </select>

                </div>
              </div>
              <div class="verified-rating-box">
                <h6>
                  <span>
                    <RiVerifiedBadgeFill />
                  </span>{" "}
                  Verified Rating <span class="rating-of">of</span>
                </h6>
                <div class="karc-txt-logo">
                  <img src={karbabclogo} alt="" />
                  <h4>KABC</h4>
                </div>
              </div>
            </div>

              <div className="col-lg-12 m-3 p-2" >
                <div className="director-urer" style={{
                  justifyContent: 'space-evenly',
                  borderRadius: '8px',
                  background: '#f2f2f2',
                  padding: '10px',
                }}>
                  <div className="year">
                    <p>Yearly Salary</p>
                    <span>+$ {data.yearlySalary} </span>
                  </div>

                  <div className="contract">
                    <p>Contract</p>
                    <span>{data.howlong} years</span>
                  </div>

                  <div className="contract">
                    <p>Paired with a photog</p>
                    <span>{data.reporters}</span>
                  </div>

                  <div className="contract">
                    <p>Station market rank</p>
                    <span>Between # {data.market}</span>
                  </div>
                </div>
              </div>


           
        
            <div class="review-news-director">

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
                      <h3>{data.currentdirector || "Brooklyn Simmons "}</h3>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="review-director-para">
                    <h6>Review of News Director</h6>
                    <h5>
                      {data.overallexperience
                        ? data.overallexperience
                        : "No Comments"}
                    </h5>
                    <p>
                      {data.aboutstation ? data.aboutstation : "No Comments"}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div class="racial-discrimination">
              <h6>While working here, this person experienced</h6>
              <p>
                {data.sexualharassment && "Sexual Harassment "}
                {data.sexualiscrimination && "Sexual Discrimination "}
                {data.racialdiscrimination && "Racial Discrimination "}
                {data.toxic && "Overall Toxic "}
              </p>
            </div>
            <div class="racial-discrimination">
              <h6>Additional comments</h6>
              <p>{data.explainmore ? data.explainmore : "No Comments"}</p>
              {/* <h5>
                Everyone is the best at what they do. Management is great. No
                complaints. Eu pellentesque nibh... <a href="#">see more</a>
              </h5> */}
            </div>
            <div class="newroom-coworker-box">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="newroom-coworker-txt">
                    <h6>Newsroom rating</h6>
                    <div className="d-flex rating--boxes--cont--h rating--boxes--cont--alt--h">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <span
                          key={index}
                          className={
                            index <= data.newsroomrating
                              ? "rating--span--active"
                              : "rating--span"
                          }
                        ></span>
                      ))}
                    </div>
                    <h5>
                      {data.newsroomrating === "1"
                        ? "Very Bad Newsroom!!"
                        : data.newsroomrating === "2"
                          ? "Bad Newsroom!"
                          : data.newsroomrating === "3"
                            ? "Standard Newsroom"
                            : data.newsroomrating === "4"
                              ? "Nice Newsroom!"
                              : data.newsroomrating === "5"
                                ? "Awesome Newsroom!!"
                                : ""}
                    </h5>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="newroom-coworker-txt">
                    <h6>Coworkers rating</h6>
                    <div className="d-flex rating--boxes--cont--h rating--boxes--cont--alt--h">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <span
                          key={index}
                          className={
                            index <= data.coworkerrating
                              ? "rating--span--active"
                              : "rating--span"
                          }
                        ></span>
                      ))}
                    </div>
                    <h5>
                      {data.coworkerrating === "1"
                        ? "Very Not Friendly!!"
                        : data.coworkerrating === "2"
                          ? " Not Friendly!"
                          : data.coworkerrating === "3"
                            ? "Fine"
                            : data.coworkerrating === "4"
                              ? "Friendly!"
                              : data.coworkerrating === "5"
                                ? "Very Friendly!!"
                                : ""}
                    </h5>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="newroom-coworker-txt">
                    <h6>Would recommend working here?</h6>
                    <div className="d-flex rating--boxes--cont--h rating--boxes--cont--alt--h">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <span
                          key={index}
                          className={
                            index <= data.recommendrating
                              ? "rating--span--active"
                              : "rating--span"
                          }
                        ></span>
                      ))}
                    </div>
                    <h5>
                      {" "}
                      {data.recommendrating === "1"
                        ? "Really Not Recommend!!"
                        : data.recommendrating === "2"
                          ? " Not Recommend!"
                          : data.recommendrating === "3"
                            ? "Don't Know"
                            : data.recommendrating === "4"
                              ? "Recommend!"
                              : data.recommendrating === "5"
                                ? "Very Recommend!!"
                                : ""}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="four-select-tab">
              <h5>Tags:</h5>
              <ul>
                {data.organized && (
                  <li>
                    <a href="">Organized</a>
                  </li>
                )}
                {data.unorganized && (
                  <li>
                    <a href="">Unorganized</a>
                  </li>
                )}
                {data.positivefun && (
                  <>
                    <li>
                      <a href="">Positive</a>
                    </li>
                    <li>
                      <a href="">Fun</a>
                    </li>
                  </>
                )}
                {data.creativecontrol && (
                  <li>
                    <a href="">Creative Control</a>
                  </li>
                )}
                {data.educational && (
                  <li>
                    <a href="">Educational</a>
                  </li>
                )}
                {data.negativetoxic && (
                  <>
                    <li>
                      <a href="">Negative</a>
                    </li>

                    <li>
                      <a href="">Toxic</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div class="like-report-submitted">
              <div class="like-report-txt">
                <ul>
                  <li>
                    <span>
                      <RiThumbUpFill />
                    </span>{" "}
                    Liked
                  </li>
                  <li>
                    <span>
                      <RiFlagFill />
                    </span>{" "}
                    Report
                  </li>
                </ul>
              </div>
              <p>submitted: {formatDate(data.createdAt)}</p>
            </div>
            <div class="latest-rating-comment-box">
              <div class="latest-commentor-img">
                <img src={karbabclogo} alt="" />
              </div>
              <div class="latest-comment-txt-box">
                <p>
                  Thank you for the review, we really appreciate it and we will
                  try to be even better. Thank you!
                </p>
                <span>2 weeks ago</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No Ratings Available</h1>
      )}


      {visibleCount < stationratings.length && (
        <div className="latest-rating-loadmore-btn" onClick={loadMore}>
          <a href="#">Load more</a>
        </div>

      )}
    </>
  );
};

export default Reportersdall;
