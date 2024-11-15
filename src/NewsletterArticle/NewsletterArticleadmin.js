import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  RiThumbUpFill,
  RiChat3Fill,
  RiShareFill,
  RiBookmarkFill,
  RiFlagFill,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiSearchLine,
  RiSaveFill,
  RiSendPlaneFill  
} from "react-icons/ri";

// Importing images
import BestsellerImage from "../img/ratemystation-prod-bestseller-img.png";
import latestarticleImg from "../img/newsletter-latestarticle-img.png";
import userImg from "../img/newsletter-comment-user-img.png";
import userImg2 from "../img/newsletter-comment-user-img-2.png";
import soulWitnessImg from "../img/soul-witness-userimg.png";
import moreArticleImg1 from "../img/more-soul-articleimg.png";
import moreArticleImg2 from "../img/more-soul-articleimg-2.png";
import moreArticleImg3 from "../img/more-soul-articleimg-3.png";
import userCommentImg from "../img/newsletter-usercomment-type.png";
import ProdImage1 from "../img/ratemystation-prod-img-1.png";
import ProdImage2 from "../img/ratemystation-prod-img-2.png";
import ProdImage3 from "../img/ratemystation-prod-img-3.png";
import ProdImage4 from "../img/ratemystation-prod-img-4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newslettersidesd from "../Newslettersidesecsd/Newslettersidesd";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { baseurl } from "../baseurl";
import Header1 from "../Header/Header2";
import ProductsLimitedComponent from "../Shop/ProductsLimitedComponent";
import AdminHeader from "../admin/AdminHeader/AdminHeader";

