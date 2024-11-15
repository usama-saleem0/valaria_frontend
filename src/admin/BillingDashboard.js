import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import paypalimg from "../img/Paypal.svg"
import TransactionHistroyTable from '../TransactionHistroyTable/TransactionHistroyTable'
import axios from 'axios'
import { baseurl } from '../baseurl'


const BillingDashboard = () => {

    const [employeedata, setEmplyeeData] = useState([]);
    const [total, setTotal] = useState(0);




    useEffect(() => {


        fecthemployee();
       
    
      }, []);
    
    
      
      const fecthemployee = async () => {
    
          try {
            const response = await axios.get(`${baseurl}/subscription_user`); 
    
            console.log(response.data.subscription);
    
            setEmplyeeData(response.data.subscription)
            setTotal(response.data.totalSum)
            
       
          } catch (error) {
            console.error('Error fetching articles:', error);
          }
        };
    
    return (
<section className="ah1">
                <Row>
                    <Col lg={12}>
                        <div className="billing_sec_head">
                            <h3>Billing</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="billing_earning_box">
                            <h5>Earnings</h5>
                            <div className="billing_payment_box">
                                <div className="billing_payment_number">
                                    <h2>${total}</h2>
                                    <h6>Subscription Revenue</h6>
                                </div>
                                <div className="billing_payment_svf">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="44" viewBox="0 0 50 44" fill="none">
                                        <path d="M0 38.1861V5.43971C0.0807234 5.16239 0.164051 4.88637 0.24217 4.60904C1.02727 1.81237 3.43855 0.0117179 6.44615 0.00520796C15.9941 -0.00173599 25.542 -0.00173599 35.0899 0.00520796C35.1863 0.00520796 35.2839 0.00520796 35.3816 0.00520796C37.7551 0.108065 39.4464 1.82799 39.4893 4.20412C39.505 5.14546 39.4893 6.0881 39.4893 7.02944C39.4893 7.44608 39.4893 7.86402 39.4893 8.33143C40.1508 8.33143 40.7471 8.33143 41.3447 8.33143C43.9942 8.34315 45.7181 10.0722 45.7272 12.7335C45.7272 13.8701 45.7272 15.0067 45.7272 16.1434C45.7272 16.2983 45.7102 16.4545 45.6985 16.6394C44.0203 16.6394 42.3824 16.6264 40.751 16.6459C40.1335 16.6425 39.5169 16.6943 38.9087 16.8009C33.87 17.7787 30.6957 22.139 31.2777 27.2585C31.7373 31.3037 35.2383 34.8686 39.2849 35.241C41.2171 35.4193 43.1753 35.3282 45.1231 35.3581C45.3118 35.3581 45.5019 35.3581 45.6959 35.3581C45.6959 36.9882 45.6959 38.5584 45.6894 40.1299C45.6715 40.3406 45.6233 40.5476 45.5462 40.7445C44.9785 42.5672 43.4096 43.6648 41.3577 43.6648C29.6988 43.6648 18.0395 43.6648 6.37975 43.6648C6.24955 43.6648 6.11935 43.6648 5.98915 43.6583C4.0544 43.5724 2.50763 42.7339 1.30199 41.2379C0.580687 40.3448 0.230452 39.2914 0 38.1861ZM35.3256 4.17157H7.54373C7.08933 4.17157 6.63234 4.16116 6.18054 4.17157C5.73829 4.18316 5.31136 4.33603 4.96227 4.6078C4.61318 4.87958 4.36028 5.25598 4.24058 5.68188C3.83306 7.08933 4.88116 8.33794 6.48781 8.33794C15.9351 8.33794 25.3819 8.33794 34.8282 8.33794C34.9858 8.33794 35.1433 8.32102 35.3256 8.3119V4.17157ZM49.8988 26.0138C49.8988 27.5084 49.8988 29.0083 49.8988 30.4965C49.8988 31.6227 49.2777 32.2386 48.145 32.2399C45.6126 32.2399 43.0789 32.2516 40.5453 32.2399C37.3124 32.2229 34.6863 29.8338 34.3283 26.6022C33.9897 23.553 36.0938 20.6404 39.1691 19.9309C39.6281 19.8281 40.097 19.7757 40.5674 19.7746C43.1011 19.7603 45.6334 19.7655 48.1671 19.7681C49.2621 19.7681 49.8948 20.397 49.8974 21.4854C49.9027 22.9944 49.8988 24.5034 49.8988 26.0138ZM42.6076 25.9955C42.6061 25.5867 42.4833 25.1874 42.2549 24.8483C42.0265 24.5092 41.7027 24.2454 41.3244 24.0903C40.946 23.9352 40.5302 23.8958 40.1295 23.977C39.7288 24.0581 39.3611 24.2563 39.073 24.5464C38.7849 24.8365 38.5893 25.2056 38.5109 25.6068C38.4325 26.0081 38.4748 26.4236 38.6325 26.8009C38.7902 27.1781 39.0562 27.5001 39.3969 27.7261C39.7376 27.9522 40.1377 28.0722 40.5466 28.0709C40.8193 28.0735 41.0898 28.0216 41.3421 27.9181C41.5945 27.8145 41.8235 27.6616 42.0158 27.4682C42.2081 27.2748 42.3598 27.0448 42.4619 26.7919C42.564 26.539 42.6144 26.2682 42.6102 25.9955H42.6076Z" fill="#BDBDBD" />
                                    </svg>
                                </div>
                            </div>
                            <a href="#">Withdraw</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="withdrawal_options_box">
                            <h5>Withdrawal Options </h5>
                            <div className="blldash_billing_transfer_box">
                                <div className="billdash_billing_checkbox">
                                    <div class="checkbox-wrapper">
                                        <input checked="" type="checkbox" />
                                        <svg viewBox="0 0 35.6 35.6">
                                            <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                            <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                            <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div className="billdash_payment_namewedit">
                                    <div className="billdash_billingtransfer_name">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path d="M0 14.1393V10.4127C0.195166 10.2216 0.361571 9.98127 0.589607 9.84466C5.81595 6.72679 11.0464 3.61646 16.281 0.513659C17.4037 -0.152987 18.5408 -0.180721 19.6707 0.489007C24.9436 3.61577 30.2165 6.74494 35.4894 9.8765C35.6519 9.95898 35.7869 10.0868 35.878 10.2446C35.9692 10.4023 36.0126 10.5831 36.003 10.765C35.9927 11.7717 36.003 12.7793 36.003 13.787C36.003 14.4126 35.7062 14.7187 35.0785 14.7289C34.4232 14.7402 33.7668 14.7289 33.1105 14.7289C32.9882 14.7289 32.865 14.7423 32.7468 14.7495V29.4383C32.8136 29.4476 32.8598 29.4568 32.906 29.4609C34.5002 29.5852 35.7277 30.6535 35.9363 32.2343C36.0513 33.0982 35.965 33.9877 36.0071 34.8639C36.0308 35.3693 35.888 35.7514 35.437 36H0.5629L0 35.4381V32.2744C0.161269 31.6581 0.368761 31.0715 0.803263 30.5857C1.4545 29.8564 2.27728 29.4989 3.24695 29.4455V14.732C2.50634 14.732 1.79245 14.7146 1.0806 14.7382C0.584471 14.7546 0.21571 14.6005 0 14.1393ZM14.7032 29.4445V14.7557H9.84562V29.4445H14.7032ZM26.1615 29.4445V14.7557H21.2957V29.4445H26.1615ZM18.0005 4.92441C17.3544 4.92462 16.7228 5.11621 16.1854 5.47498C15.6481 5.83376 15.2291 6.34366 14.9812 6.94034C14.7333 7.53702 14.6678 8.19375 14.7928 8.82765C14.9177 9.46156 15.2277 10.0443 15.6835 10.5022C16.1393 10.9601 16.7205 11.2728 17.3538 11.4008C17.9871 11.5287 18.6442 11.4663 19.242 11.2212C19.8398 10.9761 20.3517 10.5595 20.713 10.0238C21.0743 9.4882 21.2688 8.85753 21.2721 8.21142C21.274 7.78053 21.1908 7.35351 21.0272 6.95486C20.8637 6.55622 20.623 6.19379 20.319 5.88839C20.015 5.58298 19.6538 5.34062 19.2559 5.17519C18.858 5.00977 18.4314 4.92454 18.0005 4.92441Z" fill="#BDBDBD" />
                                        </svg></span>
                                        <h4>Bank Transfer</h4>
                                    </div>
                                    <a href="#">Edit</a>
                                </div>
                            </div>
                            <div className="blldash_billing_transfer_box">
                                <div className="billdash_billing_checkbox">
                                    <div class="checkbox-wrapper">
                                        <input checked="" type="checkbox" />
                                        <svg viewBox="0 0 35.6 35.6">
                                            <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                            <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                            <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div className="billdash_payment_namewedit">
                                    <div className="billdash_billingtransfer_name">
                                        <img src={paypalimg} alt="" />
                                    </div>
                                    <a href="#">Edit</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="transaction_histroy_head">
                            <h4>Transaction History</h4>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <TransactionHistroyTable employeedata = {employeedata}/>
                    </Col>
                </Row>
           
        </section>
    )
}

export default BillingDashboard