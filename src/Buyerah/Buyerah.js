// import RateThisProd from "../Popups/Rate_popup_h/Ratepopup_h";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import axios from "axios";
// import { baseurl } from "../baseurl";


// const Buyerah = ({onGet}) => {

//   const [userdata, setUser] = useState({});
//   const [ratingdata, setrating] = useState({});
//   const [currentuser, setcurrentId] = useState({});
//   const [rating, setRating] = useState([]);
  
//   // const total = rating[1] + rating[2] + rating[3] + rating[4] + rating[5];

//   useEffect(() => {
//     // Retrieve user data from local storage
//     const storedUser = localStorage.getItem("userData");
//     if (storedUser) {
//       const user = JSON.parse(storedUser);

//       setcurrentId(user)
      
//       console.log(user, userdata);
//       fetchRatingData(user.id)
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

//   const fetchRatingData = async () => {
//     const id = localStorage.getItem('productId');
//     console.log('Fetching data' , id)
    
//     try {
//       //CHECKING
//       // const response = await axios.get(`${baseurl}/getratings/${userId}`);
//       //ORIGINAL
//       const response = await axios.get(`${baseurl}/GetRatingProductbyid/${id}`);

//       const count = response.data.counts;
//       setrating(response.data);
//       setRating(count);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };



//   const getRatingPercentage = (count, total) => {
//     return total ? ((count / total) * 100).toFixed(2) + "%" : "0%";
//   };

//   const totalRatingsStyle = Object.values(ratingdata.counts || {}).reduce((acc, curr) => acc + curr, 0);


//   // Calculate total rating value
//   const totalRatingValue = Object.entries(ratingdata.counts || {}).reduce(
//     (acc, [rating, count]) => acc + rating * count, 0);

//   // Calculate average rating
//   const averageRating = (totalRatingValue / totalRatingsStyle).toFixed(1);





//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {

   
//     setIsOpen(!isOpen);
//     onGet()


//   };

//   return (
//     <>
//       <div className="About-main-card-1-ah">
//         <h2>Buyer ratings</h2>
//         <div className="satisfied">
//           <h2>
//             {averageRating}<span>/5.0</span>
//           </h2>
//           <h3>98% satisfied buyers</h3>
//           <p>{ratingdata.length} ratings</p>
//           <div class="ratings-ah-1-bar  my-ah-class" style={{ width: "100%" }}>
//           {[5, 4, 3, 2, 1].map((rating) => (
//               <div className="scrllo-bar" key={rating}>
//                 <p>{rating}</p>
//                 <div className="w3-light-grey w3-tiny">
//                   <div
//                     className="w3-container w3-green"
//                     style={{ width: getRatingPercentage(ratingdata.counts?.[rating], totalRatingsStyle) }}
//                   ></div>
//                 </div>
//                 <p>{ratingdata.counts?.[rating] || 0}</p>
//               </div>
//             ))}
//           </div>{" "}
//           <div className="rate--product--button--container--ah">
//             <button onClick={toggle}>Rate this product</button>
//           </div>
//         </div>
//       </div>
//       {isOpen && <RateThisProd close={toggle} />}
//     </>
//   );
// };

// export default Buyerah;



import RateThisProd from "../Popups/Rate_popup_h/Ratepopup_h";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import axios from "axios";
import { baseurl } from "../baseurl";

const Buyerah = ({ onGet }) => {
  const [userdata, setUser] = useState({});
  const [ratingdata, setrating] = useState([]);
  const [currentuser, setcurrentId] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setcurrentId(user);
      fetchRatingData();
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

  const fetchRatingData = async () => {
    const id = localStorage.getItem('productId');
    console.log('Fetching data', id);
    try {
      const response = await axios.get(`${baseurl}/GetRatingProductbyid/${id}`);
      setrating(response.data); // Setting the whole array here
    } catch (error) {
      console.error("Error fetching rating data:", error);
    }
  };

  // Calculate the total number of ratings for each score (e.g., 5 stars, 4 stars)
  const ratingCounts = ratingdata.reduce((acc, { rating }) => {
    const score = parseFloat(rating);
    if (score in acc) {
      acc[score]++;
    } else {
      acc[score] = 1;
    }
    return acc;
  }, {});

  // Calculate total ratings count
  const totalRatingsCount = ratingdata.length;

  // Calculate the average rating
  const totalRatingValue = Object.entries(ratingCounts).reduce(
    (acc, [rating, count]) => acc + parseFloat(rating) * count,
    0
  );

  const averageRating = (totalRatingValue / totalRatingsCount).toFixed(1);

  const getRatingPercentage = (count, total) => {
    return total ? ((count / total) * 100).toFixed(2) + "%" : "0%";
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    onGet();
  };

  return (
    <>
      <div className="About-main-card-1-ah">
        <h2>Buyer ratings</h2>
        <div className="satisfied">
          <h2>
            { averageRating}
            <span>/5.0</span>
          </h2>
          <h3>98% satisfied buyers</h3>
          <p>{totalRatingsCount} ratings</p>
          <div className="ratings-ah-1-bar my-ah-class" style={{ width: "100%" }}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div className="scrllo-bar" key={rating}>
                <p>{rating}</p>
                <div className="w3-light-grey w3-tiny">
                  <div
                    className="w3-container w3-green"
                    style={{ width: getRatingPercentage(ratingCounts[rating] || 0, totalRatingsCount) }}
                  ></div>
                </div>
                <p>{ratingCounts[rating] || 0}</p>
              </div>
            ))}
          </div>
          <div className="rate--product--button--container--ah">
            <button onClick={toggle}>Rate this product</button>
          </div>
        </div>
      </div>
      {isOpen && <RateThisProd close={toggle} />}
    </>
  );
};

export default Buyerah;

