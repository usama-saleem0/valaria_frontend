import chevron from "../../img/chevron_h.png";
import { useNavigate } from "react-router-dom";

const FaqSearchResultCard = () => {
  const navigate = useNavigate();
  const searchdetail = () => navigate("/faqdetailh");
  const arr = [
    {
      heading: "Eget nec, faucibus rhoncus aliquam placerat varius praesent?",
      text: " Habitasse integer gravida vitae fusce. Nec vitae ut sit ipsum orci tellus habitant diam velit. Semper tellus, turpis amet, tellus dui velit integer malesuada mattis. Laoreet facilisi ultrices nulla ac quam.",
    },
    {
      heading: "Eget nec, faucibus rhoncus aliquam placerat varius praesent?",
      text: " Habitasse integer gravida vitae fusce. Nec vitae ut sit ipsum orci tellus habitant diam velit. Semper tellus, turpis amet, tellus dui velit integer malesuada mattis. Laoreet facilisi ultrices nulla ac quam.",
    },
    {
      heading: "Eget nec, faucibus rhoncus aliquam placerat varius praesent?",
      text: " Habitasse integer gravida vitae fusce. Nec vitae ut sit ipsum orci tellus habitant diam velit. Semper tellus, turpis amet, tellus dui velit integer malesuada mattis. Laoreet facilisi ultrices nulla ac quam.",
    },
    {
      heading: "Eget nec, faucibus rhoncus aliquam placerat varius praesent?",
      text: " Habitasse integer gravida vitae fusce. Nec vitae ut sit ipsum orci tellus habitant diam velit. Semper tellus, turpis amet, tellus dui velit integer malesuada mattis. Laoreet facilisi ultrices nulla ac quam.",
    },
    {
      heading: "Eget nec, faucibus rhoncus aliquam placerat varius praesent?",
      text: " Habitasse integer gravida vitae fusce. Nec vitae ut sit ipsum orci tellus habitant diam velit. Semper tellus, turpis amet, tellus dui velit integer malesuada mattis. Laoreet facilisi ultrices nulla ac quam.",
    },
  ];
  return (
    <>
      {arr.map((item) => (
        <div
          onClick={searchdetail}
          className="row faq--card--container--h"
          key={item.index}
        >
          <div className="faq--card--sec--1--h">
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
            <p className="faq--card--p--alt--h">
              Payment <span>•</span> June 13, 2020
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center faq--card--sec--2--h">
            <div className="faq--chevron--h">
              <img src={chevron} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default FaqSearchResultCard;
