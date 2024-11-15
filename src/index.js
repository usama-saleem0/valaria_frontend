import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './features/store';
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style_h.css"
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root'));


const stripePromise = loadStripe('pk_test_51ONGSUJf5CYoJPVsmhVV5W3GMEu0dVMj0RVrroS6aISJLVGYrMLe1D7LziLXPY3WgLsJRZOprKbUQzCb2kbVHWMm00dDxogEMK');
root.render(
  <React.StrictMode>
       <Provider store={store}>
       <GoogleOAuthProvider clientId="733122044815-rqhr6pkehstgmuktbmk3c9hm44h5hgm7.apps.googleusercontent.com">
       <Elements stripe={stripePromise}>
<App />
</Elements>
</GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
