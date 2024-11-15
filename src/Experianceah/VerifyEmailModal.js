import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { baseurl } from '../baseurl';

const MyModal = ({handleCloseemail,companyname,handleOpenOtpModal}) => {
  const [show, setShow] = useState(true);

  const[email,setemail]=useState('')
 
  const handleClose = () => {
    handleCloseemail()


  };
  const handleShow = () => setShow(true);

  const handleSubmit=async()=>{
    console.log(email)
    if (email.toLowerCase().includes(companyname.toLowerCase()))
    {
       SendOtp(email)
    
    }
    else{
      toast.error("Please Enter Your Organizational Email")
    }

  }

  const SendOtp=async(email)=>{

      const formData={
        email:email
      }

      axios.post(`${baseurl}/send-otp-email`,formData)
      .then((res)=>{
        console.log(res.data.success)

        if(res.data.success===true)
        {
          handleOpenOtpModal(email)
        }
      })
      .catch((error)=>{
        console.log(error)
      })


  }

  return (
    <>
    <ToastContainer/>
      
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton style={{ backgroundColor: '#fff' }}>
          <Modal.Title>Enter Organizational Email</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#fff' }} >

                <input
                placeholder='Enter your Organization Email'
                onChange={(e)=>setemail(e.target.value)}
                style={{width: '100%'}}
                />


        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#fff' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
