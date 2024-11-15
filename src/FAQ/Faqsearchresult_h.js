import { useNavigate } from "react-router-dom";
import FaqSearchResultCard from "./component/Faqsearchresultcard_h";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import RmsSearchHeader from "../Rmsheader/RmsSearchHeader";
function FaqSearchresult() {
  const navigate = useNavigate();

  const contact = () => navigate("/contactus");

  return (
    <>
      <RmsSearchHeader/>
      <div className="container">
        <div className="row">
          <div className="col " style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div className="faq--search--container--h row mx-auto">
              <div className="faq--search--result--h">
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">FAQs</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Search results
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Payments
                    </li>
                  </ol>
                </nav>
                <h1>Here are your result for “Loream Ipsum”</h1>
                <p>
                  There are 12 Stations with <span>“Loream Ipsum”</span> on{" "}
                  <span>FAQs</span>
                </p>
              </div>
              <div className="faq--container--h d-flex justify-content-between">
                <div className="faq--search--card--h">
                  <div className="col-lg-12">
                    <div className="faq--container--left-h">
                      <FaqSearchResultCard />
                    </div>
                  </div>
                </div>
                <div className="faq--container--right-h">
                  <div className="card text-center faq--right--card">
                    <div className="card-body faq--right--card--body">
                      <h1 className="card-title">
                        Can't find question you're looking for?
                      </h1>
                      <p className="card-text">
                        Pellentesque vel tristique ultrices habitasse feugiat
                        nulla tempor quam. Et risus commodo natoque pulvinar eu,
                        interdum.
                      </p>
                      <div className="d-grid gap-2 col-8 mx-auto">
                        <button
                          onClick={contact}
                          className="btn btn-primary faq--right--button--h"
                          type="button"
                        >
                          Contact us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerah />
    </>
  );
}

export default FaqSearchresult;
