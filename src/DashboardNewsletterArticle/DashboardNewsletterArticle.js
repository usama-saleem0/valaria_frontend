import React, { useEffect, useState } from 'react'
import dashnewsletterimg from "../img/dashnewsletter-img.png"
import { baseurl } from '../baseurl';
import axios from 'axios';






const DashboardNewsletterArticle = () => {

const [stationratings, setStationRatings] = useState([]);


  useEffect(() => {
   

      fetchUserData();
    
  }, []);


  


  const fetchUserData = async () => {

    
   
    
    try {
      const response = await axios.get(`${baseurl}/getreportarticle`);
      const ratings = response.data;

      console.log("ahtisahm", response.data);
      setStationRatings(ratings);

      console.log("hamza", stationratings);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };




  return (
    <>
    {
      
      stationratings.map((data) => (
   
    <div className="dashnewsletter_article_box">
    <h1>{data.User.username} <span>report this</span> article.</h1>
    <div className="dashboard_newletter_box">
      <div className="dashnewsletter_box">
        <img src={dashnewsletterimg} alt="" />
        <div className="dashboard_newsletter_txt">
          <h6>{data.Article.createdAt}</h6>
          <h4>{data.Article.mainheading}</h4>
          <div class="newsletter-writtinsoul-txt"><p>Written by <span>{data.Article.writer}</span></p><div class="newsletter-likecomment-share"><span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg> 35</span><span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242Z"></path></svg> 25</span><span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.5759 17.2714L8.46576 14.484C7.83312 15.112 6.96187 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12C2.5 10.067 4.067 8.5 6 8.5C6.96181 8.5 7.83301 8.88796 8.46564 9.51593L13.5759 6.72855C13.5262 6.49354 13.5 6.24983 13.5 6C13.5 4.067 15.067 2.5 17 2.5C18.933 2.5 20.5 4.067 20.5 6C20.5 7.933 18.933 9.5 17 9.5C16.0381 9.5 15.1669 9.11201 14.5343 8.48399L9.42404 11.2713C9.47382 11.5064 9.5 11.7501 9.5 12C9.5 12.2498 9.47383 12.4935 9.42408 12.7285L14.5343 15.516C15.167 14.888 16.0382 14.5 17 14.5C18.933 14.5 20.5 16.067 20.5 18C20.5 19.933 18.933 21.5 17 21.5C15.067 21.5 13.5 19.933 13.5 18C13.5 17.7502 13.5262 17.5064 13.5759 17.2714Z"></path></svg> 15</span></div></div>
        </div>
      </div>
      <div class="report_ratingigdel_btn">
        <a href="#" class="ignore_all">Ignore</a>
        <a href="#" class="delete_all">Delete</a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="26" viewBox="0 0 7 26" fill="none"><circle cx="3.42105" cy="3.42105" r="3.42105" fill="#828282"></circle><circle cx="3.42105" cy="13" r="3.42105" fill="#828282"></circle><circle cx="3.42105" cy="22.5789" r="3.42105" fill="#828282"></circle></svg></a>
        </div>
    </div>
  </div>
      ))}
      </>
  )
}

export default DashboardNewsletterArticle