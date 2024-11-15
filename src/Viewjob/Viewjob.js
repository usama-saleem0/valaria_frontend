import React, { useEffect, useState } from "react";
import axios from "axios"; // Add this import

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Asistantnewsdirector from "../Asistantnewsdirector/Asistantnewsdirector";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiSearchLine,
} from "react-icons/ri";
import { Container, Row, Col, Form } from "react-bootstrap";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../baseurl";
import ProductsComponent from "../Shop/PorductsComponent";
import ProductsLimitedComponent from "../Shop/ProductsLimitedComponent";

const Viewjob = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [sortOrder, setSortOrder] = useState("newest");
  const [locationFilter, setLocationFilter] = useState('');
  const [JOBType, setJOBType] = useState('');




  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseurl}/products`); // Update this with your API endpoint
        const formattedProducts = response.data.map((product) => ({
          ...product,
          price: parseFloat(product.price), // Convert to number if necessary
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);






  const mycart = () => {
    navigate("/mycart");
  };

  const shop = () => {
    navigate("/shop");
  };

  return (
    <>
      <Header />
      <section className="job-start-matter-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="find-job-matter-txt">
                <h4>Find the jobs that matter to you</h4>
              </div>
              <div className="find-job-matter">
                <Row>
                  <Col lg={3} md={6}>
                    <div className="find-job-select-box">
                      <input
                        type="text"
                        placeholder="Job title, or specialization"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                      />
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="22"
                          viewBox="0 0 26 22"
                          fill="none"
                        >
                          <path
                            d="M0.272949 19.3581C0.272949 16.5788 0.272949 13.7994 0.272949 11.0135C0.299169 11.0201 0.318835 11.0201 0.345055 11.0266C4.22565 12.318 8.10625 13.6093 11.9803 14.9072C12.544 15.0973 13.0946 15.1039 13.6584 14.9203C17.48 13.6421 21.3081 12.3704 25.1297 11.0987C25.2084 11.0725 25.2936 11.0463 25.3788 11.0201C25.3854 11.0725 25.3919 11.0987 25.3919 11.125C25.3919 13.7798 25.3985 16.4411 25.3788 19.0959C25.3788 19.463 25.2805 19.8497 25.1232 20.184C24.5726 21.3377 23.6286 21.8818 22.3504 21.8753C16.0116 21.8687 9.67946 21.8753 3.34072 21.8753C3.22928 21.8753 3.11129 21.8753 2.99985 21.8687C1.78717 21.8228 0.699028 20.9575 0.37783 19.7842C0.345055 19.6465 0.31228 19.5023 0.272949 19.3581ZM0.272949 9.34853C0.292614 9.36164 0.318835 9.37475 0.3385 9.38131C4.39608 10.7317 8.45366 12.0885 12.5178 13.4258C12.721 13.4913 12.9767 13.4848 13.1799 13.4192C17.185 12.0951 21.1901 10.7579 25.1953 9.42719C25.3592 9.37475 25.3985 9.29609 25.3985 9.13222C25.3919 8.45049 25.3919 7.77532 25.3919 7.09359C25.3919 5.31717 24.1661 4.08482 22.3897 4.08482C20.6985 4.08482 19.0073 4.08482 17.3095 4.08482C17.2178 4.08482 17.1195 4.08482 17.0146 4.08482C17.0146 3.74396 17.0211 3.45553 17.0146 3.16056C17.008 2.98357 17.008 2.80003 16.9752 2.62304C16.7655 1.62012 15.9527 0.951502 14.9038 0.944947C13.5207 0.931837 12.1376 0.938392 10.7545 0.944947C10.6103 0.944947 10.4595 0.958057 10.3153 0.984277C9.3386 1.19404 8.67654 1.9872 8.65032 2.98357C8.63721 3.33754 8.65032 3.69807 8.65032 4.07827C8.51921 4.07827 8.42089 4.07827 8.32256 4.07827C6.60514 4.07827 4.88771 4.07171 3.17029 4.07827C1.87238 4.09793 0.784244 4.89109 0.40405 6.11033C0.35161 6.27421 0.31228 6.43809 0.272949 6.60196C0.272949 7.51967 0.272949 8.43738 0.272949 9.34853ZM10.7479 3.05568C12.1311 3.05568 13.5142 3.05568 14.917 3.05568C14.917 3.38998 14.917 3.71774 14.917 4.07171C13.5338 4.07171 12.1573 4.07171 10.7479 4.07171C10.7479 3.72429 10.7479 3.40309 10.7479 3.05568Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </div>
                  </Col>
                  <Col lg={3} md={6}>
                    <div className="find-job-select-box">
                      <input type="text" placeholder="Area, city, or town"  value={ locationFilter} onChange={ (e) => setLocationFilter(e.target.value)
                        }/>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="27"
                          viewBox="0 0 22 27"
                          fill="none"
                        >
                          <path
                            d="M0.230957 10.9733C0.230957 5.96011 3.02981 2.04802 7.30536 0.688378C13.4697 -1.28018 19.8916 2.22319 21.0421 8.53759C21.6431 11.8074 20.8274 14.7519 18.6725 17.3294C16.363 20.0904 14.0106 22.8263 11.6839 25.579C11.0572 26.3214 10.4047 26.3214 9.76939 25.579C7.36546 22.7429 4.93578 19.9235 2.5662 17.0541C0.977891 15.1439 0.256713 12.9085 0.230957 10.9733ZM10.7224 6.14362C8.43864 6.15196 6.60136 7.9537 6.60994 10.1725C6.61853 12.3663 8.48157 14.143 10.7567 14.1346C13.0147 14.1263 14.8691 12.3162 14.852 10.1224C14.8348 7.92033 12.9803 6.13528 10.7224 6.14362Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="find-job-select-box">
                      <input
                        type="text"
                        placeholder="Station name or category" 
                        value={JOBType}
                        onChange={ (e) => setJOBType(e.target.value) }
                      />
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="27"
                          viewBox="0 0 21 27"
                          fill="none"
                        >
                          <path
                            d="M1.34163 26.1376C1.30351 26.1124 1.25903 26.0872 1.22091 26.062C0.890524 25.8553 0.548825 25.6486 0.224439 25.4419C0.184896 25.4031 0.145352 25.3644 0.105809 25.332C0.192319 25.1629 0.263675 25.0345 0.349479 24.8654C1.69513 22.2504 3.04638 19.6355 4.39203 17.0205C4.5777 16.6683 4.76696 16.316 4.9598 15.9564C5.11118 15.6618 5.10309 15.4848 4.85696 15.2296C4.12982 14.4787 3.40858 13.7213 2.67522 12.9775C2.09881 12.3978 1.51605 11.8256 0.945435 11.2387C0.769992 11.0531 0.590459 10.8736 0.427304 10.6782C0.210007 10.4203 0.214634 10.2394 0.470041 10.0024C1.44488 9.09598 2.41971 8.1829 3.39454 7.27649C3.53679 7.14481 3.67192 6.96835 3.83941 6.89121C4.10556 6.76553 4.20813 6.89721 4.31499 7.1025C4.6921 7.83389 5.06196 8.57156 5.44351 9.29557C5.552 9.49524 5.56272 9.68874 5.425 9.89359C4.72263 10.9497 4.03844 12.0185 3.34274 13.0801C3.19271 13.3117 3.20577 13.4888 3.39303 13.6885C3.81923 14.1394 4.24913 14.584 4.67805 15.0287C5.52783 15.8857 6.3776 16.7364 7.22737 17.5934C7.37849 17.7467 7.49702 17.7681 7.70199 17.6782C8.68919 17.2488 9.68489 16.8331 10.6769 16.4053C11.5842 15.9994 12.485 15.579 13.3923 15.1731C13.6084 15.0779 13.7158 15.1465 13.8441 15.3181C15.5264 17.6547 17.2087 19.9913 18.896 22.3223C18.9962 22.4517 19.0649 22.6095 19.1628 22.7701C19.1397 22.7981 19.1167 22.8261 19.0936 22.8541C18.9601 22.7963 18.8267 22.7385 18.6871 22.673C18.337 22.5068 17.9869 22.3342 17.6368 22.168C17.3814 22.044 17.1193 21.9224 16.8696 21.7858C16.6812 21.6855 16.546 21.739 16.428 21.9187C16.2436 22.201 16.0412 22.4656 15.8503 22.7368C14.8698 24.1208 13.8894 25.4987 12.9157 26.8779C12.6825 27.2118 12.395 27.3545 11.9945 27.3479C8.92465 27.3083 5.85485 27.3173 2.78497 27.3419C2.56221 27.3419 2.33944 27.3484 2.11955 27.3089C1.89103 27.2669 1.65815 27.1842 1.34163 26.1376ZM1.1577 10.9787C1.1577 14.548 4.01577 17.3651 7.63435 17.3924C11.3334 17.4197 14.1971 14.5901 14.2116 10.9847C14.226 7.36968 11.3931 4.52701 7.74804 4.51636C4.12699 4.50571 1.1577 7.33398 1.1577 10.9787Z"
                            fill="#828282"
                          />
                        </svg>
                      </span>
                    </div>
                  </Col>
                  <Col lg={2} md={6}>
                    <div className="find-job-btn">
                      <button className="btn">
                        <RiSearchLine /> Search
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="search-job-sec">
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <div className="newsletter-article-search">
                <h3>Recommend for you</h3>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="filter-short-box">
                <div className="filter-box">
                  <p>Filter:</p>
                  <select name="" id="">
                    <option value="">Job title</option>
                    <option value="">Job title</option>
                    <option value="">Job title</option>
                  </select>
                </div>
                <div className="filter-box">
                  <p>Sort:</p>
                  <Form.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="assistant-news-director-box-sec">
        <Container>
          <Row>
            <Asistantnewsdirector searchTerm={searchTerm} sortOrder={sortOrder} locationFilter= {locationFilter} JOBType= {JOBType}/>

            <Col lg={12}>
              {/* <div className="newsletter-pagination-slide asistant-pagination">
                <div className="pagination">
                  <a href="#">
                    <RiArrowLeftSLine />
                  </a>
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                  <a href="#">
                    <RiArrowRightSLine />
                  </a>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ratemystation-shop-sec">
        <h4 className="h4-box-in"> RateMyStation's Shop</h4>

        <Container>
          <Row>
            <ProductsLimitedComponent />
          </Row>
        </Container>
      </section>

      <Footerah />
    </>
  );
};

export default Viewjob;
