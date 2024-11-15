import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';



const SubscribeComponent = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Call the backend to create a payment intent
    const { clientSecret } = await fetch('/createpaymentt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }) // Amount in cents ($10)
    }).then(res => res.json());

    const cardElement = elements.getElement(CardElement);
    
    // Confirm the card payment with Stripe
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
      }
    }
  };


  return (
    <>
      <h1 className="account-setting-right-title">Your account subscription</h1>
      <div className="setting--subscription--container--h">
        <div className="col-lg-9 setting--subscribe--card d-flex align-items-center justify-content-between">
          <div className="row setting--subscribe--card--container align-items-center">
            <div className="setting--subscribe--card--one col-lg-5 d-flex flex-column align-items-center">
              <h1>1 Month</h1>
              <p onClick={handleSubmit}>subscription</p>
            </div>
            <div className="setting--subscribe--card--two col-lg-5">
              <h1>$34.95/m</h1>
              <p>Active until Dec 21, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <a className="account--setting--right--h--a subscribe">
        Change Plan or Cancel Subcription
      </a>
    </>
  );
};
export default SubscribeComponent;
