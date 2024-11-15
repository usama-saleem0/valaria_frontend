// import React, { useEffect, useState } from "react";
// import { baseurl } from "../baseurl";
// import axios from "axios";



// const Station = () => {

//   const [userdata, setUser] = useState({});

//   useEffect(() => {
//     // Retrieve user data from local storage
//     const storedUser = localStorage.getItem("userData");
//     if (storedUser) {
//       const user = JSON.parse(storedUser);
//       console.log(user, userdata);
//       // setUser(user)

//       fetchUserData(user.id);
//     }
//   }, []);

//   const fetchUserData = async (userId) => {
//     try {
//       const response = await axios.get(`${baseurl}/getuserdata/${userId}`);
//       setUser(response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <>
//       <div class="About-main-card-1-ah">
//         <span class="edite">
//           <h2>Station’s Ratings</h2>
//         </span>

//         <div class="ratings-ah-1">
//           <div class="ratings-ah-1-TITAL width-give">
//             <span>
//               <h2>4.8</h2>
//               <p>/5.0</p>
//             </span>
//             <h3>From 45 ratings</h3>
//           </div>

//           <div class="ratings-ah-1-bar width-hell">
//             <div class="scrllo-bar">
//               <p>5</p>
//               <div class="w3-light-grey w3-tiny">
//                 <div
//                   class="w3-container w3-green"
//                   style={{ width: "80%" }}
//                 ></div>
//               </div>
//               <p>{userdata.counts ? userdata.counts: ''}</p>
//             </div>

//             <div class="scrllo-bar">
//               <p>4</p>
//               <div class="w3-light-grey w3-tiny">
//                 <div
//                   class="w3-container w3-green"
//                   style={{ width: "60%" }}
//                 ></div>
//               </div>
//               <p>5</p>
//             </div>

//             <div class="scrllo-bar">
//               <p>3</p>
//               <div class="w3-light-grey w3-tiny">
//                 <div
//                   class="w3-container w3-green"
//                   style={{ width: "40%" }}
//                 ></div>
//               </div>
//               <p>2</p>
//             </div>

//             <div class="scrllo-bar">
//               <p>2</p>
//               <div class="w3-light-grey w3-tiny">
//                 <div
//                   class="w3-container w3-green"
//                   style={{ width: "25%" }}
//                 ></div>
//               </div>
//               <p>2</p>
//             </div>

//             <div class="scrllo-bar">
//               <p>1</p>
//               <div class="w3-light-grey w3-tiny">
//                 <div
//                   class="w3-container w3-green"
//                   style={{ width: "10%" }}
//                 ></div>
//               </div>
//               <p>1</p>
//             </div>
//           </div>
//         </div>

//         <br />
//         <hr />

//         {/* <div class="Popular-ti-ah">
//           <h2>Most Popular Tags:</h2>

//           <div class="Popular-ti-ah-btn-box">
//             <button>Broadcasting</button>
//             <button>Organized</button>
//             <button>High Pay</button>
//             <button>Positive</button>
//             <button>Fun</button>
//             <button>Broadcasting</button>
//             <button>Positive</button>
//             <button>High Pay</button>
//             <button>Positive</button>
//             <button>Fun</button>
//           </div>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Station;




import React, { useEffect, useState } from "react";
import { baseurl } from "../baseurl";
import axios from "axios";

const Station = () => {
  const [userdata, setUser] = useState({});
  const [ratingdata, setrating] = useState({});

  const [rating, setRating] = useState([]);
  const total = rating[1] + rating[2] + rating[3] + rating[4] + rating[5];

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("userData");
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user, userdata);
      fetchRatingData(user.id)
      fetchUserData(user.id);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getuserdata/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchRatingData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getratings/${userId}`);
      const count = response.data.counts;
      setrating(response.data);
      setRating(count);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };



  const getRatingPercentage = (count, total) => {
    return total ? ((count / total) * 100).toFixed(2) + "%" : "0%";
  };

  const totalRatingsStyle = Object.values(ratingdata.counts || {}).reduce((acc, curr) => acc + curr, 0);
  

  // Calculate total rating value
const totalRatingValue = Object.entries(ratingdata.counts || {}).reduce(
  (acc, [rating, count]) => acc + rating * count, 0 );

// Calculate average rating
const averageRating = (totalRatingValue / totalRatingsStyle).toFixed(1);


  return (
    <>
      <div className="About-main-card-1-ah">
        <span className="edite">
          <h2>Station’s Ratings</h2>
        </span>

        <div className="ratings-ah-1">
          <div className="ratings-ah-1-TITAL width-give">
            <span>
              <h2>{averageRating}</h2>
              <p>/5.0</p>
            </span>
            <h3>From {ratingdata.totalCount} ratings</h3>
          </div>

          <div className="ratings-ah-1-bar width-hell">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div className="scrllo-bar" key={rating}>
                <p>{rating}</p>
                <div className="w3-light-grey w3-tiny">
                  <div
                    className="w3-container w3-green"
                    style={{ width: getRatingPercentage(ratingdata.counts?.[rating], totalRatingsStyle) }}
                  ></div>
                </div>
                <p>{ratingdata.counts?.[rating] || 0}</p>
              </div>
            ))}
          </div>
        </div>

        <br />
        <hr />

        {/* <div className="Popular-ti-ah">
          <h2>Most Popular Tags:</h2>

          <div className="Popular-ti-ah-btn-box">
            <button>Broadcasting</button>
            <button>Organized</button>
            <button>High Pay</button>
            <button>Positive</button>
            <button>Fun</button>
            <button>Broadcasting</button>
            <button>Positive</button>
            <button>High Pay</button>
            <button>Positive</button>
            <button>Fun</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Station;
