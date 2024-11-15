import chevron from "../../img/chevron_h.png";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const FAQCard = ({ className, linkText , key }) => {
  console.log('id' , linkText.id)
  const combinedClass = classNames("faq--detail--related--img--h", className);
  const navigate = useNavigate();

  const searchdetail = (e) => {

    console.log(e)

    const id = e

    localStorage.setItem('faqid', id.toString()); 
    
    navigate("/faqdetailh");

  }
  return (
    <div
      onClick={() => searchdetail(linkText.id)}
      className="d-flex align-items-center faq--detail--card--container faq--detail--card--container--top--10"
    >
      <div className="faq--detail--related--link--h">
        <a >{linkText.mainHeading}</a>
        
      </div>
      <div className={combinedClass}>
        <img src={chevron} alt="" />
      </div>
    </div>
  );
};

export default FAQCard;
