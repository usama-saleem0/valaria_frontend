import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import HomeSelectOption from "../Homeselectoption/HomeSelectOption";
import HeaderMainLogo from "../img/header_logo_img.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";

const RmsHeader = () => {


    const [panelWidth, setPanelWidth] = useState("0");

    const openNav = () => {
      setPanelWidth("100%");
    };
  
    const closeNav = () => {
      setPanelWidth("0");
    };


    const navigate = useNavigate();

    const cart = () => navigate("/mycart");
    const login = () => navigate("/employerlogin");

    const [isSearchByName, setIsSearchByName] = useState(false);

    const toggleSearchMode = () => {
        setIsSearchByName(!isSearchByName);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [clicked, setClicked] = useState(false);

    const handleToggleClick = () => {
        setClicked(!clicked);
    };


    const home = () => navigate("/");
    const about = () => navigate("/About");
    const newsletter = () => navigate("/Newsletter");
    const job = () => navigate("/Viewjob");
    const shop = () => navigate("/Shop");
    const contact = () => navigate("/Contactus");
    const faq = () => navigate("/FAQ");



    return (
        <>
            <section className="rms_header">
                <Container>
                    <Row className="rms--header--row">
                        <Col lg={2}>
                            <div className="rms_header_logo">
                                <div className="rms_header_logo--cont">
                                    <img src={require("../img/work_img_h.png")} alt="img" />
                                </div>
                                <a href="#">
                                    <input onClick={toggleMenu} type="checkbox" id="checkbox" />
                                    <label
                                        htmlFor="checkbox"
                                        className={`toggle rms--toggle ${clicked ? "clicked" : ""}`}
                                        onClick={handleToggleClick}
                                    >
                                        <div className="bars"></div>
                                        <div className="bars"></div>
                                        <div className="bars"></div>
                                    </label>
                                </a>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="header_nav">
                                <div
                                    className={`search-stations-input search-stations-input--rms ${isSearchByName ? "full-width" : ""
                                        }`}
                                >
                                    {isSearchByName ? (
                                        <input
                                            type="search"
                                            name=""
                                            id=""
                                            placeholder="Search News Director..."
                                        />
                                    ) : (
                                        <>
                                            <HomeSelectOption className="select-station-drop--rms" />
                                            <input
                                                className=""
                                                type="search"
                                                name=""
                                                id=""
                                                placeholder="Search Stations..."
                                            />
                                        </>
                                    )}
                                    <span>
                                        <RiSearchLine />
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="header_end">
                                <div className="header--end--logo">
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
                                        <span className="header_cart_number">2</span>
                                    </a>{" "}
                                </div>
                                <a onClick={login} className="login-btn">
                                    Login
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {isOpen && (
                <ul className="rms--header--slide">
                    <li onClick={home}>Home</li>
                    <li onClick={about}>About</li>
                    <li onClick={newsletter}>Newsletter</li>
                    <li onClick={job}>Jobs</li>
                    <li onClick={shop}>Shop</li>
                    <li onClick={contact}>Contact</li>
                    <li onClick={faq}>FAQ</li>
                </ul>
            )}

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
                        <a href="#" onClick={home}>Home</a>
                        <a href="#" onClick={about}>About</a>
                        <a href="#" onClick={newsletter}>Newsletter</a>
                        <a href="#" onClick={job}>Jobs</a>
                        <a href="#" onClick={shop}>Shop</a>
                        <a href="#" onClick={contact}>Contact</a>
                        <a href="#" onClick={faq}>FAQ</a>
                        <a href="#" onClick={login}>Login</a>
                    </div>
                    </div>
                </div>
                </Container>
            </header>

        </>
    );
};

export default RmsHeader;
