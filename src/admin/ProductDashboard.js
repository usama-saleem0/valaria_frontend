import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InlineProdImg from "../../src/img/inlineprod_img.png"
import { FaChevronDown } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { FaCirclePlus } from 'react-icons/fa6'

const ProductDashboard = () => {  
  return (
    <>
<section className="ah1">
 
          <Row>
            <Col lg={12}>
              <div className="dashboard_product_head">
                <h2>Your Products</h2>
                <div className="dashboard_addnewprod">
                  <Row>
                    <Col lg={5} className='p-0'>
                      <div className="addnewprod_head">
                        <a href="#"><FaCirclePlus /> Add New Product</a>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="dashprod_filter_box">
                        <div className="dashfilter-stock">
                          <div className="dashfilter-select-box">
                            <label htmlFor="">Filter:</label>
                            <select name="" id="">
                              <option value="">Category</option>
                              <option value=""></option>
                              <option value=""></option>
                            </select>
                          </div>
                          <div className="dashstock_box">
                            <select name="" id="">
                              <option value="">Stock</option>
                              <option value=""></option>
                              <option value=""></option>
                            </select>
                          </div>
                        </div>
                        <div className="dashfilter-select-box">
                          <label htmlFor="">Sort:</label>
                          <select name="" id="">
                            <option value="">Newest</option>
                            <option value=""></option>
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="product_dashboard_box">
                <Row>
                  <Col lg={12} className='p-0'>
                    <div className="product_dashboard_header">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="product_dashboard_header_left">
                            <input type="checkbox" name="" id="" />
                            <select name="" id="">
                              <option value="">Product Name</option>
                              <option value="">Lorem Ipsum</option>
                              <option value="">Lorem Ipsum</option>
                            </select>
                          </div>
                        </Col>
                        <Col lg={8} className='p-0'>
                          <div className="product_dashboard_header_right">
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Stock</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Price</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Category</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Date Published</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Action</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                  </Col>
                  <Col lg={12} className='p-0'>
                    <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                      <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box">
                        <Col lg={4} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={InlineProdImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Porta metus ut ultrices nisl nam pulvinar tempus. Urna.</h3>
                                <p>SKU : #000</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8}>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h6>In Stock</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 - $11.00</p>
                            </div>
                            <div className="inlineprod_category">
                              <p>T-Shirts, Journalist</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_action">
                              <h5><IoMdSettings /> <span><FaChevronDown /></span></h5>
                            </div>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
     
      </section>
    </>
  )
}

export default ProductDashboard