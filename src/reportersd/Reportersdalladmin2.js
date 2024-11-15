import React, { useEffect, useState } from "react";
import { RiThumbUpFill, RiFlagFill, RiVerifiedBadgeFill } from "react-icons/ri";
import Latestuserratingicon from "../img/latest-rating-user-icon.png";
import karbabclogo from "../img/karc-abc-logo.png";
import reviewdirectorimg from "../img/review-director-img.png";
import { baseurl } from "../baseurl";
import axios from "axios";
import { toast } from "react-toastify";

const Reportersdalladmin2 = ({sortratings}) => {
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


  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop(); // Extract the filename from the URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="cnter">

   
      {stationratings.length > 0 ? (
        sortratings(stationratings).map((data) => (
          <div class="latest-rating-box" style={{minWidth:'1000px' , maxWidth:'1000px'}}>
            <div class="latest-rating-user-verified">
              <div class="rating-user-box">
                <img src={Latestuserratingicon} alt="" />
                <div class="latest-rating-user-txt">
                  <h5>{data.User.username}</h5>
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
                      <h3>Brooklyn Simmons</h3>
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
              <p>submitted: 03-24-21</p>
            </div>

            
     <div className="Uploaded-documents"> 
      <h2>Uploaded documents:</h2>

      <div className="Uploaded-documents-box">


      <div className="Uploaded-documents-card" onClick={() => handleDownload(data.imageurl)}>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
  <path d="M4.37702 0.84082H14.38C14.4478 0.857099 14.5088 0.878803 14.5746 0.888977C15.805 1.06871 16.8366 1.60861 17.622 2.58462C18.9474 4.23211 20.2808 5.87553 21.5905 7.53319C22.3068 8.43663 22.749 9.46351 22.7517 10.6335C22.7603 14.4245 22.7603 18.2148 22.7517 22.0045C22.7415 24.6497 20.5765 26.8201 17.932 26.8303C13.5667 26.8443 9.20125 26.8443 4.83552 26.8303C2.19032 26.8222 0.0198931 24.6484 0.014467 22.0065C0.000901839 16.5581 -0.0133416 11.109 0.0232844 5.66052C0.0368495 3.64542 1.04813 2.17563 2.86179 1.30136C3.33115 1.07482 3.86697 0.990715 4.37702 0.84082ZM9.11737 21.3134C10.4522 21.2964 11.4167 20.8698 12.2184 20.0694C13.6626 18.6293 15.1041 17.1875 16.5429 15.7442C16.6389 15.6488 16.7277 15.5466 16.8088 15.4383C18.261 13.4869 17.6872 10.6227 15.5968 9.38009C14.1636 8.52887 12.3466 8.65028 11.0796 9.67784C10.7988 9.90642 10.7255 10.2042 10.7757 10.5413C10.8171 10.82 10.9982 10.9903 11.2552 11.0805C11.5869 11.1971 11.8731 11.1056 12.16 10.913C13.2201 10.2042 14.5434 10.4199 15.3641 11.4203C16.1712 12.4038 16.1102 13.7359 15.2135 14.6373C13.8041 16.0517 12.3922 17.4633 10.9778 18.8723C10.5358 19.3204 9.93518 19.5765 9.30582 19.5854C8.67646 19.5943 8.06887 19.3552 7.61435 18.9198C6.66886 18.0326 6.58136 16.5459 7.46242 15.5834C8.10608 14.878 8.79859 14.2161 9.4843 13.5487C9.82343 13.2204 10.3023 13.2713 10.6034 13.6294C10.9046 13.9875 10.891 14.4006 10.5519 14.7451C9.9462 15.3596 9.33102 15.966 8.72059 16.5764C8.50897 16.7873 8.40723 17.0363 8.46285 17.334C8.52254 17.6501 8.745 17.8332 9.0258 17.9336C9.34323 18.0469 9.62538 17.9478 9.86006 17.7138C10.4406 17.1346 11.021 16.5545 11.6011 15.9734C12.2333 15.344 12.4931 14.585 12.3432 13.7087C12.1851 12.7863 11.6262 12.1684 10.754 11.8652C9.89668 11.5661 9.08888 11.7085 8.42215 12.34C7.7032 13.0183 6.99171 13.7114 6.32634 14.4426C5.16651 15.7177 4.85994 17.2011 5.5538 18.7889C6.25783 20.3997 7.55398 21.2232 9.11737 21.3134Z" fill="#828282"/>

</svg> 
<h2>File name.pdf</h2>{data.image}


</span>

<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
  <path d="M4.96749 8.31065V7.95009C4.96749 6.04525 4.96749 4.14041 4.96749 2.23557C4.96827 1.33533 5.4511 0.84082 6.349 0.84082C7.92313 0.84082 9.49726 0.84082 11.0714 0.84082C11.928 0.84082 12.4288 1.34234 12.4295 2.19819C12.4295 4.1129 12.4295 6.02734 12.4295 7.94152V8.30365H12.7543C13.3282 8.30365 13.9014 8.29897 14.4746 8.31065C14.9691 8.32078 15.3211 8.5731 15.522 9.01855C15.6248 9.22444 15.6658 9.45569 15.6401 9.68438C15.6144 9.91308 15.5231 10.1295 15.3771 10.3074C15.3037 10.3981 15.224 10.4838 15.1388 10.5636C13.3332 12.3714 11.5264 14.1786 9.71869 15.9853C9.00924 16.6947 8.38935 16.6955 7.68224 15.9853C5.86202 14.1677 4.04103 12.349 2.21926 10.5293C1.92177 10.2334 1.73409 9.90633 1.75746 9.47412C1.79094 8.83398 2.27455 8.3309 2.91702 8.31688C3.58208 8.29742 4.25415 8.31065 4.96749 8.31065ZM15.8981 21.9802C16.0145 21.9846 16.131 21.982 16.247 21.9724C16.7571 21.9116 17.1036 21.6181 17.3069 21.1648C17.5031 20.7303 17.3933 20.3277 17.0943 19.9741C16.8139 19.6423 16.4573 19.4975 16.0173 19.4983C11.1298 19.5045 6.24257 19.5045 1.35562 19.4983C1.27774 19.4983 1.19987 19.4983 1.12199 19.5053C0.833786 19.529 0.563326 19.6541 0.358705 19.8584C0.154085 20.0628 0.0285672 20.3331 0.00447376 20.6212C-0.0554905 21.4054 0.492754 21.9763 1.32369 21.9771C3.7721 21.9807 6.22051 21.9807 8.66892 21.9771L15.8981 21.9802Z" fill="#194D79"/>
</svg>
      </div>






      </div>
      </div>
      <br/>

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
       </div>
    </>
  );
};

export default Reportersdalladmin2;
