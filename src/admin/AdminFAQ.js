import React, { useEffect, useState } from "react";
import NewsletterDashboardTable from "./NewsletterDashboardTable";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import EmailSubscriberBox from "../EmailSubscriberBox/EmailSubscriberBox";
import WritterSubscriberBox from "../WritterSubscriberBox/WritterSubscriberBox";
import { baseurl } from "../baseurl";
import axios from "axios";
import SkillsForm from "../Popups/Profile_popups/Skills_h";
import AddFAQ from "../Popups/Profile_popups/add_faq";
import Faqlist from "./Faqlist";

const AdminFAQ = () => {

    
    const [showModal, setShowModal] = useState(false);
    const [showFaq, setFaq] = useState([]);


    const handleSelectChange = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const Helloworld = () => {

        const faqs = JSON.parse(localStorage.getItem('Faqs'));
        setFaq(faqs)
     
        setShowModal(false);
    }
   

    return (
        <>


<Modal
                show={showModal}
                onHide={handleClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                   <AddFAQ onCancel={handleClose} onSuccess={Helloworld} />
                </Modal.Body>
            </Modal>
            <section className="ah1">
                <Row>
                    <Col lg={12}>
                        <div className="dashboard_pages_head">
                            <h3>FAQ</h3>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="addnewprod_head">
                            <a   onClick={handleSelectChange} style={{color:'white'}}>
                                <FaCirclePlus /> New FAQ
                            </a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="pagesdash_filter_flex newsletter_filter_flex">
                            <h5>Sort:</h5>
                            <select name="" id="">
                                <option value="">Newest</option>
                                <option value="">Newest</option>
                                <option value="">Newest</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Faqlist showFaq={showFaq} />
                    </Col>
                </Row>
               
            </section>
        </>
    );
};

export default AdminFAQ;
