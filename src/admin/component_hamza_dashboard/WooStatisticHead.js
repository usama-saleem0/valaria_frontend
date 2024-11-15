import { useState } from "react";

const WooStatisticHeadh = () => {
  const [isTime, setIsTime] = useState(false);
  const timeToggle = () => {
    setIsTime(!isTime);
  };
  return (
    <div className="dash--insight--sec--head--h">
      <div className="dash--insight--sec--title--h">
        <h1>Stats Overview</h1>
      </div>
      <div className="dash--insight--sec--time--h">
        <label htmlFor="">Time Period:</label>
        <div className="dash--insight--dropdown--cont--h">
          <div
            onClick={timeToggle}
            className={`job--open--dash--news--h--filter--drop dash--insight--dropdown--h ${
              isTime ? "borderradiusnone" : ""
            }`}
          >
            <span>Last 7 Days</span>{" "}
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
                d="M10.685 0.293382C11.0755 0.683906 11.0755 1.31707 10.685 1.7076L6.59065 5.80193C6.20013 6.19245 5.56696 6.19245 5.17644 5.80193L1.0821 1.7076C0.69158 1.31707 0.69158 0.683906 1.0821 0.293382C1.47263 -0.0971428 2.10579 -0.0971428 2.49632 0.293382L5.88354 3.68061L9.27077 0.293382C9.66129 -0.0971428 10.2945 -0.0971428 10.685 0.293382Z"
                fill="#828282"
              />
            </svg>
          </div>
          {isTime && (
            <ul className="job--open--dash--news--h--filter--dropdown">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default WooStatisticHeadh;
