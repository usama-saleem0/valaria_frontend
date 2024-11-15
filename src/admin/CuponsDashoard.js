import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InlineProdImg from "../../src/img/inlineprod_img.png"
import DashCuponImg from "../../src/img/dashcoupon-img.png"
import { FaChevronDown } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { FaCirclePlus } from 'react-icons/fa6'

const CuponsDashoard = () => {
  return (
    <>
<section className="ah1">
          <Row>
            <Col lg={12}>
              <div className="dashboard_product_head">
                <h2>Coupons</h2>
                <div className="dashboard_addnewprod">
                  <Row>
                    <Col lg={5} className='p-0'>
                      <div className="addnewprod_head">
                        <a href="#"><FaCirclePlus /> Add New Coupons</a>
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
                <Row><div></div>
                  <Col lg={12} className='p-0'>
                    <div className="product_dashboard_header">
                      <div className="flex-box">
                        <Col lg={3} className='p-0'>
                          <div className="product_dashboard_header_left">
                            <input type="checkbox" name="" id="" />
                            <select name="" id="">
                              <option value="">Coupons</option>
                              <option value="">Lorem Ipsum</option>
                              <option value="">Lorem Ipsum</option>
                            </select>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="product_dashboard_header_right">
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Discount Type</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Amount</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Free Shipping</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Coupon Expiry Date</option>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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
                        <Col lg={3} className='p-0'>
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="inlineprod_namebox">
                              <img src={DashCuponImg} alt="" />
                              <div className="inlineprod_name">
                                <h3>Coupon Name</h3>
                                <p>Code : VCHR01</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={9} className='p-0'>
                          <div className="inlinprod_detail">
                            <div className="inlineprod_instock">
                              <h5>Fixed Cart Disount</h5>
                            </div>
                            <div className="inlineprod_price inlineprod_amout">
                              <p>53</p>
                            </div>
                            <div className="inlineprod_category inlineprod_allowed">
                              <p>Allowed</p>
                            </div>
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022 - <br />
                                July 23, 2022</p>
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

export default CuponsDashoard