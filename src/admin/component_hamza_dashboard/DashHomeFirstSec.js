import axios from "axios";
import { useEffect, useState } from "react";
import { baseurl } from "../../baseurl";
import React from "react";

const HomeSecOneh = () => {

  const [ratingcount, setRatingcount] = useState(0);
  const [newsroomcount, setNewsroomcount] = useState(0);
  const [newsdirectorcount, setNewsdirectorcount] = useState(0);
  const [unverifiedusercount, setUnverifiedusercount] = useState(0);





  useEffect(() => {
   
      fetchUserData();
    
  }, []);


  
  const fetchUserData = async () => {

    
    try {
      const response = await axios.get(`${baseurl}/getalcounts`);

   

     setRatingcount(response.data.ratingscouunt)
     setNewsroomcount(response.data.newsroomcount)
     setNewsdirectorcount(response.data.newsdirectorCount)
     setUnverifiedusercount(response.data.unverifiedUserCount)


     
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const data = [
    {
      text: "New Ratings",
      value: "40",
    },

    {
      text: "New Station",
      value: "10",
    },

    {
      text: "New News Director",
      value: "5",
    },

    {
      text: "Rating Verification",
      value: "35",
    },
   
  ];

  return (
    <>
      <div className="dash--home--title--h">
        <h1>Waiting for Approval</h1>
        <p>Please review the request that requires your action</p>
      </div>
      <div className="dash--sec--one--card--cont--h">
        {/* {data.map((item, index) => ( */}
          <div  className="dash--sec--one--card--h">
            <p>New Ratings</p>
            <h1>{ratingcount}</h1>
          </div>

          <div  className="dash--sec--one--card--h">
            <p>New Station</p>
            <h1>{newsroomcount}</h1>
          </div>

          <div  className="dash--sec--one--card--h">
            <p>New News Director</p>
            <h1>{newsdirectorcount}</h1>
          </div>

          <div  className="dash--sec--one--card--h">
            <p>Unverified account</p>
            <h1>{unverifiedusercount}</h1>
          </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default HomeSecOneh;
