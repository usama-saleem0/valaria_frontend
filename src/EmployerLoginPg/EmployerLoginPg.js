import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import { Col, Container, Row } from "react-bootstrap";
import employerratemystation from "../img/employer-ratemy-station.png";
import EmployerLoginForm from "../Employerloginform/EmployerLoginForm";
import NewsroomLoginForm from "../NewsroomLoginForm/NewsroomLoginForm";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { useNavigate } from "react-router-dom";

const EmployerLoginPg = () => {
  const navigate = useNavigate();
  const employeereg = () => navigate("/employerregister");

  return (
    <>
      <Header />
      <section className="employer-login-pg-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="employer-login-box">
                <Row>
                  <Col lg={6} className="p-0">
                    <div className="rating-real-journalist">
                      <img src={employerratemystation} alt="" />
                      <h3>Find thousands of Ratings from real Journalists</h3>
                    </div>
                  </Col>
                  <Col lg={6} className="p-0">
                    <div className="employer-newroom-box">
                      <EmployerLoginForm />
                    </div>
                    <div className="employer-dont-have-acc">
                      <a href="#">
                        Don’t have any account?{" "}
                        <span onClick={employeereg}>Register here</span>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default EmployerLoginPg;
