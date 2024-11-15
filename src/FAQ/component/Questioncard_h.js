import { useNavigate } from "react-router-dom";
import Contactus from "../../Contactus/Contactus";

const Questioncard = ({ className }) => {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/Contactus");
  };

  return (
    <div className={className}>
      <div className="faq--detail--card--two mx-auto">
        <div className="mx-auto text-center">
          <h1>Still have question?</h1>
          <p>
            Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
            quam. Et risus commodo natoque pulvinar eu, interdum.
          </p>
          <button
            onClick={contact}
            type="button"
            className="btn btn-secondary faq--detail--card--two--btn"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questioncard;
