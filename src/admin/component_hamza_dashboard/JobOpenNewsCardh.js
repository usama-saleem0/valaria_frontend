import JobOpenNewsCardButtonh from "./JobOpenNewsCardButton";
import assisstant from "../../img/Assistant.png";
import AdminEditDel from "./AdminEditDelPoph";
import { useState } from "react";
const JobOpenNewsCardh = () => {
  const [isEdit, setIsEdit] = useState(false);
  const EditDel = () => {
    setIsEdit(!isEdit);
  };

  const data = [
    {
      img: assisstant,
      title: "Assistant News Director",
      subTitle: "KABC",
      location: "Los Angeles, CA",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: assisstant,
      title: "Assistant News Director",
      subTitle: "KABC",
      location: "Los Angeles, CA",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: assisstant,
      title: "Assistant News Director",
      subTitle: "KABC",
      location: "Los Angeles, CA",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: assisstant,
      title: "Assistant News Director",
      subTitle: "KABC",
      location: "Los Angeles, CA",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: assisstant,
      title: "Assistant News Director",
      subTitle: "KABC",
      location: "Los Angeles, CA",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
    {
      img: assisstant,
      title: "Assistant News Director",
      subTitle: "KABC",
      location: "Los Angeles, CA",
      salary: "$100,000  -  $130,000",
      timing: "Full time",
      instruction1:
        "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      instruction2: "Massa fringilla quam pretium adipiscing in non tellus. ",
      instruction3: "Massa fringilla quam pretium.",
      hiringStatus: "Actively Hiring",
      updateTime: "Updated 8 hours ago",
    },
  ];
  return data.map((items, index) => (
    <div id={index} className="job--open--dash--news--h--card--parent--cont">
      <div className="job--open--dash--news--h--card">
        <div className="job--open--dash--news--h--card-upper">
          <div className="job--open--dash--news--h--card--head">
            <div className="job--open--dash--news--h--card--img">
              <img src={assisstant} alt="" />
            </div>
            <div className="job--open--dash--news--h--card--title">
              <h1>{items.title}</h1>
              <p>{items.subTitle}</p>
            </div>
          </div>
          <div className="job--open--dash--news--h--card--job--info">
            <div className="job--open--dash--news--h--card--location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M0 7.10484C0 3.89766 1.79058 1.39488 4.52588 0.525048C8.46954 -0.734344 12.578 1.50695 13.314 5.54661C13.6985 7.63848 13.1767 9.52223 11.798 11.1712C10.3205 12.9375 8.81557 14.6879 7.32708 16.4489C6.92613 16.9238 6.50869 16.9238 6.10224 16.4489C4.56432 14.6345 3.00993 12.8308 1.49398 10.9951C0.477853 9.77304 0.0164777 8.34289 0 7.10484ZM6.71192 4.01506C5.25089 4.0204 4.07548 5.17306 4.08098 6.59254C4.08647 7.99602 5.27836 9.13268 6.73389 9.12734C8.17843 9.122 9.36483 7.964 9.35384 6.56053C9.34286 5.15171 8.15646 4.00972 6.71192 4.01506Z"
                  fill="#194D79"
                />
              </svg>
              <p>{items.location}</p>
            </div>

            <div className="job--open--dash--news--h--card--money">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.34402 0.922668C8.69626 0.922668 9.0485 0.922668 9.40075 0.922668C9.44478 0.931475 9.4844 0.944684 9.52843 0.949087C9.95993 1.01513 10.4002 1.05476 10.8273 1.15163C14.0768 1.89574 16.6349 4.61241 17.1853 7.90147C17.2381 8.20968 17.269 8.51789 17.313 8.83051C17.313 9.18275 17.313 9.53499 17.313 9.88723C17.3042 9.91806 17.291 9.94888 17.2866 9.9797C17.2293 10.3716 17.1985 10.7678 17.1149 11.1509C16.0053 16.3817 10.2417 19.2745 5.38959 17.0466C1.80552 15.4042 -0.153826 11.6 0.594689 7.72975C1.25074 4.32181 3.99823 1.63156 7.41938 1.05036C7.7276 0.99752 8.03581 0.966699 8.34402 0.922668ZM10.1889 11.1993C10.1933 11.9082 9.61649 12.507 8.92082 12.5246C8.18551 12.5423 7.5867 11.9875 7.55147 11.2522C7.53826 10.8999 7.31811 10.671 7.0055 10.6798C6.70169 10.6886 6.48594 10.944 6.49475 11.2874C6.51676 12.2561 7.17281 13.1367 8.10185 13.4449C8.27357 13.5021 8.36163 13.5858 8.33962 13.7751C8.32641 13.8764 8.33521 13.9821 8.33962 14.0877C8.34402 14.4003 8.56857 14.6293 8.86358 14.6337C9.14977 14.6381 9.38313 14.4003 9.39634 14.0965C9.40075 13.9997 9.39634 13.8984 9.39634 13.8015C9.39634 13.5373 9.39634 13.5373 9.64291 13.4493C11.1928 12.8989 11.7432 11.0188 10.7261 9.73753C10.2593 9.14753 9.63411 8.85252 8.88119 8.83491C8.15909 8.8173 7.5867 8.28013 7.55147 7.58885C7.51625 6.86676 8.07543 6.23712 8.78432 6.2019C9.53284 6.16227 10.1537 6.72586 10.1845 7.47438C10.1977 7.82662 10.4178 8.05557 10.7305 8.04677C11.0343 8.03796 11.2632 7.78259 11.2324 7.43915C11.2104 7.18818 11.1708 6.9328 11.0871 6.69944C10.8229 5.98175 10.3122 5.50182 9.58567 5.25965C9.44918 5.21562 9.38754 5.14517 9.39634 4.99987C9.40515 4.87218 9.40075 4.7489 9.39634 4.62121C9.38754 4.32181 9.16298 4.09725 8.87238 4.09285C8.59499 4.08845 8.36163 4.313 8.34402 4.5992C8.33521 4.71808 8.33081 4.84136 8.34402 4.96025C8.36163 5.14077 8.27797 5.22443 8.11066 5.27726C6.91303 5.67354 6.23937 6.95041 6.58721 8.16125C6.87781 9.17394 7.78043 9.86962 8.84156 9.89164C9.60769 9.90485 10.1845 10.464 10.1889 11.1993Z"
                  fill="#194D79"
                />
              </svg>
              <p>{items.salary}</p>
            </div>

            <div className="job--open--dash--news--h--card--time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M0.312988 12.6598C0.312988 10.8098 0.312988 8.95988 0.312988 7.10557C0.330441 7.10994 0.34353 7.10994 0.360982 7.1143C2.94392 7.97382 5.52685 8.83335 8.10542 9.69723C8.48065 9.82376 8.84715 9.82813 9.22237 9.70596C11.766 8.85516 14.3141 8.00873 16.8577 7.16229C16.9101 7.14484 16.9668 7.12739 17.0235 7.10994C17.0279 7.14484 17.0323 7.16229 17.0323 7.17975C17.0323 8.94679 17.0366 10.7182 17.0235 12.4852C17.0235 12.7296 16.9581 12.987 16.8534 13.2095C16.4869 13.9774 15.8586 14.3395 15.0078 14.3352C10.7887 14.3308 6.57399 14.3352 2.3549 14.3352C2.28073 14.3352 2.2022 14.3352 2.12802 14.3308C1.32086 14.3003 0.596588 13.7243 0.382797 12.9434C0.360982 12.8517 0.339167 12.7557 0.312988 12.6598ZM0.312988 5.99735C0.326077 6.00608 0.34353 6.01481 0.356619 6.01917C3.05736 6.91796 5.7581 7.82112 8.4632 8.71118C8.59845 8.75481 8.76861 8.75045 8.90387 8.70682C11.5697 7.82548 14.2355 6.93541 16.9014 6.04971C17.0104 6.01481 17.0366 5.96245 17.0366 5.85337C17.0323 5.39961 17.0323 4.95022 17.0323 4.49646C17.0323 3.31407 16.2164 2.49381 15.034 2.49381C13.9083 2.49381 12.7826 2.49381 11.6526 2.49381C11.5915 2.49381 11.5261 2.49381 11.4563 2.49381C11.4563 2.26693 11.4606 2.07496 11.4563 1.87862C11.4519 1.76082 11.4519 1.63865 11.4301 1.52085C11.2905 0.853299 10.7494 0.408266 10.0514 0.403903C9.13074 0.395177 8.21014 0.39954 7.28953 0.403903C7.19354 0.403903 7.09319 0.412629 6.99721 0.430081C6.34711 0.569699 5.90644 1.09763 5.88899 1.76082C5.88026 1.99642 5.88899 2.23639 5.88899 2.48945C5.80173 2.48945 5.73628 2.48945 5.67083 2.48945C4.52771 2.48945 3.38459 2.48509 2.24146 2.48945C1.37758 2.50254 0.653307 3.03047 0.40025 3.842C0.365345 3.95108 0.339167 4.06015 0.312988 4.16923C0.312988 4.78006 0.312988 5.39089 0.312988 5.99735ZM7.28517 1.80881C8.20578 1.80881 9.12638 1.80881 10.0601 1.80881C10.0601 2.03133 10.0601 2.24948 10.0601 2.48509C9.13947 2.48509 8.22323 2.48509 7.28517 2.48509C7.28517 2.25384 7.28517 2.04005 7.28517 1.80881Z"
                  fill="#194D79"
                />
              </svg>
              <p>{items.timing}</p>
            </div>
          </div>
          <div className="job--open--dash--news--h--card--list">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle
                    cx="3.49565"
                    cy="3.54289"
                    r="2.99565"
                    stroke="black"
                  />
                </svg>
                {items.instruction1}
              </li>
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle
                    cx="3.49565"
                    cy="3.54289"
                    r="2.99565"
                    stroke="black"
                  />
                </svg>
                {items.instruction2}{" "}
              </li>
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                >
                  <circle
                    cx="3.49565"
                    cy="3.54289"
                    r="2.99565"
                    stroke="black"
                  />
                </svg>
                {items.instruction3}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-12 d-flex justify-content-between faq--work--card--bottom--container job--open--card--bottom--container">
          <div className="d-flex faq--work--card--bottom">
            <div className="faq--work--bottom--img--h">
              <img src={require("../../img/tick_h.png")} alt="" />
            </div>
            <p>{items.hiringStatus}</p>
          </div>
          <div className="d-flex faq--work--card--bottom faq--work--card--bottom--alt">
            <div className="faq--work--bottom--img--h">
              <img src={require("../../img/time_h.png")} alt="" />
            </div>
            <p>{items.updateTime}</p>
          </div>
        </div>
      </div>
      <div className="job--open--dash--news--h--card--lower">
        <JobOpenNewsCardButtonh />
        <div
          // onClick={EditDel}
          className="job--open--dash--news--h--card--lower--svg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="26"
            viewBox="0 0 7 26"
            fill="none"
          >
            <circle cx="3.42105" cy="3.42105" r="3.42105" fill="#828282" />
            <circle cx="3.42105" cy="13" r="3.42105" fill="#828282" />
            <circle cx="3.42105" cy="22.5789" r="3.42105" fill="#828282" />
          </svg>
        </div>
      </div>
      {/* {isEdit && <AdminEditDel />} */}
    </div>
  ));
};

export default JobOpenNewsCardh;
