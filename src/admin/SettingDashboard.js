import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Col, Container, Row } from "react-bootstrap";
import 'react-tabs/style/react-tabs.css';


const SettingDashboard = () => {
    return (
        <>
        <section className="ah1">
                    <Row>
                        <Col lg={12}>
                            <div className="dashboard_product_head">
                                <h2>Store Settings</h2>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="setting_dashboard_tabs">
                                <Tabs>
                                    <TabList>
                                        <Tab>General</Tab>
                                        <Tab>Settings 1</Tab>
                                        <Tab>Settings 2</Tab>
                                        <Tab>Settings 3</Tab>
                                        <Tab>Settings 4</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="setting_dashboard_setting">
                                            <Row>
                                                <Col lg={12}>
                                                    <h4>Store address</h4>
                                                    <p>This is where your business is located. Tax rates and shipping rates will use this address.</p>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Address line 1</label>
                                                        <input type="text" name="" id="" placeholder="Type here..." />
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Address line 1</label>
                                                        <input type="text" name="" id="" placeholder="Type here..." />
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Address line 1</label>
                                                        <input type="text" name="" id="" placeholder="Type here..." />
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Address line 1</label>
                                                        <select name="" id="">
                                                            <option value="">United States (US) - Georgia</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_first_form_btn">
                                                        <a href="#">Save</a>
                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>
                                        <div className="setting_dashboard_setting general-dashboard">
                                            <Row>
                                                <Col lg={12}>
                                                    <h4>General options</h4>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Selling location(s)</label>
                                                        <select name="" id="">
                                                            <option value="">Sell to all countries</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Default customer location</label>
                                                        <select name="" id="">
                                                            <option value="">Shop country/region</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Shipping location(s)</label>
                                                        <select name="" id="">
                                                            <option value="">Shipping to all countries you sell to</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_checkbox">
                                                        <input type="checkbox" name="" id="" />
                                                        <div className="store_checkbox_box_txt">
                                                            <h4>Enable tax rates and calculations</h4>
                                                            <h6>Rates will be configurable and taxes will be calculated during checkout.</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_checkbox">
                                                        <input type="checkbox" name="" id="" />
                                                        <div className="store_checkbox_box_txt">
                                                            <h4>Enable the use of coupon codes</h4>
                                                            <h6>Coupons can be applied from the cart and checkout pages.</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_checkbox">
                                                        <input type="checkbox" name="" id="" />
                                                        <div className="store_checkbox_box_txt">
                                                            <h4>Calculate coupon discounts sequentially</h4>
                                                            <h6>When applying multiple coupons, apply the first coupon <br /> to the full price and the second coupon to the discounted price and s</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_first_form_btn">
                                                        <a href="#">Save</a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="setting_dashboard_setting currency-options-form">
                                            <Row>
                                                <Col lg={12}>
                                                    <h4>Currency options</h4>
                                                    <p>The following options affect how prices are displayed on the frontend.</p>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Currency</label>
                                                        <select name="" id="">
                                                            <option value="">United States (US) Dollar ($)</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Currency position</label>
                                                        <select name="" id="">
                                                            <option value="">Left</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Thousand separator</label>
                                                        <select name="" id="">
                                                            <option value="">,</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Decimal separator</label>
                                                        <select name="" id="">
                                                            <option value="">.</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box ">
                                                        <label htmlFor="">Number of decimals</label>
                                                        <input type="number" value={2} name="" id="" />
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_first_form_btn">
                                                        <a href="#">Save</a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                    <div className="setting_dashboard_setting general-dashboard">
                                            <Row>
                                                <Col lg={12}>
                                                    <h4>General options</h4>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Selling location(s)</label>
                                                        <select name="" id="">
                                                            <option value="">Sell to all countries</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Default customer location</label>
                                                        <select name="" id="">
                                                            <option value="">Shop country/region</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Shipping location(s)</label>
                                                        <select name="" id="">
                                                            <option value="">Shipping to all countries you sell to</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_checkbox">
                                                        <input type="checkbox" name="" id="" />
                                                        <div className="store_checkbox_box_txt">
                                                            <h4>Enable tax rates and calculations</h4>
                                                            <h6>Rates will be configurable and taxes will be calculated during checkout.</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_checkbox">
                                                        <input type="checkbox" name="" id="" />
                                                        <div className="store_checkbox_box_txt">
                                                            <h4>Enable the use of coupon codes</h4>
                                                            <h6>Coupons can be applied from the cart and checkout pages.</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_checkbox">
                                                        <input type="checkbox" name="" id="" />
                                                        <div className="store_checkbox_box_txt">
                                                            <h4>Calculate coupon discounts sequentially</h4>
                                                            <h6>When applying multiple coupons, apply the first coupon <br /> to the full price and the second coupon to the discounted price and s</h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_first_form_btn">
                                                        <a href="#">Save</a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                    <div className="setting_dashboard_setting currency-options-form">
                                            <Row>
                                                <Col lg={12}>
                                                    <h4>Currency options</h4>
                                                    <p>The following options affect how prices are displayed on the frontend.</p>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Currency</label>
                                                        <select name="" id="">
                                                            <option value="">United States (US) Dollar ($)</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Currency position</label>
                                                        <select name="" id="">
                                                            <option value="">Left</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Thousand separator</label>
                                                        <select name="" id="">
                                                            <option value="">,</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box">
                                                        <label htmlFor="">Decimal separator</label>
                                                        <select name="" id="">
                                                            <option value="">.</option>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="store_input_box ">
                                                        <label htmlFor="">Number of decimals</label>
                                                        <input type="number" value={2} name="" id="" />
                                                    </div>
                                                </Col>
                                                <Col lg={12}>
                                                    <div className="store_first_form_btn">
                                                        <a href="#">Save</a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>Any content 4</h2>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>Any content 5</h2>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
              
            </section>
        </>
    );
};

export default SettingDashboard;
