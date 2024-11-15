import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap';
import CreditCardImage from "../img/credit-subscription.jpg";
import Header from '../Header/Header';
import Footerah from '../footerah/Footerah';
import Header1 from '../Header/Header2';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';  
import { baseurl } from '../baseurl';
import { toast, ToastContainer } from 'react-toastify';

const SubcriptionPage = () => {


  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const [error, setError] = useState(null);
  const [userdata, setUser] = useState({});




  const handleSubmits = () => {

    console.log('yes')

    setshowModal(true)

  }



  const handleSelectChanges = (amount , month) => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user)
    }
    else{
      toast.error('Please Complete your Registration for Subscription')
      return;
    }


    localStorage.setItem('amount', amount);
    localStorage.setItem('month', month);
    setshowModal(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }



    

    // const amount = localStorage.getItem('amount');
    // const month = localStorage.getItem('month');

    const amount = parseFloat(localStorage.getItem('amount'));

    const month = parseInt(localStorage.getItem('month'), 10);

    // const amount = 34.9


    console.log(amount, month)

    

    // Call the backend to create a payment intent
    const { clientSecret } = await fetch(`${baseurl}/createpaymentt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount,
        month,
        userId: userdata.id,
        

       }) // Amount in cents ($10)
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
        setshowModal(false);
        setPaymentSuccess(true);
        
        setTimeout(() => {
         toast.success('Payment Successfully')
        }, 1000);

        
      }
    }
  };
  return (
    <>
    {/* <Header1/> */}
    <Header/>
    <ToastContainer/>
  

   

    <Modal
        show={showModal}
       
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Body style={{backgroundColor: 'white' , border:'3px solid green' , borderRadius:'20px', height:'300px' , padding:'50px'}}>

        <Row className='hello-row'>
          <Col lg={12} className='text-center' style={{paddingBottom:'30px'}}>

          <h1>
            Pay With Strip
          </h1>
          </Col>
          

         
          <Col lg={12} className='hello-col-1'>
            <form onSubmit={handleSubmit} className='hello-form-1'>
              <CardElement />
              <Col lg={12}  className='text-center mt-4' >
              <button type="submit" disabled={!stripe}>Pay</button>
              
              </Col>
            </form>
            {error && <div>{error}</div>}
            {paymentSuccess && <div>Payment Successful!</div>}
          </Col>
        </Row>
  
      
        </Modal.Body>
      </Modal>


      

      <div className="subcription-page-sec">
        <Container>
        {/* <div className='strpe'>

<CardElement /> 

</div> */}
          <Row>
            <Col lg={12}>
              <div className="subcribe-now-box">
                <Row>
                  <Col lg={4}>
                    <div className="subscribe-now-txt">
                      <h3>Subscribe Now!</h3>
                      <p>Subscribe today to get instant access to all the latest television newsroom job openings, exclusively from our most highly rated stations.</p>
                      <p>As a subscriber, you will also have access to:</p>
                      <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.78931 15.5609C3.53822 15.5831 0.0177806 12.0892 6.77357e-05 7.83811C-0.0176452 3.51173 3.4408 0.0267191 7.77603 0.000149787C12.0271 -0.0264196 15.552 3.48516 15.5653 7.76283C15.583 12.0582 12.1068 15.5432 7.78931 15.5609ZM7.07637 8.60419C7.00995 8.51563 6.98338 8.45806 6.9391 8.41821C6.45199 7.92667 5.96046 7.43957 5.47335 6.95246C5.26965 6.74876 5.0261 6.66463 4.74712 6.74434C4.21574 6.8949 4.06075 7.53256 4.45929 7.93553C5.13238 8.61305 5.8099 9.29057 6.48742 9.96366C6.88596 10.3622 7.26236 10.3622 7.66532 9.96366C8.5244 9.10458 9.38348 8.2455 10.2426 7.38643C10.526 7.10302 10.8049 6.82404 11.0883 6.54064C11.292 6.33251 11.3585 6.08896 11.2743 5.80998C11.1105 5.28745 10.4772 5.1546 10.0743 5.55757C9.11778 6.50964 8.16571 7.46171 7.21365 8.41821C7.16936 8.45806 7.14279 8.51563 7.07637 8.60419Z" fill="#89C400" />
                        </svg> Station Ratings</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.78931 15.5609C3.53822 15.5831 0.0177806 12.0892 6.77357e-05 7.83811C-0.0176452 3.51173 3.4408 0.0267191 7.77603 0.000149787C12.0271 -0.0264196 15.552 3.48516 15.5653 7.76283C15.583 12.0582 12.1068 15.5432 7.78931 15.5609ZM7.07637 8.60419C7.00995 8.51563 6.98338 8.45806 6.9391 8.41821C6.45199 7.92667 5.96046 7.43957 5.47335 6.95246C5.26965 6.74876 5.0261 6.66463 4.74712 6.74434C4.21574 6.8949 4.06075 7.53256 4.45929 7.93553C5.13238 8.61305 5.8099 9.29057 6.48742 9.96366C6.88596 10.3622 7.26236 10.3622 7.66532 9.96366C8.5244 9.10458 9.38348 8.2455 10.2426 7.38643C10.526 7.10302 10.8049 6.82404 11.0883 6.54064C11.292 6.33251 11.3585 6.08896 11.2743 5.80998C11.1105 5.28745 10.4772 5.1546 10.0743 5.55757C9.11778 6.50964 8.16571 7.46171 7.21365 8.41821C7.16936 8.45806 7.14279 8.51563 7.07637 8.60419Z" fill="#89C400" />
                        </svg> Email updates when new jobs become available</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.78931 15.5609C3.53822 15.5831 0.0177806 12.0892 6.77357e-05 7.83811C-0.0176452 3.51173 3.4408 0.0267191 7.77603 0.000149787C12.0271 -0.0264196 15.552 3.48516 15.5653 7.76283C15.583 12.0582 12.1068 15.5432 7.78931 15.5609ZM7.07637 8.60419C7.00995 8.51563 6.98338 8.45806 6.9391 8.41821C6.45199 7.92667 5.96046 7.43957 5.47335 6.95246C5.26965 6.74876 5.0261 6.66463 4.74712 6.74434C4.21574 6.8949 4.06075 7.53256 4.45929 7.93553C5.13238 8.61305 5.8099 9.29057 6.48742 9.96366C6.88596 10.3622 7.26236 10.3622 7.66532 9.96366C8.5244 9.10458 9.38348 8.2455 10.2426 7.38643C10.526 7.10302 10.8049 6.82404 11.0883 6.54064C11.292 6.33251 11.3585 6.08896 11.2743 5.80998C11.1105 5.28745 10.4772 5.1546 10.0743 5.55757C9.11778 6.50964 8.16571 7.46171 7.21365 8.41821C7.16936 8.45806 7.14279 8.51563 7.07637 8.60419Z" fill="#89C400" />
                        </svg> Application tips for individual stations</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.78931 15.5609C3.53822 15.5831 0.0177806 12.0892 6.77357e-05 7.83811C-0.0176452 3.51173 3.4408 0.0267191 7.77603 0.000149787C12.0271 -0.0264196 15.552 3.48516 15.5653 7.76283C15.583 12.0582 12.1068 15.5432 7.78931 15.5609ZM7.07637 8.60419C7.00995 8.51563 6.98338 8.45806 6.9391 8.41821C6.45199 7.92667 5.96046 7.43957 5.47335 6.95246C5.26965 6.74876 5.0261 6.66463 4.74712 6.74434C4.21574 6.8949 4.06075 7.53256 4.45929 7.93553C5.13238 8.61305 5.8099 9.29057 6.48742 9.96366C6.88596 10.3622 7.26236 10.3622 7.66532 9.96366C8.5244 9.10458 9.38348 8.2455 10.2426 7.38643C10.526 7.10302 10.8049 6.82404 11.0883 6.54064C11.292 6.33251 11.3585 6.08896 11.2743 5.80998C11.1105 5.28745 10.4772 5.1546 10.0743 5.55757C9.11778 6.50964 8.16571 7.46171 7.21365 8.41821C7.16936 8.45806 7.14279 8.51563 7.07637 8.60419Z" fill="#89C400" />
                        </svg> News Director’s emails</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M7.78931 15.5609C3.53822 15.5831 0.0177806 12.0892 6.77357e-05 7.83811C-0.0176452 3.51173 3.4408 0.0267191 7.77603 0.000149787C12.0271 -0.0264196 15.552 3.48516 15.5653 7.76283C15.583 12.0582 12.1068 15.5432 7.78931 15.5609ZM7.07637 8.60419C7.00995 8.51563 6.98338 8.45806 6.9391 8.41821C6.45199 7.92667 5.96046 7.43957 5.47335 6.95246C5.26965 6.74876 5.0261 6.66463 4.74712 6.74434C4.21574 6.8949 4.06075 7.53256 4.45929 7.93553C5.13238 8.61305 5.8099 9.29057 6.48742 9.96366C6.88596 10.3622 7.26236 10.3622 7.66532 9.96366C8.5244 9.10458 9.38348 8.2455 10.2426 7.38643C10.526 7.10302 10.8049 6.82404 11.0883 6.54064C11.292 6.33251 11.3585 6.08896 11.2743 5.80998C11.1105 5.28745 10.4772 5.1546 10.0743 5.55757C9.11778 6.50964 8.16571 7.46171 7.21365 8.41821C7.16936 8.45806 7.14279 8.51563 7.07637 8.60419Z" fill="#89C400" />
                        </svg> Weekly Newsletter updates</li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <Row>
                      <Col lg={4} md={4}>
                        <div className="subcription-box">
                          <h4>1 Month</h4>
                          <h6>subcription</h6>
                          <h5>$34.95/m</h5>
                          <a onClick={() => handleSelectChanges(35 , 1)}>Subscribe</a>
                        </div>
                      </Col>
                      <Col lg={4} md={4}>
                        <div className="subcription-box recommend-box">
                          <h4>2 Months</h4>
                          <h6>subcription</h6>
                          <h5>$19.95/m</h5>
                          <span>Save more than 30%</span>
                          <a onClick={() => handleSelectChanges(40 , 2)}>Subscribe</a>
                        </div>
                      </Col>
                      <Col lg={4} md={4}>
                        <div className="subcription-box best-value-box">
                          <h4>6 Months</h4>
                          <h6>subcription</h6>
                          <h5>$9.95/m </h5>
                          <span>Save more than 40%</span>
                          <a onClick={() => handleSelectChanges(60 , 6)}>Subscribe</a>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="new-subscription-discount">
                          <p>New Subscribers! <span>Get 50% off your first payment! </span> Use this Discount Code:</p>
                          <a href="#">MYSTATION</a>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                  <div className="subscribtion-credit-box">
                  <Row>
                  <Col lg={8}>
                    <div className="station-secure-box">
                      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="39" viewBox="0 0 29 39" fill="none">
                        <path d="M25.8845 38.5818C18.2128 38.5818 10.5412 38.5818 2.86952 38.5818C2.52336 38.4795 2.16784 38.4145 1.84975 38.2564C0.596087 37.6336 0.0253906 36.5926 0.0253906 35.2261C0.0253906 28.8215 0.0253906 22.4076 0.0253906 16.003C0.0253906 15.0642 0.259283 14.8318 1.1855 14.8318C1.84975 14.8318 2.52336 14.8318 3.21568 14.8318C3.21568 13.8093 3.21568 12.8332 3.21568 11.8572C3.21568 8.82688 4.20738 6.15907 6.34983 4.00252C9.27816 1.05584 12.8333 -0.00384486 16.903 0.888523C21.8335 1.9761 25.4448 6.38217 25.5103 11.4482C25.529 12.4335 25.5196 13.4282 25.5196 14.4135C25.5196 14.5436 25.5196 14.6738 25.5196 14.8318C26.2962 14.8318 27.0165 14.8318 27.7369 14.8318C28.3918 14.8318 28.7099 15.1385 28.7099 15.7799C28.7099 22.2961 28.7099 28.8215 28.7099 35.3377C28.7099 36.4159 28.3076 37.3455 27.4001 37.9497C26.9604 38.2472 26.3897 38.3773 25.8845 38.5818ZM20.7295 14.8225C20.7295 13.6791 20.7482 12.5637 20.7295 11.4575C20.7108 10.1004 20.2711 8.87336 19.4197 7.82297C17.8105 5.83373 15.6962 4.97854 13.1701 5.47121C10.616 5.96387 8.95071 7.5441 8.23033 10.0353C7.79061 11.5784 8.05257 13.1865 8.01515 14.7574C8.01515 14.776 8.04321 14.7946 8.07128 14.8225C12.272 14.8225 16.4727 14.8225 20.7295 14.8225ZM14.3396 32.2608C14.8167 32.2608 15.2845 32.2701 15.7617 32.2608C16.5101 32.2516 16.8282 31.8797 16.744 31.1547C16.585 29.8068 16.4353 28.4497 16.2949 27.1018C16.2856 26.9903 16.3417 26.8323 16.4259 26.7579C17.2773 26.005 17.6421 25.0847 17.5299 23.9414C17.3521 22.1473 15.4155 20.7902 13.6566 21.255C12.3936 21.5896 11.561 22.3983 11.2803 23.6625C11.009 24.8616 11.3832 25.9027 12.3188 26.7393C12.4123 26.823 12.4778 26.9903 12.4685 27.1111C12.3281 28.4776 12.1691 29.8347 12.0194 31.2012C11.9445 31.8611 12.2626 32.2423 12.9456 32.2516C13.3947 32.2701 13.8718 32.2608 14.3396 32.2608Z" fill="#828282" />
                      </svg>
                      <p>Rate My Station is a secured website that never captures or stores credit card information.
                        All credit card transactions are handled by a 3rd party merchant processor (Stripe.com).
                      </p>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="subscription-credit">
                      <p>We accept all major credit cards.  </p>
                      <img src={CreditCardImage} alt="img" />
                    </div>
                  </Col>
                  </Row>
                  </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footerah/>
    </>
  )
}

export default SubcriptionPage