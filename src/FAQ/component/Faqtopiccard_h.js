import chevron from "../../img/chevron_h.png";
const FAQTopicCard = ({ title, description }) => (
  <div className="d-flex align-items-center faq--detail--card--container main--card--two--container">
    <div className="faq--detail--related--link--h">
      <h5>{title}</h5>
      <a href="#">{description}</a>
    </div>
    <div className="faq--detail--related--img--h">
      <img src={chevron} alt="" />
    </div>
  </div>
);
export default FAQTopicCard;
