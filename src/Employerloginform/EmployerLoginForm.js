import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployerLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState(''); // State to store user details
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/login`, { username, password });
      

      if (response.data.message === 'Login successful') {
        setUser(response.data.user); // Store user details
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        toast.success(response.data.message );


        if(response.data.user.type === 'Employee'){
          navigate("/kabcah1");

        }

        else if (response.data.user.type === 'Admin'){
          navigate("/Dashbord/Dash6ah");

        }
        else{
          navigate("/kabc2");

        }
        
        // navigate("/kabcah1"); // Navigate to the user profile page on success
        // navigate("/kabcah1", { state: { user: response.data.user } });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error('Invalid username or password', error);

    }
  };

  const handleForgotPassword = () => {
    navigate("/ForgetPassword"); // Navigate to the ForgetPassword page
  };
  return (
    <>
      <ToastContainer />
      <div className="employer-login-form">
        <form onSubmit={handleSubmit}>
          <div className="employer-inputfield">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              placeholder="Type your Email here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="employer-inputfield">
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                placeholder="Type your password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: "30px" }}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="employer-login-btns">
            <a href="#" className='employerloginbtn' onClick={handleSubmit}> Login  </a>
             <a href="#" className="employerforgotbtn" onClick={handleForgotPassword}> Forgot password? </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployerLoginForm;
