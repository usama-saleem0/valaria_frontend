import React, { useEffect, useState } from "react";

import adminz from "../img/admin.png";
import Btn from "./btn";
import kabc from "../img/kabc.png";
import axios from "axios";
import { baseurl } from "../baseurl";

const Dash8ah = () => {
  const cards = Array.from({ length: 9 }); // Create an array with 8 elements


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropbtn')) {
      setDropdownOpen(false);
    }
  };

  const [userdata, setUser] = useState([]);
  const [directordata, setDirector] = useState([]);



  useEffect(() => {
   

      fetchUserData();
      fetchUserDatas();
  
  }, []);


 

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseurl}/newsroomusersunauthorize`);
      console.log('response', response)
      setUser(response.data.message);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };



  const fetchUserDatas = async () => {
    try {
      const response = await axios.get(`${baseurl}/getnewdirectorsunauthorize`);
      console.log('response', response)
      setDirector(response.data.message);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };


  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <>
      <section className="ah1">
        <div className="Employees-table">
          <h2>Unauthorized News Director</h2>
        </div>

        <div className="Employees-table-inbox">
          {/* <div className="Employees-box-btn-icon">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <circle cx="11.9488" cy="11.6045" r="11.2534" fill="white" />
                <path
                  d="M11.9487 6.9707C11.4608 6.9707 11.0653 7.36623 11.0653 7.85413V11.1541H7.76477C7.27687 11.1541 6.88135 11.5496 6.88135 12.0375C6.88135 12.5254 7.27687 12.921 7.76477 12.921H11.0653V16.2215C11.0653 16.7094 11.4608 17.1049 11.9487 17.1049C12.4366 17.1049 12.8322 16.7094 12.8322 16.2215V12.921H16.1322C16.6201 12.921 17.0156 12.5254 17.0156 12.0375C17.0156 11.5496 16.6201 11.1541 16.1322 11.1541H12.8322V7.85413C12.8322 7.36623 12.4366 6.9707 11.9487 6.9707Z"
                  fill="#194D79"
                />
              </svg>
              Submit News Director
            </button>
          </div> */}

          <div className="Employees-Search">
            <input type="text" placeholder="Search by Username" />

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.63059 0.571777C3.86405 0.571777 0 4.43582 0 9.20237C0 13.9689 3.86405 17.833 8.63059 17.833C10.629 17.833 12.4687 17.1538 13.9315 16.0137L17.5991 19.6812C18.016 20.0981 18.692 20.0981 19.1089 19.6812C19.5258 19.2643 19.5258 18.5884 19.1089 18.1715L15.4414 14.504C16.5818 13.041 17.2612 11.201 17.2612 9.20237C17.2612 4.43582 13.3971 0.571777 8.63059 0.571777ZM2.13509 9.20237C2.13509 5.615 5.04323 2.70687 8.63059 2.70687C12.218 2.70687 15.1261 5.615 15.1261 9.20237C15.1261 12.7897 12.218 15.6979 8.63059 15.6979C5.04323 15.6979 2.13509 12.7897 2.13509 9.20237Z"
                  fill="#828282"
                />
              </svg>
            </button>
          </div>

          <div className="Employees-tabs">
            <div className="filter-box ">
              <div className="filter-box-cont-drop">
                <p>Filter:</p>
                <select name="" id="">
                  <option value="" disabled selected>
                    Workplace
                  </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>
              <div className="filter-box-cont-drop">
                <p>Sort:</p>

                <select name="" id="">
                  <option value="" disabled selected>
                    Newest
                  </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table id="customers">
            <tr>
              <th>
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Workplace
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Created Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Action
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>
            </tr>
            <tbody>
              {userdata.map((userdatas, index) => (
                <tr key={index}>
                  <td>#{index + 1}</td>
                  <td className="gg-td">
                    <div className="admin-dp">
                      <img src={adminz} alt="" />
                    </div>
                    {userdatas.username}
                  </td>
                  <td>{userdatas.type}</td>
                   <td>{formatDate(userdatas.createdAt)}</td>
                  <td>
                    <div className="new-Unauthorized">Unauthorized</div>
                  </td>
                  <td>
                    {/* <Btn /> */}
                    <div className="action_setting_icon">
                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={toggleDropdown} className="dropbtn" width="60" height="35" viewBox="0 0 60 35" fill="none">
                      <rect width="60" height="35" rx="10" fill="#F2F2F2" />
                      <path d="M16.6835 7C17.1416 7.03068 17.4898 7.22707 17.7769 7.57074C18.3816 8.29489 19.1635 8.66311 20.1103 8.63243C20.9838 8.60174 21.6924 8.22739 22.2482 7.55232C22.5536 7.18411 22.9323 7 23.4088 7.03068C23.5432 7.03682 23.6837 7.07364 23.8058 7.1166C24.9787 7.54619 26.0415 8.16602 27.0005 8.96996C27.4892 9.38113 27.6175 9.92118 27.3976 10.5656C26.8234 12.2287 27.7641 13.9593 29.4683 14.3582C29.566 14.3827 29.6638 14.395 29.7615 14.4196C30.3235 14.5423 30.7144 14.9535 30.8244 15.5181C31.0626 16.7823 31.0565 18.0404 30.8182 19.3046C30.7083 19.906 30.2624 20.3417 29.6516 20.4399C27.7152 20.7529 26.6829 22.5326 27.3609 24.3798C27.5869 24.9935 27.4342 25.5643 26.9272 25.9877C26.0782 26.6873 25.1497 27.2458 24.1296 27.6692C23.4699 27.9392 22.8896 27.792 22.4376 27.2335C21.2892 25.8036 19.249 25.7115 18.0457 27.0371C17.9479 27.1414 17.8624 27.2642 17.7769 27.3746C17.3982 27.8533 16.8118 28.0313 16.2376 27.8165C15.0464 27.3808 13.9775 26.761 13.0124 25.9509C12.542 25.552 12.4199 24.9506 12.6764 24.343C13.0246 23.5084 13.0185 22.686 12.6092 21.8821C12.1633 21.0045 11.4364 20.489 10.4652 20.3417C9.64055 20.219 9.24961 19.8508 9.12134 19.0284C8.93198 17.8194 8.96863 16.6166 9.20074 15.4199C9.32902 14.7755 9.77493 14.3766 10.4469 14.2907C11.9739 14.0882 13.0429 12.8485 12.9757 11.3143C12.9635 11.0074 12.878 10.6944 12.7864 10.3999C12.5665 9.73708 12.7192 9.17248 13.2689 8.74289C14.1546 8.05555 15.1198 7.50937 16.1765 7.12274C16.3353 7.06137 16.5125 7.04296 16.6835 7ZM20.0064 21.1334C22.0283 21.1334 23.6654 19.4825 23.6654 17.4389C23.6654 15.4322 22.0161 13.7813 20.0187 13.7813C17.9907 13.7813 16.3414 15.4137 16.3353 17.4267C16.3292 19.4764 17.9662 21.1272 20.0064 21.1334Z" fill="#828282" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M51.31 15.8014C51.7005 16.192 51.7005 16.8251 51.31 17.2157L47.2157 21.31C46.8251 21.7005 46.192 21.7005 45.8014 21.31L41.7071 17.2157C41.3166 16.8251 41.3166 16.192 41.7071 15.8014C42.0976 15.4109 42.7308 15.4109 43.1213 15.8014L46.5085 19.1887L49.8958 15.8014C50.2863 15.4109 50.9195 15.4109 51.31 15.8014Z" fill="#828282" />
                    </svg>
                      {/* <div className="action_setting_dropdown" id="myDropdown" className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>>
                        <ul>
                          <li><a href="#">See Profile</a></li>
                          <li><a href="#">See Rating</a></li>
                          <li><a href="#">Action 3</a></li>
                        </ul>
                      </div> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="Employees-table" style={{ paddingTop: "35px" }}>
          <h2>Unauthorized Newsroom</h2>
        </div>

        <div className="Employees-table-inbox">
          {/* <div className="Employees-box-btn-icon">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <circle cx="11.9488" cy="11.6045" r="11.2534" fill="white" />
                <path
                  d="M11.9487 6.9707C11.4608 6.9707 11.0653 7.36623 11.0653 7.85413V11.1541H7.76477C7.27687 11.1541 6.88135 11.5496 6.88135 12.0375C6.88135 12.5254 7.27687 12.921 7.76477 12.921H11.0653V16.2215C11.0653 16.7094 11.4608 17.1049 11.9487 17.1049C12.4366 17.1049 12.8322 16.7094 12.8322 16.2215V12.921H16.1322C16.6201 12.921 17.0156 12.5254 17.0156 12.0375C17.0156 11.5496 16.6201 11.1541 16.1322 11.1541H12.8322V7.85413C12.8322 7.36623 12.4366 6.9707 11.9487 6.9707Z"
                  fill="#194D79"
                />
              </svg>
              Submit Newsroom
            </button>
          </div> */}

          <div className="Employees-Search">
            <input type="text" placeholder="Search by Username" />

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.63059 0.571777C3.86405 0.571777 0 4.43582 0 9.20237C0 13.9689 3.86405 17.833 8.63059 17.833C10.629 17.833 12.4687 17.1538 13.9315 16.0137L17.5991 19.6812C18.016 20.0981 18.692 20.0981 19.1089 19.6812C19.5258 19.2643 19.5258 18.5884 19.1089 18.1715L15.4414 14.504C16.5818 13.041 17.2612 11.201 17.2612 9.20237C17.2612 4.43582 13.3971 0.571777 8.63059 0.571777ZM2.13509 9.20237C2.13509 5.615 5.04323 2.70687 8.63059 2.70687C12.218 2.70687 15.1261 5.615 15.1261 9.20237C15.1261 12.7897 12.218 15.6979 8.63059 15.6979C5.04323 15.6979 2.13509 12.7897 2.13509 9.20237Z"
                  fill="#828282"
                />
              </svg>
            </button>
          </div>

          <div className="Employees-tabs">
            <div className="filter-box ">
              <div className="filter-box-cont-drop">
                <p>Filter:</p>
                <select name="" id="">
                  <option value="" disabled selected>
                    Workplace
                  </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>
              <div className="filter-box-cont-drop">
                <p>Sort:</p>

                <select name="" id="">
                  <option value="" disabled selected>
                    Newest
                  </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table id="customers">
            <tr>
              <th>
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Type
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Created Date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Status
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Action
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>
            </tr>
            <tbody>
              {directordata.map((director, index) => (
                <tr key={index}>
                  <td>#{index + 1}</td>
                  <td className="gg-td">
                    <div className="admin-dp">
                      <img src={director ? director.image : kabc} alt="" />
                    </div>
                    {director.User ? director.User.username :''}
                  </td>
                  <td>{director.User ? director.User.type :''}</td>
                  {/* <td>June 23, 2022</td> */}
                  <td>{formatDate(director.createdAt)}</td>
                  <td>
                    <div className="new-Unauthorized">Unauthorized</div>
                  </td>
                  <td>
                    {/* <Btn /> */}
                    <div className="action_setting_icon">
                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={toggleDropdown} className="dropbtn" width="60" height="35" viewBox="0 0 60 35" fill="none">
                      <rect width="60" height="35" rx="10" fill="#F2F2F2" />
                      <path d="M16.6835 7C17.1416 7.03068 17.4898 7.22707 17.7769 7.57074C18.3816 8.29489 19.1635 8.66311 20.1103 8.63243C20.9838 8.60174 21.6924 8.22739 22.2482 7.55232C22.5536 7.18411 22.9323 7 23.4088 7.03068C23.5432 7.03682 23.6837 7.07364 23.8058 7.1166C24.9787 7.54619 26.0415 8.16602 27.0005 8.96996C27.4892 9.38113 27.6175 9.92118 27.3976 10.5656C26.8234 12.2287 27.7641 13.9593 29.4683 14.3582C29.566 14.3827 29.6638 14.395 29.7615 14.4196C30.3235 14.5423 30.7144 14.9535 30.8244 15.5181C31.0626 16.7823 31.0565 18.0404 30.8182 19.3046C30.7083 19.906 30.2624 20.3417 29.6516 20.4399C27.7152 20.7529 26.6829 22.5326 27.3609 24.3798C27.5869 24.9935 27.4342 25.5643 26.9272 25.9877C26.0782 26.6873 25.1497 27.2458 24.1296 27.6692C23.4699 27.9392 22.8896 27.792 22.4376 27.2335C21.2892 25.8036 19.249 25.7115 18.0457 27.0371C17.9479 27.1414 17.8624 27.2642 17.7769 27.3746C17.3982 27.8533 16.8118 28.0313 16.2376 27.8165C15.0464 27.3808 13.9775 26.761 13.0124 25.9509C12.542 25.552 12.4199 24.9506 12.6764 24.343C13.0246 23.5084 13.0185 22.686 12.6092 21.8821C12.1633 21.0045 11.4364 20.489 10.4652 20.3417C9.64055 20.219 9.24961 19.8508 9.12134 19.0284C8.93198 17.8194 8.96863 16.6166 9.20074 15.4199C9.32902 14.7755 9.77493 14.3766 10.4469 14.2907C11.9739 14.0882 13.0429 12.8485 12.9757 11.3143C12.9635 11.0074 12.878 10.6944 12.7864 10.3999C12.5665 9.73708 12.7192 9.17248 13.2689 8.74289C14.1546 8.05555 15.1198 7.50937 16.1765 7.12274C16.3353 7.06137 16.5125 7.04296 16.6835 7ZM20.0064 21.1334C22.0283 21.1334 23.6654 19.4825 23.6654 17.4389C23.6654 15.4322 22.0161 13.7813 20.0187 13.7813C17.9907 13.7813 16.3414 15.4137 16.3353 17.4267C16.3292 19.4764 17.9662 21.1272 20.0064 21.1334Z" fill="#828282" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M51.31 15.8014C51.7005 16.192 51.7005 16.8251 51.31 17.2157L47.2157 21.31C46.8251 21.7005 46.192 21.7005 45.8014 21.31L41.7071 17.2157C41.3166 16.8251 41.3166 16.192 41.7071 15.8014C42.0976 15.4109 42.7308 15.4109 43.1213 15.8014L46.5085 19.1887L49.8958 15.8014C50.2863 15.4109 50.9195 15.4109 51.31 15.8014Z" fill="#828282" />
                    </svg>
                      {/* <div className="action_setting_dropdown" id="myDropdown" className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>>
                        <ul>
                          <li><a href="#">See Profile</a></li>
                          <li><a href="#">See Rating</a></li>
                          <li><a href="#">Action 3</a></li>
                        </ul>
                      </div> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dash8ah;
