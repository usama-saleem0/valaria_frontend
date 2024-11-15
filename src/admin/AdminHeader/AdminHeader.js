import headerlogo from "../../img/work_img_h.png";
import adminimg from "../../img/review-director-img.png";
import { useNavigate } from "react-router-dom";
import ssss from "../../img/director-drop_h.png"
import { useEffect, useState } from "react";

const AdminHeader = () => {
  localStorage.removeItem("userData");
  const [userDataId, setuserDataId] = useState(null);
  const navigate = useNavigate();
  const login = () => {
    localStorage.removeItem("userData");

    navigate("/employerlogin");
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : null;
  }; 
  
  useEffect(() => {
    const storeData = getUserFromLocalStorage();

    if (storeData) {
      setuserDataId(storeData);
    }
}, []);

const userData = localStorage.getItem("userData");

  const userprofile = () => {
    const userObject = JSON.parse(userData);
    const userType = userObject.type;

    {
      userType === "Employee" ? navigate("/kabcah1") : navigate("/kabc2");
    }
  };
  const usersetting = () => navigate("/accountsettingh");
  return (
    <header>
      <nav>
        <div className="admin--header--main--h">
          <div className="admin--header--main--cont--h">
            <div className="admin--headedr--title--h">
              <div className="admin--header--logo--h">
                <img src={headerlogo} alt="" />
              </div>
              <div className="admin--header--text--h">
                <h1>Dashboard</h1>
              </div>
            </div>
            <div className="admin--header--right--sec--h">
              <div className="admin--header--notification--h">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <path
                    d="M10.811 21.2067C8.06529 21.2067 5.31954 21.2067 2.57379 21.2067C1.39305 21.2067 0.477798 20.4941 0.247239 19.3832C0.114493 18.7474 0.247239 18.1605 0.610544 17.6156C1.17646 16.7772 1.73539 15.9388 2.28734 15.0864C2.36419 14.9676 2.4131 14.8 2.4131 14.6533C2.42008 12.5782 2.4131 10.5032 2.42008 8.42815C2.42008 4.74619 4.66978 1.61618 8.17009 0.421464C12.7743 -1.14354 17.9095 1.74893 18.9295 6.50683C19.0693 7.1496 19.1321 7.82032 19.1391 8.47706C19.1671 10.5311 19.1461 12.5922 19.1531 14.6463C19.1531 14.8 19.209 14.9746 19.2928 15.1004C19.8308 15.9248 20.3758 16.7423 20.9277 17.5597C21.4587 18.3422 21.5495 19.1666 21.0954 19.998C20.6482 20.8364 19.9007 21.2067 18.9645 21.2067C16.2466 21.2067 13.5288 21.2067 10.811 21.2067ZM7.66007 22.3386C8.03734 23.5961 9.39275 24.5533 10.7831 24.5533C12.1804 24.5533 13.5358 23.5961 13.9061 22.3386C11.8171 22.3386 9.74208 22.3386 7.66007 22.3386Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              {/* <div className="admin--header--user--info--h">
                <div className="admin--header--user--img--h">
                  <img src={adminimg} alt="" />
                </div>
                <div className="admin--header--user--text--h">
                  <h1>Brooklyn</h1>
                  <p>Admin 1</p>
                </div>
                <div className="admin--header--drop--logo--h">
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
                      d="M10.31 0.801438C10.7005 1.19196 10.7005 1.82513 10.31 2.21565L6.21565 6.30998C5.82513 6.70051 5.19196 6.70051 4.80144 6.30998L0.707104 2.21565C0.31658 1.82513 0.31658 1.19196 0.707104 0.801438C1.09763 0.410914 1.73079 0.410914 2.12132 0.801438L5.50854 4.18866L8.89577 0.801438C9.28629 0.410914 9.91946 0.410914 10.31 0.801438Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div> */}
              
              <nav className="helo-drop">
                    <label for="touch">
                      <div className="user--pic--header" style={{width: '80%'}}>
                        <img
                          onClick={userprofile}
                          src={ssss}
                        />
                      </div>
                      <span className="drop-out">{userDataId ? userDataId.username :''}</span>
                    </label>
                    <input type="checkbox" id="touch" />

                    <ul class="slide">
                      <li>
                        <a onClick={userprofile} href="#">
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
                          My Profie
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
