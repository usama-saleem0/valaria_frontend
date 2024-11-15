import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this import

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Slider from "react-slick";
import JournalImage from "../img/journal-report.png";
import JournalImageOne from "../img/journal-report-1.png"
import JournalImageTwo from "../img/journal-report-2.jpg"
import NewsletterLatestArticleImg from "../img/newsletter-latestarticle-img.png";
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import NewsletterArticleImg2 from "../img/newsletter-article-img-2.png";
import NewsletterArticleImg3 from "../img/newsletter-article-img-3.png";
import NewsletterArticleImg4 from "../img/newsletter-article-img-4.png";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import { RiTimeLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import {
  RiMore2Fill,
  RiThumbUpFill,
  RiChat3Fill,
  RiShareFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { baseurl } from '../baseurl';
import ProductsComponent from '../Shop/PorductsComponent';
import ProductsLimitedComponent from '../Shop/ProductsLimitedComponent';
import { Typeahead } from 'react-bootstrap-typeahead';

const Newsletter = () => {


  const [products, setProducts] = useState([]);
  const [email, setemail] = useState('');


  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseurl}/SubscribeNewsLetter`, {
        email
      });

      toast.success("Subscribed successfully");
      console.log('result', response);

    } catch (error) {
      console.error('Error updating date:', error);
      toast.error('Error subscribing to');
    }
  };


  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseurl}/get-articles`); // Update this with your API endpoint
        const formattedProducts = response.data.data.map(product => ({
          ...product,
          price: parseFloat(product.price) // Convert to number if necessary
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };




  const proddetail = () => {
    navigate("/productdetail");
  };

  const mycart = () => {
    navigate("/mycart");
  };


  const newsletter = () => {
    navigate("/newsletter");
  };

  const goto = (e) => {
    const news_data = localStorage.setItem("article", JSON.stringify(e));
    console.log(news_data, "TSSSS")
    navigate("/newsletterarticle");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,

    customPaging: (i) => (
      <button>{i + 1}</button> // Optional: change button appearance
    ),
    appendDots: (dots) => {
      const maxDotsToShow = 3;
      const startIndex = dots.length > maxDotsToShow ? dots.length - maxDotsToShow : 0;
      return (
        <ul style={{ display: "flex", justifyContent: "center" }}>
          {dots.slice(startIndex, dots.length)}
        </ul>
      );
    }
  };




  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState([]);


  const filteredArticles = articles.filter(
    (article) =>
      article.mainheading.toLowerCase().includes(query.toLowerCase()) ||
      article.writer.toLowerCase().includes(query.toLowerCase())
  );


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    const date = new Date(dateString);

    return `${date.toLocaleDateString('en-US', options)} at ${date.toLocaleTimeString('en-US', timeOptions)}`;
  };


  const [currentPage, setCurrentPage] = useState(1);
  const visibleCount = 5; // Number of products per page
  const pageLimit = 6; // Number of page numbers to show at a time
  const pageCount = Math.ceil(products.length / visibleCount); // Total number of pages

  // Change page function
  const changePage = (page) => {
    if (page > 0 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  // Get the start and end page for pagination display
  const getPaginationRange = () => {
    const halfPageLimit = Math.floor(pageLimit / 2);
    let start = Math.max(1, currentPage - halfPageLimit);
    let end = Math.min(pageCount, start + pageLimit - 1);

    if (end - start < pageLimit - 1) {
      start = Math.max(1, end - pageLimit + 1);
    }

    return { start, end };
  };

  const { start, end } = getPaginationRange();

  // Calculate starting index of items for current page
  const startIndex = (currentPage - 1) * visibleCount;
  const displayedProducts = products.slice(startIndex, startIndex + visibleCount);



  const [sortOrder, setSortOrder] = useState("newest");


  const sortedProducts = [...displayedProducts].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);  // Newest first
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);  // Oldest first
    }
  });



  return (
    <>
      <Header />
      <section className="your-journalism-sec">
        <Container>
          <Row>
            <Slider {...settings}>
              {
                products.length > 0 ? (
                  products.map((e, i) => (
                    <Col lg={12} key={i}>
                      <div className="journalism-img-txt">
                        <div className="your-journalism-img">
                          <img src={e.image} alt="Journal Report" />
                        </div>
                        <div className="your-journalism-txt">
                          <h3>{e.mainheading}</h3>
                          <div className="journal-date-written">
                            <p>
                              <RiTimeLine /> {formatDate(e.createdAt)}
                            </p>
                            <p>
                              Written by <span>{e.writer}</span>
                            </p>
                          </div>
                          <div className="journalism-slider">
                            <div>
                              <h5>
                                {
                                  e.description.length > 300 ? e.description.slice(0, 300) + "...read more" : e.description
                                }
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
                ) : (
                  <Col lg={12}>
                    <div className="journalism-img-txt">
                      <div className="your-journalism-img">
                        <img src={JournalImage} alt="Journal Report" />
                      </div>
                      <div className="your-journalism-txt">
                        <h3>Can Starting In A Top 50 Market Really Ruin Your Journalism Career?</h3>
                        <div className="journal-date-written">
                          <p><RiTimeLine /> May 24, 2024</p>
                          <p>Written by <span>Soul Witness</span></p>
                        </div>
                        <div className="journalism-slider">
                          <div>
                            <h5>
                              Feugiat sagittis, turpis et a fermentum blandit amet in phasellus.
                              Nibh nunc ultrices ac at at sit purus pellentesque a.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              }
            </Slider>
          </Row>
        </Container>
      </section>

      <section className="articles-writer-sec">
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <div className="newsletter-article-search">
                {/* <input
                  type="search"
                  placeholder="Search articles or writer"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                /> */}
                <Typeahead
                  id="article-search"
                  onInputChange={(q) => setQuery(q)}  // Update query state when input changes
                  onChange={(selected) => {
                    if (selected.length > 0) {
                      const selectedArticle = selected[0];
                      // Handle the selection (e.g., redirect to article or display the article details)
                      goto(selectedArticle);
                    }
                  }}
                  options={displayedProducts.map((e) => ({
                    label: `${e.mainheading} by ${e.writer}`,  // Display mainheading and writer in search suggestions
                    ...e,  // Spread the entire article object so that it can be used in onChange
                  }))}
                  placeholder="Search for an article or writer..."
                  selected={selected}
                />



                <span className="newsletter_search">
                  <RiSearchLine />
                </span>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="filter-short-box">
                <div className="filter-box">
                  <p>Filter:</p>
                  <Form.Select>
                    <option value="">Writer</option>
                    <option value="">Writer</option>
                    <option value="">Writer</option>
                  </Form.Select>
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

      <section className="latest-article-recommend-sec">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="newsletter-latest-article-box">
                <h3>Latest Articles</h3>
                {/* Article 1 */}
                {
                  products.length > 0 ? (

                    <div className="latest-article-box" >
                      <img src={products[3].image} alt="Latest Article" />
                      <div className="newsletter-article-text">
                        <div className="newsletter-article-date">

                          <p>{formatDate(products[3].createdAt)}</p>


                          <span>
                            <RiMore2Fill />
                          </span>
                        </div>
                        <h4>
                          {products[3].mainheading}
                        </h4>
                        <div className="newsletter-written-likecomment">
                          <div className="newsletter-writtinsoul-txt">
                            <p>
                              Written by <span>{products[3].writer}</span>
                            </p>
                            <div className="newsletter-likecomment-share">
                              <span>
                                <RiThumbUpFill /> 35
                              </span>
                              <span>
                                <RiChat3Fill /> 25
                              </span>
                              <span>
                                <RiShareFill /> 15
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>) : (<div className="latest-article-box" onClick={goto}>
                      <img src={NewsletterLatestArticleImg} alt="Latest Article" />
                      <div className="newsletter-article-text">
                        <div className="newsletter-article-date">
                          <p>May 24, 2024</p>
                          <span>
                            <RiMore2Fill />
                          </span>
                        </div>
                        <h4>
                          10 Ways To Stay Healthy While Working A Crazy News
                          Schedule
                        </h4>
                        <div className="newsletter-written-likecomment">
                          <div className="newsletter-writtinsoul-txt">
                            <p>
                              Written by <span>Soul Witness</span>
                            </p>
                            <div className="newsletter-likecomment-share">
                              <span>
                                <RiThumbUpFill /> 35
                              </span>
                              <span>
                                <RiChat3Fill /> 25
                              </span>
                              <span>
                                <RiShareFill /> 15
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)
                }
                {/* Article 2 */}

                {
                  // products.length>0 && products.map((e,i)=>(
                  // products.slice(0, visibleCount).map((e, i) => (
                    sortedProducts .map((e, i) => (
                    <div className="newsletter-slide-article" onClick={() => goto(e)} key={i}>
                      <img src={e.image} alt="Latest Article" />
                      <div className="newsletter-article-text">
                        <div className="newsletter-article-date">

                          <p>{formatDate(e.createdAt)}</p>

                          <span>
                            <RiMore2Fill />
                          </span>
                        </div>
                        <h4>
                          {e.mainheading}
                        </h4>
                        <div className="newsletter-written-likecomment">
                          <div className="newsletter-writtinsoul-txt">
                            <p>
                              Written by <span>{e.writer}</span>
                            </p>
                            <div className="newsletter-likecomment-share">
                              <span>
                                <RiThumbUpFill /> 35
                              </span>
                              <span>
                                <RiChat3Fill /> 25
                              </span>
                              <span>
                                <RiShareFill /> 15
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }

                <div className="newsletter-pagination-slide">
                  <div className="pagination">
                    {/* Left Arrow */}
                    <a href="#" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
                      <RiArrowLeftSLine />
                    </a>

                    {/* First Page */}
                    {start > 1 && (
                      <>
                        <a href="#" onClick={() => changePage(1)} className={currentPage === 1 ? 'active' : ''}>1</a>
                        <span>...</span>
                      </>
                    )}

                    {/* Middle Page Numbers */}
                    {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((number) => (
                      <a
                        href="#"
                        key={number}
                        onClick={() => changePage(number)}
                        className={currentPage === number ? 'active' : ''}
                      >
                        {number}
                      </a>
                    ))}

                    {/* Ellipsis and Last Page */}
                    {end < pageCount && (
                      <>
                        <span>...</span>
                        <a href="#" onClick={() => changePage(pageCount)} className={currentPage === pageCount ? 'active' : ''}>
                          {pageCount}
                        </a>
                      </>
                    )}

                    {/* Right Arrow */}
                    <a href="#" onClick={() => changePage(currentPage + 1)} disabled={currentPage === pageCount}>
                      <RiArrowRightSLine />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="newsletter-side-sec">
                <div className="newsletter-side-head newsletter-side-head-alt">
                  <h3>Recommend</h3>
                  <a onClick={newsletter}>See all</a>
                </div>
                <Newslettersidesd />
                <div class="side-subscribe-box">
                  <h5 style={{ paddingBottom: '5px' }}>Subscribe to our Newsletter, so you'll never miss one</h5>
                  <input type="email" placeholder="Your email" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
                  <button onClick={handleSave}>Submit</button>
                </div>
                {/* Follow Us */}
                <div className="newsletter-follow-box">
                  <h4>Follow RMS</h4>
                  <div className="follow-us-rate">
                    <ul>
                      <li>
                        <a href="#">
                          <RiFacebookFill /> @RateMyStation{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiInstagramLine /> @RateMyStation{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiTwitterFill /> @RateMyStation{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="latesthomepg-line">
                <hr />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ratemystation-shop-sec">
        <h4 >RateMyStation's Shop</h4>

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

export default Newsletter;
