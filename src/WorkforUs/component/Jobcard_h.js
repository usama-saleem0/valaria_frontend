import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Saveshare from "../../Popouts/Save_pop_h";

const JobCard = ({
  title,
  company,
  workType,
  salary,
  employmentType,
  details,
  activelyHiring,
  updatedTime,
}) => {
  const navigate = useNavigate();

  const jobdetail = () => navigate("/viewjobdetail");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  return (
    <div onClick={jobdetail} className="col faq--work--card--pad--h">
      <div className="card faq--work--card--h">
        <div onClick={toggle} className="faq--work--card--h--dots">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          {isOpen && <Saveshare />}
        </div>
        <div className="card-body faq--work--card--body--h">
          <div className="card-title faq--work--card--title--container align-items-center d-flex">
            <div className="faq--work--card--title--img--h">
              <img src={require("../../img/work_img_h.png")} alt="" />
            </div>
            <div className="faq--work--card--title--h">
              <h5>{title}</h5>
              <a href="">{company}</a>
            </div>
          </div>
          <div className="faq--work--card--info--h d-flex justify-content-between">
            <div className="d-flex faq--work--card--info align-items-center">
              <div className="faq--card--info--img--h">
                <img src={require("../../img/work_remote_h.png")} alt="" />
              </div>
              <p>{workType}</p>
            </div>
            <div className="d-flex faq--work--card--info align-items-center">
              <div className="faq--card--info--img--h">
                <img src={require("../../img/work_pay_h.png")} alt="" />
              </div>
              <p>{salary}</p>
            </div>
            <div className="d-flex faq--work--card--info align-items-center">
              <div className="faq--card--info--img--h">
                <img src={require("../../img/work_time_h.png")} alt="" />
              </div>
              <p>{employmentType}</p>
            </div>
          </div>
          <div className="faq--work--card--list">
            <ul>
              {details.map((detail, index) => (
                <li key={index} className="col-lg-12 work--list--li ">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-12 d-flex justify-content-between faq--work--card--bottom--container">
            <div className="d-flex faq--work--card--bottom">
              <div className="faq--work--bottom--img--h">
                <img src={require("../../img/tick_h.png")} alt="" />
              </div>
              <p>{activelyHiring}</p>
            </div>
            <div className="d-flex faq--work--card--bottom faq--work--card--bottom--alt">
              <div className="faq--work--bottom--img--h">
                <img src={require("../../img/time_h.png")} alt="" />
              </div>
              <p>{updatedTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
