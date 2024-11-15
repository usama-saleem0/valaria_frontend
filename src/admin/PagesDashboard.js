import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import PagesDashboardTable from "../PagesDashboardTable/PagesDashboardTable";

const PagesDashboard = () => {
  return (
    <>
      <section className="ah1">
        <Row>
          <Col lg={12}>
            <div className="dashboard_pages_head">
              <h3>Pages</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pagesdash_add_search">
              <div className="addnewprod_head">
                <a href="#">
                  <FaCirclePlus /> Add New Product
                </a>
              </div>
              <div className="pagesdash_pagessearch">
                <input type="search" name="" id="" placeholder="Search page" />
                <span>
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pagesdash_filter_flex">
              <h5>Filter:</h5>
              <select name="" id="">
                <option value="">Status</option>
                <option value="">Status</option>
                <option value="">Status</option>
              </select>
              <select name="" id="">
                <option value="">SEO Score</option>
                <option value="">SEO Score</option>
                <option value="">SEO Score</option>
              </select>
              <select name="" id="">
                <option value="">Readability S</option>
                <option value="">Readability S</option>
                <option value="">Readability S</option>
              </select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <PagesDashboardTable />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default PagesDashboard;