const NewsletterArticle = () => {
  const navigate = useNavigate();
  const news_data= localStorage.getItem('article')
  const article = JSON.parse(news_data);
  console.log(news_data,"NEWS DATA")

  const [comments, setCommnets] = useState("");
  const [articles, setArticle] = useState({});
  const [similar, setSimilar] = useState([]);

  


  
  useEffect(() => {
    fetchArticleData();
  }, []);



  const fetchArticleData = async () => {
   const  articleId = article.id;
    try {
      // const response = await axios.get(`${baseurl}/getstation`);
      const response = await axios.get(`${baseurl}/getarticlebyid/${articleId}`);
      console.log("xxxxx", response.data);
      setArticle(response.data.article)
      setSimilar(response.data.similar)

      console.log('counts' , response.data.similar.lenght)

     
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  const calculateHoursAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - createdDate;
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    return diffInHours;
  };



  



  const handleSubmit = async (e) => {
    const currentuser = localStorage.getItem('userData')
    const current = JSON.parse(currentuser);

    if(current == null){
      toast.error('Please login to comment');
      return;

    }
    const userId = current.id;
    const newsdata= localStorage.getItem('article')
    const articles = JSON.parse(news_data);
    const articleId = articles.id

    console.log(articleId);

    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/savecommnets`, { comments, userId, articleId });
      toast.success('Commnet post Sucessfully',);
      fetchArticleData();
     
     

    } catch (error) {
      console.error("Login error:", error);
      toast.error('Invalid username or password', error);

    }
  };



  const handleSubscribed = async (e) => {
    const currentuser = localStorage.getItem('userData')
    const current = JSON.parse(currentuser);
    const userId = current.id;
    const newsdata= localStorage.getItem('article')
    const articles = JSON.parse(news_data);
    const articleId = articles.id

    console.log(articleId);

    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/savearticle`, { userId, articleId });
      toast.success('Subscribed Sucessfully',);
      fetchArticleData();
     
     

    } catch (error) {
      console.error("Login error:", error);
      toast.error('Invalid username or password', error);

    }
  };

  const mycart = () => {
    navigate("/mycart");
  };

  const proddetail = () => {
    navigate("/productdetail");
  };

  const shop = () => {
    navigate("/shop");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      {/* <Header1 /> */}
      {/* <Header /> */}
      <AdminHeader />

      <section className="newsletter-article-sec">
      <ToastContainer />
        <Container>
          <Row>
            <Col lg={10}>
              <div className="newsletter-article-detail">
                <div className="latest-article-box">
                  <img src={articles.image} alt="" />
                  <div className="newsletter-article-text">
                    <div className="newsletter-article-date">
                      {/* <p>{articles.createdAt}</p> */}
                      <p>{new Date(articles.createdAt).toLocaleDateString()}</p>

                    </div>
                    <h4>
                      {articles.mainheading}
                    </h4>
                    <div className="newsletter-written-likecomment">
                      <div className="newsletter-writtinsoul-txt">
                        <p>
                          Written by <span>{articles.writer}</span>
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
                <div className="newsletter-long-txt">
                  <Slider {...settings} className="newsletter-article-slider">
                    <div className="newsletter-article-decided">
                      <h4>
                       {articles.subheading}
                      </h4>
                      <p>
                     {
                      articles.description
                     }
                      </p>
                      <p>
                      {
                      articles.description
                     }
                      </p>
                      <p>
                      {
                      articles.description
                     }
                      </p>
                      <p>
                      {
                      articles.description
                     }
                      </p>
                      <p>
                      {
                      articles.description
                     }
                      </p>
                    </div>
                    <div className="newsletter-article-decided">
                      <h4>
                        So you decided you want…no, you NEED…to be healthier.
                      </h4>
                      <p>
                        Pellentesque vel tristique ultrices habitasse feugiat
                        nulla tempor quam. Et risus commodo natoque pulvinar eu,
                        interdum. Viverra tortor hac sollicitudin dictum sit.
                        Condimentum eget et commodo sapien porta felis amet
                        pellentesque.
                      </p>
                      <p>
                        Erat augue enim turpis risus urna, ut egestas vivamus
                        proin. Velit leo scelerisque pulvinar vestibulum in nunc
                        a tortor mollis. Fusce pretium est ipsum elementum
                        parturient. Venenatis, ac nulla non varius dolor. Ornare
                        consectetur mauris, adipiscing tristique a leo.
                      </p>
                      <p>
                        Habitant pharetra tellus habitasse vestibulum nibh
                        quisque. Sed vel condimentum enim leo tortor mi magna
                        tincidunt. Egestas bibendum id eget quisque semper
                        ultricies. Gravida viverra massa faucibus vestibulum
                        condimentum.
                      </p>
                      <p>
                        Pretium tortor venenatis, mattis lobortis. Sollicitudin
                        non sed eu, augue. Morbi purus ipsum ipsum ante felis.
                        Nisi, vulputate risus nisl, nulla amet morbi habitant
                        vel. Condimentum egestas vestibulum habitant vitae.
                        Faucibus bibendum lacinia volutpat nulla placerat semper
                        elementum gravida.
                      </p>
                      <p>
                        Mi vulputate arcu, at tincidunt enim sit eu platea leo.
                        Risus vitae in turpis elementum, viverra ultricies.
                        Commodo sed eget at massa, integer. Porta id id nisl
                        faucibus neque, purus. Fermentum enim, sed ut ultrices
                        amet turpis pharetra faucibus blandit. Aenean proin at
                        tortor tincidunt. Aenean sed ornare sit arcu mattis
                        amet, eget. Id sed amet cras urna et malesuada.
                      </p>
                    </div>
                    <div className="newsletter-article-decided">
                      <h4>
                        So you decided you want…no, you NEED…to be healthier.
                      </h4>
                      <p>
                        Pellentesque vel tristique ultrices habitasse feugiat
                        nulla tempor quam. Et risus commodo natoque pulvinar eu,
                        interdum. Viverra tortor hac sollicitudin dictum sit.
                        Condimentum eget et commodo sapien porta felis amet
                        pellentesque.
                      </p>
                      <p>
                        Erat augue enim turpis risus urna, ut egestas vivamus
                        proin. Velit leo scelerisque pulvinar vestibulum in nunc
                        a tortor mollis. Fusce pretium est ipsum elementum
                        parturient. Venenatis, ac nulla non varius dolor. Ornare
                        consectetur mauris, adipiscing tristique a leo.
                      </p>
                      <p>
                        Habitant pharetra tellus habitasse vestibulum nibh
                        quisque. Sed vel condimentum enim leo tortor mi magna
                        tincidunt. Egestas bibendum id eget quisque semper
                        ultricies. Gravida viverra massa faucibus vestibulum
                        condimentum.
                      </p>
                      <p>
                        Pretium tortor venenatis, mattis lobortis. Sollicitudin
                        non sed eu, augue. Morbi purus ipsum ipsum ante felis.
                        Nisi, vulputate risus nisl, nulla amet morbi habitant
                        vel. Condimentum egestas vestibulum habitant vitae.
                        Faucibus bibendum lacinia volutpat nulla placerat semper
                        elementum gravida.
                      </p>
                      <p>
                        Mi vulputate arcu, at tincidunt enim sit eu platea leo.
                        Risus vitae in turpis elementum, viverra ultricies.
                        Commodo sed eget at massa, integer. Porta id id nisl
                        faucibus neque, purus. Fermentum enim, sed ut ultrices
                        amet turpis pharetra faucibus blandit. Aenean proin at
                        tortor tincidunt. Aenean sed ornare sit arcu mattis
                        amet, eget. Id sed amet cras urna et malesuada.
                      </p>
                    </div>
                  </Slider>
                  {/* <div className="article-reactions">
                    <ul>
                      <li>
                        <a href="#">
                          <RiThumbUpFill />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiChat3Fill />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <RiShareFill />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <RiBookmarkFill />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">
                          <RiFlagFill />
                        </a>
                      </li>
                    </ul>
                  </div> */}

              

                  <div class="newsletter-comment-box">
                  <p>{articles.Comments ? `${articles.Comments.length} Comment${articles.Comments.length > 1 ? 's' : ''}` : '0 Comment'}</p>

                    {
               articles.Comments && articles.Comments.map((es,i)=>(
                    <div class="newsletter-detail-comment">
                      <img src={es.User  && es.User.Profile ? es.User.Profile.image : userImg} alt="" />
                      <div class="newsletter-comment-txt">
                        <div class="newsletter-detail-comment-para">
                          <h6>{es.User.username}</h6>
                          <p>
                          {es.comments}
                          </p>
                        </div>
                        <div class="newsletter-comment-reaction">
                          <ul>
                            <li>
                              <a href="#">Like</a>
                            </li>
                            <li style={{opacity:0}}>
                              <a href="#">Reply</a>
                            </li>
                            <li style={{opacity:0}}>
                              <a href="#">Permalink</a>
                            </li>
                          </ul>
                          <p>{calculateHoursAgo(es.createdAt)} hours ago</p>
                        </div>
                      </div>
                   
                    </div>
                       ))}
                   
                    
                  </div>
                  <div class="other-newsletter-articles">
                    <div class="soul-witness-acc-subs">
                      <div class="soul-witness-user-imgtxt">
                        <img src={soulWitnessImg} alt="" />
                        <div class="soul-witness-txt">
                          <h4>{articles.writer}</h4>
                          <h6> articles</h6>
                        </div>
                      </div>
                    
                    </div>
                    <div class="more-from-soul-witness-box">
                      <h5>More from {articles.writer}</h5>

                      
                    {
               similar.map((ess,i)=>(
                      <div class="more-soul-article">
                        <img src={ess.image} alt="" />


                        <div class="more-soul-articletxt">
                          <h4>
                           {ess.mainheading}
                          </h4>
                          <span>
                            <i class="ri-time-line"></i> May 24, 2022
                          </span>
                        </div>
                      </div>
               ))}
                  
                    </div>
                  </div>
                </div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default NewsletterArticle;
