import React, { useEffect, useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import axios from 'axios';
import { baseurl } from '../baseurl';
import { useNavigate } from 'react-router-dom';
import { Col, Modal, Row } from 'react-bootstrap';
import { FaCirclePlus } from 'react-icons/fa6';
import AddFAQ from '../Popups/Profile_popups/add_faq';
import { toast, ToastContainer } from 'react-toastify';

const RatingsListDashboard = () => {

    const rows = Array.from({ length: 7 });
    const navigate = useNavigate();


    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showFaq, setFaq] = useState([]);
    const [chagedate, setChagedate] = useState('');
    const [ratingId, setratingId] = useState(0);



    useEffect(() => {
     
    
        fetchProducts();
      }, []);

      const fetchProducts = async () => {
        try {
          const response = await axios.get(`${baseurl}/getrallatingsadmin`);
          
          console.log('resdata',response.data.ratings)
          
          setProducts(response.data.ratings);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };


      const goto = (e) => {
        // const ratingslistId= localStorage.setItem("ratingslistId", e.id);
        setratingId(e.id)
        setShowModal(true);
      
        
      };


      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
      
        const date = new Date(dateString);
      
        return `${date.toLocaleDateString('en-US', options)} at ${date.toLocaleTimeString('en-US', timeOptions)}`;
      };


      const handleClose = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
 

        e.preventDefault();
     
    
        if (!chagedate) {
         
          return;
        }
    
        try {
          const response = await axios.post(`${baseurl}/changeDateRatings`, {
            chagedate,
            ratingId,
           
           
          });
          
        
          toast.success("Date Change Successfully");


          setTimeout(() => {
            handleClose();
          }, 1000);
          fetchProducts();
          
        
          console.log('result' , response);
          
        } catch (err) {
          console.error('Error:', err);
        }
       

      };
    



    return (

        <div style={{margin:'30px' , marginLeft:'50px'}}>
               <ToastContainer/>

            
<Modal
                show={showModal}
                onHide={handleClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                   {/* <AddFAQ onCancel={handleClose} /> */}


                   <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">Change Date</h1>
              <div className="about--close--h" onClick={() => handleClose(true)}>
                <img src={require("../img/Union_h.png")} alt="close" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="skillsInput" className="form-label form-label-alt">New Date</label>
              <input
                type="date"
                className="form-control skills--inp--h mb-3"
                id="skillsInput"
                placeholder="Type here..."
                value={chagedate}
                onChange={(e) => setChagedate(e.target.value)}
              />
            
           
            </div>
            <div className="experience--button--h pt-1">
              <button
                type="button"
                className="btn btn-primary experience--btn--h experience--btn--h--alt"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
                </Modal.Body>
            </Modal>



        <Row>
        <Col lg={12}>
            <div className="dashboard_pages_head">
                <h3>List Ratings</h3>
            </div>
        </Col>
      
        <Col lg={12}>
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
        
        <div className="dashnewsletter_data_box" style={{margin:'30px' , marginTop:'20px'}}>
             
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th><select name="" id="">
                            <option value="">ID</option>
                            <option value="">ID</option>
                            <option value="">ID</option>
                            </select></th>


                            <th> <select name="" id="" style={{ margin: '0px 0px 0px 30px' }}>
                            <option value="">Uploaded Documents</option>
                            <option value="">Uploaded Documents</option>
                            <option value="">Uploaded Documents</option>
                        </select></th>
                        <th> <select name="" id="" style={{ margin: '0px 0px 0px 30px' }}>
                            <option value="">User Email</option>
                            <option value="">User Email</option>
                            <option value="">User Email</option>
                        </select></th>

                        <th> <select name="" id="" style={{ margin: '0px 0px 0px 30px' }}>
                            <option value="">About Station</option>
                            <option value="">About Station</option>
                            <option value="">About Station</option>
                        </select></th>
                        <th> <select name="" id="">
                            <option value="">Sent at</option>
                            <option value="">Sent at</option>
                            <option value="">Sent at</option>
                        </select></th>
                         
                        <th> <select name="" id="" style={{ margin: '0px 0px 0px 30px' }}>
                            <option value="">Action</option>
                            <option value="">Action</option>
                            <option value="">Action</option>
                        </select></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((rows) => (<tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td><h6>#{rows.id}</h6></td>
                        <td style={{width:'10%'}}><img src={rows.imageurl} style={{width:'30%' , borderRadius:'50px', maxHeight:'60px'}}/></td>

                        <td><h2>{rows.email}.</h2></td>
                        <td style={{paddingRight:'25px'}}><h2>{rows.aboutstation}.</h2></td>

                        {/* <td><h5>June 23, 2022 at 2:01 pm</h5></td> */}
                        <td><h5>{formatDate(rows.createdAt)}</h5></td>

                        <td onClick={() =>goto(rows)}> <div className="setting_icon_view">  <a  style={{cursor:'pointer' , color:'white'}}  >Change Date</a></div></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default RatingsListDashboard