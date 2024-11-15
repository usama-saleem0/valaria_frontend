import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { baseurl } from '../../baseurl';
import { Col, Container, Row } from 'react-bootstrap';
import { IoSearchOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { IoFlag } from "react-icons/io5";
import chatperson from "../../img/chat_message_person.png"
import MessageItem from './MessageItem';
import { parseJSON } from 'date-fns';
import eventBus from './EventBus/EventBus';
import Header1 from '../../Header/Header2';
import axios from 'axios';
import MessageSidebar from '../../Header/Message_Sidebar';

const Chat = ({ userData, rc_id, pp, handle_chat }) => {




  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [senderId, setSenderId] = useState('rr123');
  const [receiverId, setReceiverId] = useState(0);


  const [profile, setProfile] = useState({});


  const socketRef = useRef(null);
  pp = true



  // console.log(sender_user_id.id,Reciever_Id,"TSSS")

  useEffect(() => {
    const Sender_Idd = localStorage.getItem('userData')
    const sender_user_id = JSON.parse(Sender_Idd)
    const Reciever_Id = localStorage.getItem('Reciever_Id')
    console.log(sender_user_id, "HS", Reciever_Id)

    setSenderId(sender_user_id.id)
    setReceiverId(Reciever_Id)

    // fetchprofile(Reciever_Id);
  })


  useEffect(() => {
    fetchprofile();


    socketRef.current = io("http://localhost:5000");
    // socketRef.current = io("https://ratemystationbackend-production.up.railway.app");
     // Replace with your server URL

    socketRef.current.on('previous_messages', (prevMessages) => {
      setMessages(prevMessages);


    });


    socketRef.current.on('chat_message', (incomingMessage) => {
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });



    return () => {
      socketRef.current.off('previous_messages');
      socketRef.current.disconnect();
    };
    

  }, []);

  useEffect(() => {
    if (receiverId && senderId) {
      socketRef.current.emit('get_previous_messages', {
        sender: senderId,
        receiver: receiverId,
      });
    }
  }, [receiverId, senderId]);


  const fetchprofile = async () => {

    const Reciever_Id = localStorage.getItem('Reciever_Id')

    console.log('Fetching profile' , Reciever_Id)

    try {
      const response = await axios.get(`${baseurl}/getuserdata/${Reciever_Id}`);
     

      setProfile(response.data)

    
     

    
    } catch (error) {
      console.error("Error fetching user data:", error);
    }


  }

  const sendMessage = () => {
    if (message !== '') {
      const messageData = {
        Sender_Id: senderId,
        Reciever_Id: receiverId, // Corrected typo
        message: message,
      };

      // Send the message to the server
      socketRef.current.emit('chat_message', messageData);

      socketRef.current.emit('new_notification', messageData);

      // socketRef.current.emit('new_message', messageData);

      // Update local messages state to show the new message immediately
      // setMessages((prevMessages) => [...prevMessages, messageData]);

      // Clear the message input
      setMessage('');




    }
  };



  // const Send_Notification=(e)=>{
  //   socketRef.current = io('http://localhost:5000', {
  //     query: { e },
  //     transports: ['websocket'],
  //     withCredentials: true,
  //   });

  //   socketRef.current.on('initialNotifications', (initialNotifications)=>{
  //     console.log(initialNotifications)
  //   })
  // }

  const messagess = [
    {
      id: 1,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
    {
      id: 2,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
    {
      id: 3,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
    {
      id: 4,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
    {
      id: 5,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
    {
      id: 6,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
    {
      id: 7,
      name: 'Darlene Robertson',
      message: 'Lectus urna congue elementum ent...',
      time: '30 min ago',
      count: 2
    },
  ];


  return (
    <>
      
      <Header1/>

      {pp && (
        <section className="Dashboard ratemystation_chatbox">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="messages_pg_box">
                  <Row>
                    {/* <Col lg={4}>
                    <MessageSidebar/>
                    </Col> */}
                    <Col lg={4} className="p-0">
                    
                      <div className="rate_chatbox_left">
                        <h4>My Messages</h4>
                        <div className="chatbox_message_search">
                          <input type="search" name="" id="" placeholder='Search messages' />
                          <span><IoSearchOutline /></span>
                        </div>
                        {/* <div className="message-list">
                          {messagess.map((msg) => (
                            <MessageItem key={msg.id} {...msg} />
                          ))}
                        </div> */}
                           <MessageSidebar/>
                      </div>
                    </Col>
                    <Col lg={8} className="p-0">
                      <div className="main-Dashboard">
                        {/* <div className="chat-btn">
                          <button>Schedule Meeting</button>
                        </div> */}
                        <div className="chat-box">
                          <div className="chat-box-head">
                            <div className="chat-box-headleft">
                              <div className="chat-box-head-dp">


                              {
                                profile && profile.Profile ?

                                <img src={profile.Profile.image} alt="" />
                                :

                                <img src={chatperson} alt="" />
                              }

                                {/* <img src={chatperson} alt="" /> */}
                                
                              </div>
                              <span className="chat-name">
                                <h2>{profile.username}</h2>
                                <p>online</p>
                              </span>
                            </div>
                            <div className="chat-box-right">
                              <span><FiEdit /></span>
                              <span><IoFlag /> Report</span>
                            </div>
                          </div>

                          <div className="chat_right_txt"
                            style={{
                              // maxHeight: '520px',
                              overflowY: 'auto',
                              marginBottom: '20px',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <ul
                              style={{
                                listStyleType: 'none',
                                padding: '0px 20px 0px 0px',
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                            >
                              {messages.map((msg, index) => {
                                const isSender = msg.Sender_Id != receiverId;
                                return (
                                  <li
                                    key={index}
                                    style={{
                                      padding: '10px',
                                      margin: '5px 0px',
                                      borderRadius: '10px',
                                      maxWidth: '60%',
                                      wordWrap: 'break-word',
                                      alignSelf: isSender ? 'flex-end' : 'flex-start',
                                      backgroundColor: isSender ? '#194D79' : '#E5E5EA',
                                      color: isSender ? '#fff' : '#000',
                                      textAlign: isSender ? 'right' : 'left',
                                      marginLeft: isSender ? 'auto' : '0',
                                      marginRight: isSender ? '0' : 'auto',
                                    }}
                                  >
                                    {msg.message}
                                  </li>
                                );
                              })}
                            </ul>
                            <div className="chattype_fixed">
                              <div className="chat-box-body-input">
                                <input
                                  type="text"
                                  placeholder="Write Your Message Here"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                />
                                <div className="message_chat_sendbox">
                                  <button onClick={sendMessage}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="25"
                                      viewBox="0 0 26 25"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0_144_2215)">
                                        <path
                                          d="M26.0001 1.0683C25.9161 1.56717 25.8245 2.06488 25.7497 2.5651C25.3973 4.9215 25.0491 7.27851 24.7001 9.63538C24.371 11.8581 24.0432 14.081 23.7136 16.3036C23.4823 17.8636 23.2536 19.4241 23.014 20.9828C22.9232 21.5733 22.4585 21.8605 21.9003 21.6697C18.1504 20.3878 14.4025 19.1 10.654 17.814C10.6463 17.8113 10.6397 17.8053 10.6003 17.7806C14.2336 13.3899 17.8637 9.00307 21.4938 4.61623C21.4783 4.60051 21.4627 4.58473 21.4471 4.56901C21.2773 4.71327 21.1069 4.85692 20.9377 5.00193C16.4553 8.84635 11.9723 12.6903 7.49309 16.5385C7.3641 16.6493 7.2588 16.6574 7.10702 16.605C4.95045 15.8606 2.79266 15.1197 0.633309 14.3833C0.268747 14.259 0.0320839 14.0309 0.00277235 13.6409C-0.026607 13.2493 0.179659 12.9926 0.519795 12.8146C6.8962 9.47744 13.2711 6.1374 19.6462 2.79797C21.3018 1.93075 22.9571 1.06293 24.6133 0.196867C25.2846 -0.154197 25.6387 -0.0470878 26.0001 0.609924C26.0001 0.762694 26.0001 0.915532 26.0001 1.0683Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M9.50875 19.1464C10.9644 19.6453 12.4074 20.14 13.8659 20.6398C13.8344 20.6961 13.815 20.741 13.7868 20.7794C12.857 22.0499 11.9282 23.3212 10.9949 24.5891C10.6622 25.0411 10.1265 25.1406 9.77242 24.785C9.62572 24.6377 9.49878 24.3933 9.49613 24.1913C9.47462 22.5386 9.48459 20.8856 9.48561 19.2326C9.48568 19.2165 9.49396 19.2003 9.50875 19.1464Z"
                                          fill="black"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_144_2215">
                                          <rect width="26" height="25" fill="white" />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default Chat;
