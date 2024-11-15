import React, { useEffect, useState } from "react";
import { RiThumbUpFill, RiFlagFill, RiVerifiedBadgeFill } from "react-icons/ri";
import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png";
import { baseurl } from "../baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const Reportersdalladmin = ({sortratings}) => {
  const [stationratings, setStationRatings] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
  
      // setUser(user)

      fetchUserData();
    
  }, []);


  
  const fetchUserData = async () => {

    
    try {
      const response = await axios.get(`${baseurl}/getrallatingsadmin`);
      const ratings = response.data.ratings;

      console.log("ahtisahm", response.data.ratings);
      setStationRatings(ratings);

      console.log("hamza", stationratings);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const Approval = async (e)=>{

    console.log("iiii"  , e) ;
    const id = e;

    try {
      const response = await axios.post(`${baseurl}/approveratingsbyadmin` , {id});
      console.log('response', response)
      fetchUserData();
      toast.success('NewsRoom Approved Successfully')
     
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

  }


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
        sortratings(stationratings).map((data) => (
          <div class="latest-rating-box max--width" >
            <div class="latest-rating-user-verified">
              <div class="rating-user-box">
                <img src={Latestuserratingicon} alt="" />
                <div class="latest-rating-user-txt">
                  <h5> {data.User.stationtype || 'Youtube'} | {data.User.username}</h5>
                  {/* <select name="" id="">
                    <option value="">Job details</option>
                    <option value="">Lorem</option>
                    <option value="">Lorem</option>
                  </select> */}
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
              {/* <p>Last updated: {data.createdAt}</p> */}
            </div>

            <div className="Reporter-dah-body-new-last"> 
            {
              data.verified_rating == 1 ?
              <button style={{background:'#89c400' , border:'none'}}>Approved</button>
              :
              <button onClick={()=> Approval(data.id)}>Approve</button>

            }
            <button className="Deny">Deny</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="27" viewBox="0 0 7 27" fill="none">
  <path d="M6.84201 4.26187C6.84201 6.15127 5.31036 7.68293 3.42096 7.68293C1.53157 7.68293 -9.00229e-05 6.15127 -9.00229e-05 4.26187C-9.00229e-05 2.37248 1.53157 0.84082 3.42096 0.84082C5.31036 0.84082 6.84201 2.37248 6.84201 4.26187Z" fill="#828282"/>
  <path d="M6.84186 13.8408C6.84186 15.7302 5.3102 17.2619 3.42081 17.2619C1.53141 17.2619 -0.000244141 15.7302 -0.000244141 13.8408C-0.000244141 11.9514 1.53141 10.4197 3.42081 10.4197C5.3102 10.4197 6.84186 11.9514 6.84186 13.8408Z" fill="#828282"/>
  <path d="M6.84186 23.4197C6.84186 25.3091 5.3102 26.8408 3.42081 26.8408C1.53141 26.8408 -0.000244141 25.3091 -0.000244141 23.4197C-0.000244141 21.5303 1.53141 19.9987 3.42081 19.9987C5.3102 19.9987 6.84186 21.5303 6.84186 23.4197Z" fill="#828282"/>
</svg>
          </div>
          
          </div>
        ))
      ) : (
        <h1>No Ratings Available</h1>
      )}
    </>
  );
};

export default Reportersdalladmin;
