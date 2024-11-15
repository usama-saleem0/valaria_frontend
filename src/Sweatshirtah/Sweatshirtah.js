import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import Cooperah1 from "../Cooperah/Cooperah1";
import Cooperah from "../Cooperah/Cooperah";
import Buyerah from "../Buyerah/Buyerah";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { baseurl } from "../baseurl";
import axios from "axios";
import Header1 from "../Header/Header2";

const Sweatshirtah = () => {
  const [productdata, setProduct] = useState({});
  const [userdata, setUser] = useState({});
  const [CommentDatas, setCommentDatas] = useState([]);


  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
};

  useEffect(() => {
    fetchData()
    // Retrieve user data from local storage
    const storedProduct = localStorage.getItem('productdata');
    if (storedProduct) {
      const product = JSON.parse(storedProduct);
      console.log(product, productdata , 'kkkkkkkkkkkkkk')
      // setProduct(user)  

      fetchproductdata(product.id);

    

    }


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


  const fetchData = async () => {
    const id = localStorage.getItem('productId');
    console.log('Fetching data' , id)
    
    try {
      const response = await axios.get(`${baseurl}/GetRatingProductbyid/${id}`);
      setCommentDatas(response.data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching education data:", error);
    }
  };


  const fetchproductdata = async (productId) => {
    try {
      // SAHI
      const response = await axios.get(`${baseurl}/productdetails/${productId}`);
      // const response = await axios.get(`${baseurl}/getproducts/${productId}`);


      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const onGeting = () =>{

    fetchData() 
  }


  
  return (
    <>
    {/* <Header1 /> */}
      <Header />
      <section className="Sweatshirt-sec">
        <Container>
          <div className="Sweatshirt">
            <Cooperah1 productdata = {productdata} />

            <div className="Sweatshirt-box Sweatshirt--box--alt">
              <div className="Sweatshirt-part-1 Sweatshirt--part--alt">
                <Cooperah CommentDatas = {CommentDatas} />
              </div>

              <div className="Sweatshirt-part-2 Sweatshirt--part--alt">
                <Buyerah onGet={onGeting} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default Sweatshirtah;
