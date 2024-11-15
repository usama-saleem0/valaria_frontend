import Related from "./component/Relatedarticles_h";
import Questioncard from "./component/Questioncard_h";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import Header1 from "../Header/Header2";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../baseurl";

const FaqDetail = () => {


  const [faq, setFaq] = useState({});

  useEffect(() => {
      const fetchProducts = async () => {
        const id = localStorage.getItem('faqid');
        try {
          const response = await axios.get(`${baseurl}/get_faq_id/${id}`);
          
          console.log('resdata',response.data)
          
          setFaq(response.data.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);



  return (
    <div>
      {/* <Header1 /> */}
      <Header />

      <section className="w-100 faq--search--detail--section--h">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="faq--search--detail--h">
                <nav
                  style={{ "--bs-breadcrumb-divider": "' > '" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb bread-crumb-h">
                    <li className="breadcrumb-item active">FAQs</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Search results
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {faq.mainHeading}
                    </li>
                  </ol>
                </nav>
                <h1>  {faq.mainHeading}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 faq--search--detail--container faq--search--detail--container-alt">
            <div className="faq--detail--card--one shadow-sm">
              <h3>
              {faq.mainHeading}
              </h3>
              <p className="faq--detail--card--text--h">
              {faq.description}
              
              </p>

              <div className="d-flex align-items-center faq--detail--card--one--bottom--h">
                <h1>Did you find it helpful?</h1>
                <div className="about--button--h pt-1 w-50">
                  <button
                    type="button"
                    className="btn btn-primary about--btn--h about--btn--h--alt"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 faq--search--detail--container">
            <div className="faq--search--detail--cont--h">
              <div>
                <h1 className="faq--detail--related--title">
                  Related articles
                </h1>
              </div>
              <div className="row row-cols-1 row-cols-lg-2 g-4 faq--detail--related--container--h">
                <Related />
              </div>
            </div>
          </div>

          <Questioncard className="col-lg-12 faq--search--detail--container faq--search--detail--container-alt-2" />
        </div>
      </div>

      <Footerah />
    </div>
  );
};

export default FaqDetail;
