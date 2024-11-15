import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import chatman from "../img/admin.png"
import chatOneMan from "../img/userOneChat.png"

const ReportedDms = () => {
  return (
    <>
<section className="ah1">
          <Row>
            <Col lg={12}>
              <div className="reported_dms_head">
                <h4>Reported DMs</h4>
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
          <Row>
            <Col lg={6}>
              <div className="reported_dms_chatsuggestbox">
                <h1>Username001 <span>report</span> Brooklyn Simmons <span>in this</span> chat.</h1>
                <div className="reported_dms_chatman">
                  <div className="reported_dms_manchat">
                    <img src={chatman} alt="" />
                    <div className="reported_dms_mandata">
                      <h4>Brooklyn Simmons</h4>
                      <p>News Director at <span>Station name </span></p>
                    </div>
                  </div>
                  <a href="#">Close chat</a>
                </div>
              </div>
              <div className="reported_dms_chatsuggestbox">
                <h1>Username001 <span>report</span> Brooklyn Simmons <span>in this</span> chat.</h1>
                <div className="reported_dms_chatman">
                  <div className="reported_dms_manchat">
                    <img src={chatman} alt="" />
                    <div className="reported_dms_mandata">
                      <h4>Brooklyn Simmons</h4>
                      <p>News Director at <span>Station name </span></p>
                    </div>
                  </div>
                  <a href="#">Close chat</a>
                </div>
              </div>
              <div className="reported_dms_chatsuggestbox">
                <h1>Username001 <span>report</span> Brooklyn Simmons <span>in this</span> chat.</h1>
                <div className="reported_dms_chatman">
                  <div className="reported_dms_manchat">
                    <img src={chatman} alt="" />
                    <div className="reported_dms_mandata">
                      <h4>Brooklyn Simmons</h4>
                      <p>News Director at <span>Station name </span></p>
                    </div>
                  </div>
                  <a href="#">Close chat</a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="reported_dashboard_chatbox">
                <div className="chatmain_head_flex">
                  <div className="username_chat_flex">
                    <div className="reported_chat_userOne">
                      <img src={chatOneMan} alt="" />
                      <h6>Username001</h6>
                    </div>
                    <span>with</span>
                    <div className="reported_chat_userOne">
                      <img src={chatman} alt="" />
                      <h6>Brooklyn Simmons</h6>
                    </div>
                  </div>
                  <h5><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M12.8433 0.447981C12.2466 -0.148785 11.279 -0.148784 10.6823 0.447981L6.64566 4.48459L2.60865 0.447574C2.01189 -0.149191 1.04434 -0.149191 0.447574 0.447574C-0.149192 1.04434 -0.149191 2.01189 0.447574 2.60865L4.48459 6.64566L0.447909 10.6823C-0.148856 11.2791 -0.148856 12.2467 0.447909 12.8434C1.04467 13.4402 2.01222 13.4402 2.60899 12.8434L6.64566 8.80674L10.6819 12.843C11.2787 13.4398 12.2462 13.4398 12.843 12.843C13.4398 12.2462 13.4398 11.2787 12.843 10.6819L8.80674 6.64566L12.8433 2.60906C13.4401 2.01229 13.4401 1.04475 12.8433 0.447981Z" fill="#BDBDBD" />
                  </svg></h5>
                </div>
                <div className="reported_chatting_box">
                  <div className="chattingbox_left">
                    <img src={chatman} alt="" />
                    <div className="chatting_boxmxg">
                      <div className="chatting_mxg">
                        <p>Lectus urna congue elementumam ent...</p>
                      </div>
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="chattingbox_right">
                    <div className="chatting_boxmxgme">
                      <div className="chatting_mxgme">
                        <p>Lectus urna congue elementumam ent...</p>
                      </div>
                      <span>2 min ago</span>
                    </div>
                    <img src={chatOneMan} alt="" />
                  </div>
                  <div className="chattingbox_left">
                    <img src={chatman} alt="" />
                    <div className="chatting_boxmxg">
                      <div className="chatting_mxg">
                        <p>Lectus urna congue elementumam ent...</p>
                      </div>
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="chattingbox_right">
                    <div className="chatting_boxmxgme">
                      <div className="chatting_mxgme">
                        <p>Lectus urna congue elementumam ent...</p>
                      </div>
                      <span>2 min ago</span>
                    </div>
                    <img src={chatOneMan} alt="" />
                  </div>
                  <div className="chattingbox_left">
                    <img src={chatman} alt="" />
                    <div className="chatting_boxmxg">
                      <div className="chatting_mxg">
                        <p>Lectus urna congue elementumam ent...</p>
                      </div>
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="chattingbox_right">
                    <div className="chatting_boxmxgme">
                      <div className="chatting_mxgme">
                        <p>Lectus urna congue elementumam ent...</p>
                      </div>
                      <span>2 min ago</span>
                    </div>
                    <img src={chatOneMan} alt="" />
                  </div>
                </div>
                <div className="report_chat_btn">
                  <a href="#">Ignore</a>
                  <select name="" id="">
                    <option value="">Take an action</option>
                    <option value="">Lorem</option>
                    <option value="">Lorem</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
       
      </section>
    </>
  )
}

export default ReportedDms