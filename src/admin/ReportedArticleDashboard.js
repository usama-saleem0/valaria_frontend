import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dashnewsletterimg from "../img/dashnewsletter-img.png"
import DashboardNewsletterArticle from '../DashboardNewsletterArticle/DashboardNewsletterArticle'


const ReportedArticleDashboard = () => {
  return (
    <>

<section className="ah1">
          <Row>
            <Col lg={12}>
              <div className="dashboard_product_head reported-rating-border">
                <h2>Reported Rating</h2>
                <p>Neque ut amet habitasse donec sed vitae massa.</p>
                <div className="dashboard_addnewprod">
                  <Row>
                    <Col lg={5} className="p-0">
                      <div className="ignore_delete_btns">
                        <a href="#" className="ignore_all">
                          Ignore all
                        </a>
                        <a href="#" className="delete_all">
                          Delete all
                        </a>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="dashprod_filter_box dashprod-sort">
                        <div className="dashfilter-stock">
                          <div className="dashfilter-select-box">
                            <label htmlFor="">Sort:</label>
                            <select name="" id="">
                              <option value="">Newest</option>
                              <option value=""></option>
                              <option value=""></option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <DashboardNewsletterArticle/>
             
            </Col>
          </Row>
      
      </section>


    </>
  )
}

export default ReportedArticleDashboard