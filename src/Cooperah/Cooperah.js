import React, { useEffect, useState } from "react";

import Assistant from '../img/Assistant.png'
import past from '../img/Past-3.png'
import hellopng from '../img/doticon.png'
import { baseurl } from "../baseurl";
import axios from "axios";


const Cooperah = ({ CommentDatas }) => {

  console.log('CommentDatas', CommentDatas)

  const [userdata, setUser] = useState({});
  const [productdata, setProduct] = useState({});
  const [CommentData, setCommentData] = useState([]);



  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  useEffect(() => {
    // Retrieve user data from local storage
    const storedProduct = localStorage.getItem('productdata');
    if (storedProduct) {
      const product = JSON.parse(storedProduct);
      console.log(product, productdata)
      // setProduct(user)  

      fetchproductdata(product.id);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/GetRatingProduct`);
        setCommentData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchData();

    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log(user, userdata)
      // setUser(user)  

      fetchUserData(user.id);

    }

  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getuserdata/${userId}`);
      setUser(response.data)
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchproductdata = async (productId) => {
    try {
      const response = await axios.get(`${baseurl}/productdetails/${productId}`);

      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const timeAgo = (date) => {
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past) / 1000); // difference in seconds

    const units = [
      { name: "second", value: 60 },
      { name: "minute", value: 60 },
      { name: "hour", value: 24 },
      { name: "day", value: 7 },
      { name: "week", value: 4.345 },
      { name: "month", value: 12 },
      { name: "year", value: 1 },
    ];

    let unitIndex = 0;
    let value = diff;

    for (; unitIndex < units.length - 1; unitIndex++) {
      if (value < units[unitIndex].value) break;
      value = Math.floor(value / units[unitIndex].value);
    }

    const unitName = units[unitIndex].name + (value > 1 ? "s" : "");
    return `${value} ${unitName} ago`;
  };


  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
      setShowAll(true);
  };




  return (
    <>

      <div class="About-main-card-1-ah">
        <h2>Review<span>({CommentDatas.length})</span></h2>
        {(showAll ? CommentDatas : CommentDatas.slice(0, 3)).map((Comment, index) => (

          <div key={index} class="Job-ah">
            <div class="Cooper-ah-box-main">

              <div class="Cooper-ah-box">

                <div class="Cooper-ah-imger">
                  <img src={userdata.Profile && userdata.Profile.image ? userdata.Profile.image : "admin"} alt="" />

                </div>
                <div class="Cooper-ah-tital">
                  <div class="Cooper-ah-tital-head">
                    <h2>{userdata.username}</h2>
                    <span>{Comment.rating}<img src={hellopng} alt="" /></span>
                  </div>
                  <h3>{Comment.description}</h3>
                  <p>{timeAgo(Comment.createdAt)}</p>
                </div>
              </div>



            </div>
          </div>


        ))}
        <hr />


        {!showAll &&  CommentDatas.length > 3 && (
          <div class="Award-a" onClick={handleShowAll}>
            <a href="#">{CommentDatas.length - 3}+ more</a>
          </div>

        )}
      </div>

    </>

  )




}




export default Cooperah
