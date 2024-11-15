import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { baseurl } from '../baseurl';

const EnterOtpModal  = ({handleCloseemail,companyname,id,email,HandleOtpVerified}) => {
  const [show, setShow] = useState(true);

  const[otp,setotp]=useState('')

  const handleClose = () => {
    handleCloseemail()


  };
  const handleShow = () => setShow(true);

  const handleSubmit=()=>{

    SendOtp()

  }

  const SendOtp=async()=>{

    const formData={
      email:email,
      id:id,
      otp:otp
    }

    axios.post(`${baseurl}/verify-otp-email`,formData)
    .then((res)=>{
      console.log(res.data.success)
      HandleOtpVerified()

       
    })
    .catch((error)=>{
      console.log(error)
    })


}


  return (
    <>
      
      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton style={{ backgroundColor: '#fff' }}>
          <Modal.Title>Please Enter Otp, Sent to your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#fff' }} >

                <input
                placeholder='Enter Otp '
                onChange={(e)=>setotp(e.target.value)}
                />


        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#fff' }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Verify
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EnterOtpModal;
