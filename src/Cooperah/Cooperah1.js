


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom'; // Import necessary hooks

import { baseurl } from '../baseurl';

import moudal from "../img/imge-2.jpg";
import moudal1 from "../img/moudal1.jpg";
import moudal2 from "../img/moudal2.jpg";
import moudal3 from "../img/moudal3.jpg";
import moudal4 from "../img/moudal4.jpg";

const Cooperah1 = () => {
    const navigate = useNavigate();
        const { id } = useParams(); // Get id from URL params
        const [product, setProduct] = useState(null); // State to hold product details

    // Function to get user from localStorage
    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
    };

    // Fetch product details when component mounts or id changes
    useEffect(() => {
      fetchProduct()

       
    }, []);

// SAHI
    const fetchProduct = async (productId) => {
      const id = localStorage.getItem('productId', productId);

      try {
          const response = await axios.get(`${baseurl}/productdetails/${id}`);
        //   const response = await axios.get(`${baseurl}/getproducts/${id}`);
        
          setProduct(response.data);
      } catch (error) {
          console.error('Error fetching product:', error);
      }
  };



    // Function to add product to cart
    const addToCart = async (product) => {
        const storedUser = getUserFromLocalStorage();
        const { id, image, name, price } = product;

        if (storedUser) {
            try {
                await axios.post(`${baseurl}/addtocart`, {
                    product_id: id,
                    image,
                    name,
                    price,
                    userId: storedUser.id
                });
                toast("Product Added to Cart!");
            } catch (err) {
                console.error('Error adding to cart:', err);
            }
        } else {
            toast.error("Please Login First");
        }
    };

    // Handle button click to add product to cart
    const handleButtonClick = () => {
        if (product) {
            addToCart(product);
        }
    };

    return (
        <>
            {product && (
                <div className="About-main-card-1-ah">
                    <div className="America-Sweatshirt">
                        <div className="America-ah">
                            <div className="America-ah-part-1">
                                <img src={product.image} alt="Product" />
                            </div>
                            {/* <div className="America-ah-part-2">
                                <img src={moudal1} alt="Additional view 1" />
                                <img src={moudal2} alt="Additional view 2" />
                                <img src={moudal3} alt="Additional view 3" />
                                <img src={moudal4} alt="Additional view 4" />
                            </div> */}
                        </div>

                        <div className="Sweatshirt-ah">
                            <h2>{product.name}</h2>

                            <div className="Sweatshirt-ah-select-box">
                                <div className="Sweatshirt-ah-select-card">
                                    <p>Color</p>
                                    <select name="color" id="color">
                                        <option value="" disabled hidden>
                                            Color
                                        </option>
                                        <option value="black">Black</option>
                                        <option value="red">Red</option>
                                        <option value="white">White</option>
                                    </select>
                                </div>

                                <div className="Sweatshirt-ah-select-card">
                                    <p>Size</p>
                                    <select name="size" id="size">
                                        <option value="" disabled hidden>
                                            Size
                                        </option>
                                        <option value="xl">XL</option>
                                        <option value="l">L</option>
                                        <option value="m">M</option>
                                    </select>
                                </div>
                            </div>

                            <div className="Sweatshirt-ah-select-box">
                                <div className="Sweatshirt-ah-select-card">
                                    <p>Qty</p>
                                    <input type="number" min="1" defaultValue="1" />
                                </div>

                                <div className="Sweatshirt-ah-select-card">
                                    <h2>${product.price}</h2>
                                    <button onClick={handleButtonClick}>Add to cart</button>
                                </div>
                            </div>

                            <div className="Description-box-tital">
                                <h2>Description</h2>
                                <p>{product.description}</p>
                                <a href="#">See more</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    );
};

export default Cooperah1;
