import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AmericonProductCart from '../AmericonProductCart/AmericonProductCart';
import MyCartCheckoutBox from '../MyCartCheckoutBox/MyCartCheckoutBox';
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';
import axios from 'axios';
import { baseurl } from '../baseurl';
import Header1 from '../Header/Header2';
import { useParams } from 'react-router-dom';

const MyCartSD = ({ products }) => {
  // Convert products to the format needed by AmericonProductCart
  const AmericanProdData = (products || []).map((product) => ({
    title: product.name,
    rate: `$${product.price.toFixed(2)}`,
    image: product.image,
  }));

  const [cartproducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

      const userId = getUserFromLocalStorage();
      try {
        const response = await axios.get(`${baseurl}/getcart/${userId.id}`);
        console.log('response',response.data)
        const formattedProducts = response.data.map(product => ({
          id: product.id,
          ...product,
          price: parseFloat(product.price) 
        }));
        setProducts(formattedProducts);
        console.log('sssssssss' , response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  const [counts, setCounts] = useState(Array(cartproducts.length).fill(1));

  const handleCountChange = (index, newCount) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
  };


  // const handleRemoveProduct = (index) => {
  //   const newCounts = counts.filter((_, i) => i !== index);
  //   const newProducts = AmericanProdData.filter((_, i) => i !== index);
  //   setCounts(newCounts);
  //   // Update products here if you need to reflect the changes
  //   // e.g., setProducts(newProducts)
  // };


  
  const handleRemoveProduct = async (index, product) => {
    try {
      // Check if product has an id before making the request
      if (!product.id) {
        throw new Error('Product ID is missing');
      }
  
      // Send DELETE request to backend
      await axios.delete(`${baseurl}/cart/${product.id}`);
    
      // Update frontend state after successful deletion
      const newCounts = counts.filter((_, i) => i !== index);
      const newProducts = cartproducts.filter((_, i) => i !== index);
      setCounts(newCounts);
      setProducts(newProducts);
    
      console.log('Product removed from cart successfully');
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  const subtotal = AmericanProdData.reduce((total, product, index) => {
    const rate = parseFloat(product.rate.replace('$', ''));
    return total + rate * counts[index];
  }, 0);

  const shippingFee = subtotal > 100 ? 0 : 10; // Example: Free shipping for orders over $100
  const total = subtotal + shippingFee;

  console.log('counst' , cartproducts.length)

  return (
    <>
      {/* <Header1 /> */}
      <Header />

      <section className="americon-product-card-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="americon-prod-card-txt">
                <h4>My Cart</h4>
              </div>
            </Col>
            <Col lg={12}>
              <div className="product-quality-total">
                <h4>Product</h4>
                <div className="mycart-qualitytotal">
                  <h4>Quantity</h4>
                  <h4>Total</h4>
                </div>
              </div>
              <AmericonProductCart
                initialProducts ={cartproducts}
                handleRemoveProduct={handleRemoveProduct} // Pass the function here
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default MyCartSD;