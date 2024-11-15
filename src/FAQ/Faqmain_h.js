import Questioncard from "./component/Questioncard_h";
import { useEffect, useState } from "react";

import FAQSearch from "./component/Faqsearch_h";
import FAQTopQuestions from "./component/Faqtopquestion_h";
import FAQTopics from "./component/Faqtopics_h";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import Header1 from "../Header/Header2";
import axios from "axios";
import { baseurl } from "../baseurl";

const FAQPage = () => {
  const navigate = useNavigate();

  const faqdetail = () => {
    navigate("/faqdetailh");
  };

  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseurl}/get_faq`);
      
      console.log('resdata',response.data)
      
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {/* <Header1 /> */}
      <Header />

      <div>
        <FAQSearch products={products}  />
        <div className="container"> 
          <div className="col">
            <div className="row">
              <FAQTopQuestions fetchProducts={fetchProducts} products={products} />
              <FAQTopics />
              <Questioncard className="col-lg-12 faq--search--detail--container faq--main--detail--container" />
            </div>
          </div>
        </div>
      </div>

      <Footerah />
    </>
  );
};

export default FAQPage;
