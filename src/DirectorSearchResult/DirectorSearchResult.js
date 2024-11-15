import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NewsDirectorCard from '../NewsDirectorCard/NewsDirectorCard';
import BestsellerImage from '../img/ratemystation-prod-bestseller-img.png';
import ProdImage1 from '../img/ratemystation-prod-img-1.png';
import ProdImage2 from '../img/ratemystation-prod-img-2.png';
import ProdImage3 from '../img/ratemystation-prod-img-3.png';
import ProdImage4 from '../img/ratemystation-prod-img-4.png';
import Lookingforwork from '../Lookingforwork/Lookingforwork';
import newsuser1 from "../img/admin.png"
import newsuser2 from "../img/newsuser2.png"
import newsuser3 from "../img/newsuser3.png"
import newsuser4 from "../img/newsuser4.png"
import newsuser5 from "../img/newsuser5.png"
import newsuser6 from "../img/newsuser6.png"
import RmsHeader from '../Rmsheader/RmsHeader';
import Footerah from '../footerah/Footerah';
import RmsHeaderAlt from '../Rmsheader/RmsHeaderalt';

const NewsdirectorData = [
  {
    name: "Brooklyn Simmons",
    designation: "News Director at ",
    company: "KABC",
    image: newsuser1
  },
  {
    name: "Devon Lane",
    designation: "News Director at ",
    company: "KABC",
    image: newsuser2
  },
  {
    name: "Darlene Robertson",
    designation: "News Director at ",
    company: "KABC",
    image: newsuser3
  },
  {
    name: "Esther Howard",
    designation: "News Director at ",
    company: "KABC",
    image: newsuser4
  },
  {
    name: "Jacob Jones",
    designation: "News Director at ",
    company: "KABC",
    image: newsuser5
  },
  {
    name: "Albert Flores",
    designation: "News Director at ",
    company: "KABC",
    image: newsuser6
  },
]


const DirectorSearchResult = () => {

  const navigate = useNavigate()
  
    const proddetail = () => {
      navigate('/productdetail')
    }
  
    const mycart = () => {
      navigate('/mycart')
    }
  
    const shop = () => {
      navigate('/shop')
    }

  return (
    <>


        <RmsHeaderAlt/>

    
        <section className="director-search-result">
          <Container>
            <Row>
              <Col lg={12}>
                <div className='station-search-result-txt'>
                    <h4>Here are your result for "Lorem Ipsum"</h4>
                    <p>There are 12 Stations with <span>"Lorem Ipsum"</span> on <span>TV News Category</span></p>
                </div>
              </Col>
              <Col lg={8}>
                <NewsDirectorCard directors={NewsdirectorData}/>
                <div className="seeprofile-box-btn">
                <a href="#">Load more</a>
              </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
               <hr />
              </Col>
            </Row>
          </Container>
        </section>

      

        <section className="ratemystation-shop-sec">
                <h4>RateMyStation's Shop</h4>
                <Container>
                    <Row>
                        <Col lg={3} md={4}>
                            <div className="ratemystation-shop-prod">
                                <img src={ProdImage1} alt="Don’t Make Me Use My News Voice Face Mask" />
                                <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
                                <div className="ratemystation-prod-txt">
                                    <h3>Don’t Make Me Use My News Voice Face Mask</h3>
                                    <h6>$18.00</h6>
                                    <div className="ratemystation-prod-btn">
                                        <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                                        <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="ratemystation-shop-prod">
                                <img src={ProdImage2} alt="America Needs Local News Sweatshirt" />
                                <img className="prod-abslt-ratems" src={BestsellerImage} alt="Bestseller" />
                                <div className="ratemystation-prod-txt">
                                    <h3>America Needs Local News Sweatshirt</h3>
                                    <h6>$25.00 – $33.50</h6>
                                    <div className="ratemystation-prod-btn">
                                        <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                                        <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="ratemystation-shop-prod">
                                <img src={ProdImage3} alt="Anonymous Source Onesie" />
                                <div className="ratemystation-prod-txt">
                                    <h3>Anonymous Source Onesie</h3>
                                    <h6>$18.00</h6>
                                    <div className="ratemystation-prod-btn">
                                        <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                                        <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="ratemystation-shop-prod">
                                <img src={ProdImage4} alt="You Are A PKG Framed Poster" />
                                <div className="ratemystation-prod-txt">
                                    <h3>You Are A PKG Framed Poster</h3>
                                    <h6>$26.00 – $105.00</h6>
                                    <div className="ratemystation-prod-btn">
                                        <a onClick={proddetail} variant="light" className="prod-light-btn">View Details</a>
                                        <a onClick={mycart} variant="dark" className="prod-dark-btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Lookingforwork /> 

            <Footerah/>
    </>
  )
  
}

export default DirectorSearchResult