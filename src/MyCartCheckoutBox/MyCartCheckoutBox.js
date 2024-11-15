import React from 'react';

const MyCartCheckoutBox = ({ subtotal, shippingFee }) => {
  const total = subtotal + shippingFee;
  return (
    <>
      <div className="mycart-order-summary">

        <h4>Order Summary</h4>
        <div className="ordersummary-subtotal">
          <h6>Subtotal</h6>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="ordersummary-subtotal">
          <h6>Shipping</h6>
          <p>{shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}</p>
        </div>
        <input type="text" name="" id="" placeholder="Add coupon code here..." />
        <div className="prod-order-total-txt">
          <h5>Total</h5>
          <h5>${total}</h5>
        </div>
        <a href="#">Checkout</a>
      </div>
    </>
  );
};

export default MyCartCheckoutBox;
