import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderMainLogo from "../img/header_logo_img.png";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../baseurl";
import axios from 'axios';
import NotificationBell from "./Message_Component";
import Notifications from "./Message_Notifications";


const Header1 = () => {
  const navigate = useNavigate();

  // State and functions for side panel
  const [panelWidth, setPanelWidth] = useState("0");

  const [user_id,setuser_id]=useState('')

  const openNav = () => {
    setPanelWidth("100%");
  };

  const closeNav = () => {
    setPanelWidth("0");
  };

  const home = () => navigate("/");
  const about = () => navigate("/About");
  const newsletter = () => navigate("/Newsletter");
  const job = () => navigate("/Viewjob");
  const shop = () => navigate("/Shop");
  const contact = () => navigate("/Contactus");
  const faq = () => navigate("/FAQ");
  const cart = () => navigate("/mycart");
  // const login = () => navigate("/employerlogin");
  // const userprofile = () => navigate("/kabcah1");
  const usersetting = () => navigate("/accountsettingh");
  const [cartCount, setCartCount] = useState(0);
  const [userDataId, setuserDataId] = useState(null);



  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };



  useEffect(() => {
    const storeData = getUserFromLocalStorage();

    if (storeData) {
      setuserDataId(storeData);
    }

    console.log("cccccc", userDataId);

    const fetchCartCount = async () => {
      try {
        const userId = getUserFromLocalStorage();
        setuser_id(userId)
        const response = await axios.get(`${baseurl}/getcart/${userId.id}`);
        setCartCount(response.data.length);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartCount();
  }, []);
  const userData = localStorage.getItem("userData");

  const userprofile = () => {
    const userObject = JSON.parse(userData);
    const userType = userObject.type;

    {
      userType === "Employee" ? navigate("/kabcah1") : navigate("/kabc2");
    }
  };

    
  const subscribe = () => {


    navigate("/subscription");
  };

  const login = () => {
    localStorage.removeItem("userData");

    navigate("/employerlogin");
  };

  return (
    <>
      <header className="header_main">
        <Container className="header--2--main--cont">
          <Row className="header--2--main--row">
            <Col lg={2}>
              <div className="header-logo">
                <img onClick={home} src={HeaderMainLogo} alt="img" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="header_nav">
                <ul>
                  <li onClick={home}>Home</li>
                  <li onClick={about}>About</li>
                  <li onClick={newsletter}>Newsletter</li>
                  <li onClick={job}>Jobs</li>
                  <li onClick={shop}>Shop</li>
                  <li onClick={contact}>Contact</li>
                  <li onClick={faq}>FAQ</li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="header_end">
                <div className="header--end--logo">
                  {/* <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >   
                      <path
                        d="M25.4973 13.0506C25.4414 18.9956 21.0944 24.1521 15.268 25.122C12.3793 25.6034 9.66495 25.122 7.10415 23.7055C6.99948 23.6497 6.839 23.6357 6.72736 23.6776C5.29694 24.187 3.86652 24.7173 2.4361 25.2266C1.71042 25.4848 0.998699 25.0522 0.928922 24.2986C0.907989 24.1032 0.963811 23.8799 1.03359 23.6915C1.529 22.303 2.03837 20.9144 2.54774 19.5259C2.60356 19.3654 2.61054 19.2468 2.51983 19.0933C-1.35277 12.2552 2.08024 3.64473 9.58819 1.32815C16.4821 -0.800036 23.8017 3.55402 25.1833 10.6224C25.3437 11.4248 25.3996 12.2412 25.4973 13.0506Z"
                        fill="#828282"
                      />
                    </svg>
                    <span className="header_cart_number">4</span>
                  </a> */}
            
                  <Notifications/>
            

                  {/* <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="25"
                      viewBox="0 0 22 25"
                      fill="none"
                    >
                      <path
                        d="M11.3544 21.612C8.60862 21.612 5.86288 21.612 3.11713 21.612C1.93638 21.612 1.02113 20.8994 0.790574 19.7885C0.657828 19.1527 0.790574 18.5658 1.15388 18.0209C1.7198 17.1825 2.27873 16.3441 2.83067 15.4917C2.90753 15.3729 2.95643 15.2052 2.95643 15.0585C2.96342 12.9835 2.95643 10.9085 2.96342 8.83343C2.96342 5.15147 5.21312 2.02145 8.71343 0.826737C13.3176 -0.73827 18.4528 2.1542 19.4729 6.9121C19.6126 7.55487 19.6755 8.22559 19.6825 8.88233C19.7104 10.9364 19.6894 12.9975 19.6964 15.0515C19.6964 15.2052 19.7523 15.3799 19.8362 15.5057C20.3741 16.3301 20.9191 17.1475 21.471 17.965C22.002 18.7475 22.0928 19.5719 21.6387 20.4033C21.1916 21.2417 20.444 21.612 19.5078 21.612C16.79 21.612 14.0722 21.612 11.3544 21.612ZM8.2034 22.7438C8.58068 24.0014 9.93609 24.9586 11.3264 24.9586C12.7238 24.9586 14.0792 24.0014 14.4495 22.7438C12.3605 22.7438 10.2854 22.7438 8.2034 22.7438Z"
                        fill="#828282"
                      />
                    </svg>
                    <span className="header_cart_number">2</span>
                  </a> */}

                  <a onClick={cart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="30"
                      viewBox="0 0 33 30"
                      fill="none"
                    >
                      <path
                        d="M0.403229 2.02138C0.403229 1.85254 0.403229 1.68369 0.403229 1.51485C0.656496 0.974544 1.08705 0.805699 1.67801 0.814142C3.07942 0.839468 4.48083 0.822584 5.89068 0.822584C6.50696 0.822584 6.81932 1.05897 6.98817 1.65836C7.09792 2.03826 7.20767 2.42661 7.31742 2.81495C7.48626 3.41435 7.66355 4.01375 7.83239 4.61315C7.99279 4.61315 8.11943 4.61315 8.24606 4.61315C16.0214 4.61315 23.7966 4.61315 31.5719 4.6047C32.1545 4.6047 32.5681 4.77355 32.813 5.30541C32.813 5.47425 32.813 5.6431 32.813 5.81194C32.7707 5.91325 32.7201 6.023 32.6863 6.1243C31.4706 10.3707 30.255 14.6172 29.0393 18.8636C28.8282 19.5897 28.575 19.7754 27.8152 19.7754C22.505 19.7754 17.2033 19.7754 11.8931 19.7754C11.8087 19.7754 11.7243 19.7669 11.6398 19.7754C11.5723 19.7838 11.4879 19.8092 11.4626 19.8598C11.2431 20.2566 10.9898 20.6534 11.2346 21.1346C11.4626 21.582 11.8509 21.6749 12.3237 21.6749C14.9323 21.6665 17.5325 21.6664 20.1412 21.6664C22.7583 21.6664 25.3753 21.6664 27.9924 21.6664C28.5834 21.6664 29.0139 22.0548 29.0224 22.5951C29.0308 23.1523 28.6003 23.5491 27.9924 23.5575C27.6463 23.5575 27.3002 23.5575 26.9456 23.5575C26.228 23.5575 25.502 23.5575 24.7844 23.5575C26.6586 24.0387 27.2326 25.5921 27.106 26.698C26.9372 28.1416 25.7552 29.2138 24.337 29.2391C22.8849 29.2645 21.703 28.2514 21.4582 26.7824C21.2218 25.3473 22.1166 24.0978 23.7966 23.566C20.9179 23.566 18.0728 23.566 15.1602 23.566C16.7643 23.9796 17.7014 25.2206 17.5494 26.6642C17.3974 28.0825 16.2324 29.1885 14.831 29.2307C13.3621 29.2813 12.1464 28.2852 11.8931 26.8078C11.6398 25.3473 12.5178 24.1147 14.2738 23.5491C13.4718 23.5491 12.7458 23.5575 12.0197 23.5491C10.7534 23.5322 9.65591 22.6711 9.32667 21.447C9.09028 20.5858 9.2929 19.8007 9.72345 19.0578C9.85009 18.8383 9.87541 18.6357 9.79943 18.374C8.55842 14.0684 7.32586 9.76291 6.09329 5.45737C5.83158 4.53716 5.56987 3.6254 5.29972 2.69676C4.06716 2.69676 2.86836 2.67987 1.66956 2.7052C1.08705 2.74741 0.656496 2.57013 0.403229 2.02138Z"
                        fill="#828282"
                      />
                    </svg>
                    <span className="header_cart_number">{cartCount}</span>
                  </a>
                </div>

                <nav className="helo-drop">
                  <label for="touch">
                    <div className="user--pic--header">
                      <img
                        onClick={userprofile}
                        src={require("../img/director-drop_h.png")}
                      />
                    </div>
                    <span className="drop-out">{userDataId ? userDataId.username :''}</span>
                  </label>
                  <input type="checkbox" id="touch" />

                  <ul class="slide">
                    <li>
                      <a onClick={userprofile}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a onClick={usersetting} href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Setting
                      </a>
                    </li>
                    <hr/>

                    <li>
                        <a onClick={subscribe} href="#">
                          <svg
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                              stroke="#374151"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </svg>
                          Subscribtion
                        </a>
                      </li>
                    <hr />
                    <li>
                      <a onClick={login} href="#">
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8"
                            stroke="#374151"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </svg>
                        Logout
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <header className="header_main_Mobile">
        <Container>
          <div className="header_mob_flex">
            <div className="header-logo">
              <img onClick={home} src={HeaderMainLogo} alt="img" />
            </div>
            <div className="header_nav">
              <button onClick={openNav}>
                <input type="checkbox" id="checkbox" />
                <label for="checkbox" class="toggle">
                  <div class="bars"></div>
                  <div class="bars"></div>
                  <div class="bars"></div>
                </label>
              </button>
              <div
                id="mySidepanel"
                className="sidepanel"
                style={{ width: panelWidth }}
              >
                <a href="javascript:void(0)" className="closebtn">
                  <div class="toggle" onClick={closeNav}>
                    <div class="bars" id="barz1"></div>
                    <div class="bars" id="barz3"></div>
                  </div>
                </a>
                <a href="#" onClick={home}>
                  Home
                </a>
                <a href="#" onClick={about}>
                  About
                </a>
                <a href="#" onClick={newsletter}>
                  Newsletter
                </a>
                <a href="#" onClick={job}>
                  Jobs
                </a>
                <a href="#" onClick={shop}>
                  Shop
                </a>
                <a href="#" onClick={contact}>
                  Contact
                </a>
                <a href="#" onClick={faq}>
                  FAQ
                </a>
                <a href="#" onClick={login}>
                  Login
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header1;
