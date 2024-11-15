import React, { useEffect, useState } from "react";

import kabc from "../img/kabc.png";
import axios from "axios";
import { baseurl } from "../baseurl";
import { useLocation } from "react-router-dom";



const Filter = ({ activeTab, setJobTypeFilter, jobTypeFilter, sortOrder, setSortOrder }) => {
  const [stationratings, setStationRatings] = useState([]);
  const [newsroomrating, setnewsroomrating] = useState([]);
  const [appliedJob, setappliedJob] = useState([]);
  const [articles, setarticles] = useState([]);
  const [jobContent, setjobContent] = useState([]);
  const [jobContentKABCAH1, setjobContentKABCAH1] = useState([]);

  const location = useLocation();


  useEffect(() => {
    if (activeTab === "ratings") {
      fetchUserData();
    } else if (activeTab === "jobs") {
      fetchJobsData();
    } else if (activeTab === "SubscribedNews") {
      fetcharticles();
    } else if (activeTab === "PostedJobs") {
      fetchJobsDatafromStation();
    } else if (activeTab === "Statistic") {
      fetchJobsDataforEmployee();
    } else if (activeTab === "Stationratings") {
      fetchRatingStation();
    }

  }, [activeTab]); // Re-run effect when the activeTab changes



  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };



  const fetchJobsDataforEmployee = async () => {

    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser.id;


    try {
      const response = await axios.get(`${baseurl}/jobbyuserid/${userId}`);
      console.log('ahtisahm', response.data)
      setjobContentKABCAH1(response.data)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const fetchJobsDatafromStation = async () => {
    const storedUser = getUserFromLocalStorage();
    const userId = storedUser.id;
  
    try {
      const response = await axios.get(`${baseurl}/getjobbyuserid/${userId}`);
      console.log('Posted Jobs data:', response.data); // Add log to inspect data
      setjobContent(response.data);
    } catch (error) {
      console.error('Error fetching Posted Jobs data:', error);
    }
  };


  const fetcharticles = async () => {

    const storedUser = localStorage.getItem("userData");

    const user = JSON.parse(storedUser);

    try {
      const response = await axios.get(`${baseurl}/getsavearticles/${user.id}`);
      setarticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };


  const fetchJobsData = async () => {

    const storedUser = getUserFromLocalStorage();
    const userId = storedUser.id



    try {
      const response = await axios.get(`${baseurl}/jobbyuserid/${userId}`);
      console.log('ahtisahm', response.data)
      setappliedJob(response.data)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const fetchUserData = async () => {

    const storedUser = getUserFromLocalStorage();
    const userId = storedUser.id

    try {
      const response = await axios.get(`${baseurl}/getratingsbyuser/${userId}`);
      const ratings = response.data.ratings;

      console.log("ahtisahm", response.data.ratings);
      setStationRatings(ratings);

      console.log("hamza", stationratings);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchRatingStation = async () => {
    const storedUser = getUserFromLocalStorage();
    const userId = storedUser.id;
  
    try {
      const response = await axios.get(`${baseurl}/getratings/${userId}`);
      console.log('Ratings station data:', response.data.ratings); // Add log to inspect data
      setnewsroomrating(response.data.ratings);
    } catch (error) {
      console.error('Error fetching Ratings station data:', error);
    }
  };






  return (
    <>

      <div class="job-ah-post">
        <h2>
          {activeTab === "ratings" ? (
            <>
              My Ratings <span>({stationratings.length})</span>
            </>
          ) : activeTab === "jobs" ? (
            <>
              Jobs Applied <span>({appliedJob.length})</span>
            </>
          ) : activeTab === "SubscribedNews" ? (
            <>
              Subscribed Articles <span>({articles.length})</span>
            </>
          ) : activeTab === "PostedJobs" ? (
            <>
              Posted Jobs <span>({jobContent.length})</span>
            </>
          ) : activeTab === "Statistic" ? (
            <>
              Applied Jobs <span>({jobContentKABCAH1.length})</span>
            </>
          ) : activeTab === "Stationratings" ? (
            <>
              My Ratings <span>({newsroomrating.length})</span>
            </>
          ) :
            null}
        </h2>


        {location.pathname !== "/kabc2" && (


          <div class="job-ah-Filter">

            {activeTab === "Statistic" && (
              <div class="job-ah-Filter-card">
                <p>Filter:</p>
                <select
                  name="jobType"
                  id="jobType"
                  value={jobTypeFilter}
                  onChange={(e) => setJobTypeFilter(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Job type
                  </option>
                  <option value="OnSite">OnSite</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            )}

            <div class="job-ah-Filter-card">
              <p>Sort:</p>
              <select
                name="sortOrder"
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>
        )}



        {location.pathname !== "/kabcah1" && (
          <div class="job-ah-Filter">
            {/* <div class="job-ah-Filter-card">
              <p>Filter:</p>
              <select
                name="jobType"
                id="jobType"
                value={jobTypeFilter}
                onChange={(e) => setJobTypeFilter(e.target.value)}
              >
                <option value="" disabled hidden>
                  Job type
                </option>
                <option value="OnSite">OnSite</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
            </div> */}


            {activeTab === "PostedJobs" && (
              <div class="job-ah-Filter-card">
                <p>Filter:</p>
                <select
                  name="jobType"
                  id="jobType"
                  value={jobTypeFilter}
                  onChange={(e) => setJobTypeFilter(e.target.value)}
                >
                  <option value="" disabled hidden>
                    Job type
                  </option>
                  <option value="OnSite">OnSite</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            )}



            <div class="job-ah-Filter-card">
              <p>Sort:</p>
              <select
                name="sortOrder"
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>

        )}
      </div>
    </>
  );
};

export default Filter;
