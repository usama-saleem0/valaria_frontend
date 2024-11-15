// BestSellersSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { baseurl } from '../baseurl';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toast notifications
import { useNavigate } from 'react-router-dom';


const ProductsComponent = ({priceSortOrder, products, query, sortOrder,proddetail, handleButtonClick, BestsellerImage }) => {
    const navigate = useNavigate();

    

    const [showAllProducts , setShowAllProducts] = useState(false);

   

    // Conditionally render products based on showAllProducts state
    const displayedProducts = showAllProducts ? products : products.slice(0, 8);

    const displayedSortedProducts = displayedProducts; // Use the current displayed products
    
    const searchedProducts = query
      ? displayedSortedProducts.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      : displayedSortedProducts;
    
    // Combine the sorting logic for both date and price
    const sortedSearchedProducts = [...searchedProducts].sort((a, b) => {
      // First sort by date
      if (sortOrder === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortOrder === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    
      // Then sort by price
      if (priceSortOrder === "Lowest Price to Highest") {
        console.log("Lowest Price to Highest = ", priceSortOrder);
        return a.price - b.price; // Assuming price is a number
      } else if (priceSortOrder === "Highest Price to Lowest") {
        return b.price - a.price; // Assuming price is a number
      }
    
      return 0; // Default case if no sorting criteria match
    });

    return (
        <section className="ratemystation-shop-sec">
            <Container>
                <Row>
                    {sortedSearchedProducts.map((product) => (
                        <Col key={product.id} lg={3} md={4}>
                            <div className="ratemystation-shop-prod">
                                <img src={product.image} alt={product.name} />
                                <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
                                <div className="ratemystation-prod-txt">
                                    <h3>{product.name}</h3>
                                    <h6>${product.price}</h6>
                                    <div className="ratemystation-prod-btn">
                                        <button onClick={() => proddetail(product.id)} variant="light" className="prod-light-btn">View Details</button>
                                        <button onClick={() => handleButtonClick(product)} variant="dark" className="prod-dark-btn">Add to cart</button>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="ratemystation-allprod-btn">
                            {!showAllProducts && (
                                <a onClick={() => setShowAllProducts(true)}>See All Products</a>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProductsComponent;


