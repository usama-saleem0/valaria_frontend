import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import MyCartCheckoutBox from '../MyCartCheckoutBox/MyCartCheckoutBox';
import axios from 'axios';
import { baseurl } from '../baseurl';


const AmericonProductCart = ({ initialProducts, handleRemoveProduct }) => {
  const [americanprod, setAmericanprod] = useState([]);
  const [shippingFee, setshippingFee] = useState(10);




  useEffect(() => {
    // console.log('ini', initialProducts)
    if (initialProducts) {
      setAmericanprod(initialProducts);
    }
  }, [initialProducts]);

  console.log('datas' , americanprod)

  const handleCountChange = (index, newQuantity) => {
    const newAmericanprod = [...americanprod];
    newAmericanprod[index].quantity = newQuantity;
    setAmericanprod(newAmericanprod);
  };

  const handleIncrease = (index) => {
    const newQuantity = americanprod[index].quantity + 1;
    handleCountChange(index, newQuantity);
  };

  const handleDecrease = (index) => {
    if (americanprod[index].quantity > 0) {
      const newQuantity = americanprod[index].quantity - 1;
      handleCountChange(index, newQuantity);
    }
  };

  const handleInputChange = (e, index) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      handleCountChange(index, value);
    }
  };

  // const handleRemoveProduct = (index) => {
  //   const newAmericanprod = americanprod.filter((_, i) => i !== index);
  //   setAmericanprod(newAmericanprod);
  // };


  // const handleRemoveProduct = async (productId, index) => {
  //   try {
  //     await axios.delete(`${baseurl}/cart/${productId}`);
  //     const newAmericanprod = americanprod.filter((_, i) => i !== index);
  //     setAmericanprod(newAmericanprod);
  //   } catch (error) {
  //     console.error('Error removing product:', error);
  //   }
  // };

  const calculateTotalPrice = () => {
    return americanprod.reduce((total, product) => {
      const rate = parseFloat(product.Product.price.replace('$', ''));
      return total + rate * product.quantity;
    }, 0);
  };

  return (
    <>
    <Row>


    <Col lg={8}>
        
      {americanprod.map((americanproduct, index) => {
        const rate = parseFloat(americanproduct.Product.price.replace('$', ''));
        const total = rate * americanproduct.quantity;

        return (
          
          <div key={index} className="americon-prod-cart">
            <img src={americanproduct.Product.image} alt="" />
            <h3>{americanproduct.Product.name}</h3>
            <div className="cart-counter">
              <span onClick={() => handleDecrease(index)} style={{ cursor: 'pointer' }}>
                <FaMinus />
              </span>
              <input
                type="number"
                value={americanproduct.quantity}
                onChange={(e) => handleInputChange(e, index)}
                min="0"
              />
              <span onClick={() => handleIncrease(index)} style={{ cursor: 'pointer' }}>
                <FaPlus />
              </span>
            </div>
            <h4>${total.toFixed(2)}</h4>
            {/* <h6
              onClick={() => handleRemoveProduct(americanproduct.Product.id, index)}
              style={{ cursor: 'pointer' }}
            > */}
            <h6
  onClick={() => handleRemoveProduct(index, americanproduct)}
  style={{ cursor: 'pointer' }}
>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
              >
                <path
                  d="M30.8781 16.4696C30.1912 15.7827 29.0777 15.7827 28.3908 16.4696L23.7438 21.1166L19.0961 16.469C18.4093 15.7821 17.2957 15.7821 16.6089 16.469C15.922 17.1558 15.922 18.2694 16.6089 18.9562L21.2565 23.6039L16.6118 28.2486C15.9249 28.9355 15.9249 30.049 16.6118 30.7359C17.2986 31.4227 18.4122 31.4227 19.099 30.7359L23.7438 26.0911L28.3879 30.7353C29.0748 31.4221 30.1884 31.4221 30.8752 30.7353C31.562 30.0485 31.562 28.9349 30.8752 28.248L26.231 23.6039L30.8781 18.9568C31.5649 18.27 31.5649 17.1564 30.8781 16.4696Z"
                  fill="#828282"
                />
              </svg>
            </h6>
            <h4>
             
            {/* {calculateTotalPrice()} */}
            </h4>
            {/* <button onClick={() => handleRemoveProduct(index)}>Delete</button> */}
          </div>

          
        );
      })}
      </Col>

<Col lg={4}>
              <MyCartCheckoutBox subtotal={calculateTotalPrice()} shippingFee={shippingFee}  />
            </Col>
      </Row>
    </>
  );
};

export default AmericonProductCart;
