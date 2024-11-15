import React, { useState } from "react";
import ProfileComponent from "./component/Profile_h";
import ContactComponent from "./component/Contact_h";
import SubscribeComponent from "./component/Subscription_h";
import VerifyComponent from "./component/Verify_h";
import PasswordComponent from "./component/Password_h";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import Header1 from "../Header/Header2";
import CloudinaryUpload from "../cloundanary/CloudinaryUpload";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const openTab = (event, tabName) => {
    setActiveTab(tabName);
  };

  const navigate = useNavigate();

  
  const handleCallbackResume=(e)=>{  
    console.log(e,"Clod")

  }

  return (
    <>
      <Header1 />
      <div className="container account--setting--container--pad--h">
        <div className="account--setting--container">
          <div className="row account--setting--row--h">
            <div className="col-lg-4 account--setting--left--h account--setting--left--h--alt">
              <h1>Account Setting</h1>
              <div className="list-group">
                <a
                  href="#"
                  className={`list-group-item account--setting--link--h list-group-item-action d-flex align-items-center tablinks ${
                    activeTab === "Profile" ? "active" : ""
                  }`}
                  onClick={(e) => openTab(e, "Profile")}
                >
                  <div className="account--setting--logo">
                    <img src={require("../img/profile_h.png")} alt="" />
                  </div>
                  Profile
                </a>
                <a
                  href="#"
                  className={`list-group-item account--setting--link--h list-group-item-action d-flex align-items-center tablinks ${
                    activeTab === "Contact" ? "active" : ""
                  }`}
                  onClick={(e) => openTab(e, "Contact")}
                >
                  <div className="account--setting--logo">
                    <img src={require("../img/contact_h.png")} alt="" />
                  </div>
                  Contact
                </a>
                <a
                  href="#"
                  className={`list-group-item account--setting--link--h list-group-item-action d-flex align-items-center tablinks ${
                    activeTab === "Subscription" ? "active" : ""
                  }`}
                  onClick={(e) => openTab(e, "Subscription")}
                >
                  <div className="account--setting--logo">
                    <img src={require("../img/subscribe_h.png")} alt="" />
                  </div>
                  Subscription
                </a>
                <a
                  href="#"
                  className={`list-group-item account--setting--link--h list-group-item-action d-flex align-items-center tablinks ${
                    activeTab === "Verification" ? "active" : ""
                  }`}
                  onClick={(e) => openTab(e, "Verification")}
                >
                  <div className="account--setting--logo">
                    <img src={require("../img/verify_h.png")} alt="" />
                  </div>
                  Verification
                </a>
                <a
                  href="#"
                  className={`list-group-item account--setting--link--h list-group-item-action d-flex align-items-center tablinks ${
                    activeTab === "Password" ? "active" : ""
                  }`}
                  onClick={(e) => openTab(e, "Password")}
                >
                  <div className="account--setting--logo">
                    <img src={require("../img/changepass_h.png")} alt="" />
                  </div>
                  Change Password
                </a>
              </div>
            </div>

            <div
              className={`col-lg-8 account--setting--right--h tabcontent ${
                activeTab === "Profile" ? "d-block" : "d-none"
              }`}
              id="Profile"
            >
              <ProfileComponent />
            </div>

            <div
              className={`col-lg-8 account--setting--right--h tabcontent ${
                activeTab === "Contact" ? "d-block" : "d-none"
              }`}
              id="Contact"
            >
              <ContactComponent />
            </div>

            <div
              className={`col-lg-8 account--setting--right--h tabcontent ${
                activeTab === "Subscription" ? "d-block" : "d-none"
              }`}
              id="Subscription"
            >
              <SubscribeComponent />
            </div>

            <div
              className={`col-lg-8 account--setting--right--h tabcontent ${
                activeTab === "Verification" ? "d-block" : "d-none"
              }`}
              id="Verification"
            >
              <VerifyComponent />
            </div>

            <div
              className={`col-lg-8 account--setting--right--h tabcontent ${
                activeTab === "Password" ? "d-block" : "d-none"
              }`}
              id="Password"
            >
              <PasswordComponent />
            </div>
          </div>
        </div>
      </div>
      <Footerah />
    </>
  );
};

export default AccountSettings;
