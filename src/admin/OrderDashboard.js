import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InlineProdImg from "../../src/img/inlineprod_img.png";
import { FaChevronDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

const OrderDashboard = () => {
  return (
    <>
      <section className="ah1">
          <Row>
            <Col lg={12}>
              <div className="dashboard_product_head">
                <h2>Orders</h2>
                <div className="dashboard_addnewprod">
                  <Row>
                    <Col lg={5} className="p-0">
                      <div className="addnewprod_head">
                        <a href="#">
                          <FaCirclePlus /> Add New Product
                        </a>
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
                  <Col lg={12} className="p-0">
                    <div className="product_dashboard_header">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                          <div className="product_dashboard_header_left">
                            <input type="checkbox" name="" id="" />
                            <div className="order-header-select">
                              <select name="" id="">
                                <option value="">Order</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                              <select name="" id="">
                                <option value="">Customer Name</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="order_dashboard_header_right">
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Date</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_status_select">
                              <select name="" id="">
                                <option value="">Status</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                            <div className="prodash_headright_select">
                              <select name="" id="">
                                <option value="">Total</option>
                                <option value="">Lorem</option>
                                <option value="">Lorem</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                  </Col>
                  <Col lg={12} className="p-0">
                    <div className="inline_product">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                          <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_completed">
                              <h6>Completed</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items</p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                        <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">    
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_processing">
                              <h6>Processing</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items </p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                        <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_canceled">
                              <h6>Canceled</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items</p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                        <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_completed">
                              <h6>Completed</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items</p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                        <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_processing">
                              <h6>Processing</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items</p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div>
                    <div className="inline_product">
                      <div className="flex-box-order">
                        <Col lg={4} className="p-0">
                        <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_canceled">
                              <h6>Canceled</h6>
                            </div>
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items</p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
                            </div>
                          </div>
                        </Col>
                        </div>
                    </div> 
                    <div className="inline_product">
                      <div className="flex-box-order"> 
                        <Col lg={4} className="p-0">
                           <div className="inlineprod_save">
                            <input type="checkbox" name="" id="" />
                            <div className="order-number-name">
                                <h5>#36960</h5>
                                <h4>Brooklyn Simmons</h4>
                            </div>
                          </div>
                        </Col>
                        <Col lg={8} className="p-0">
                          <div className="inlinprod_detail">
                            <div className="inlineprod_dtpub">
                              <p>June 23, 2022</p>
                            </div>
                            <div className="inlineprod_completed">
                              <h6>Completed</h6>
                            </div> 
                            <div className="inlineprod_price">
                              <p>$10.00 for 3 items</p>
                            </div>
                            <div className="inlineprod_view">
                              <a href="#">view</a>
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
  );
};

export default OrderDashboard;
