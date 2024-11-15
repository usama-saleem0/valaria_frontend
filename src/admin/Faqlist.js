import React, { useEffect, useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import axios from 'axios';
import { baseurl } from '../baseurl';
import { useNavigate } from 'react-router-dom';

const Faqlist = ({showFaq}) => {

    console.log('Faqlist', showFaq);

    const rows = Array.from({ length: 7 });
    const navigate = useNavigate();


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`${baseurl}/get_faq`);
            
            console.log('resdata',response.data)
            
            setProducts(response.data.data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);


      const goto = (e) => {
        const news_data= localStorage.setItem("article", JSON.stringify(e));
      
        navigate("/newsletterarticleadmin");
      };


      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
      
        const date = new Date(dateString);
      
        return `${date.toLocaleDateString('en-US', options)} at ${date.toLocaleTimeString('en-US', timeOptions)}`;
      };


    //   const faqData = showFaq ? showFaq :products;


      const faqData = showFaq && showFaq.length > 0 ? showFaq : products;

    return (
        <div className="dashnewsletter_data_box">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th><select name="" id="">
                            <option value="">ID</option>
                           
                            </select></th>
                        <th> <select name="" id="" style={{ margin: '0px 0px 0px 30px' }}>
                            <option value="">Subject</option>
                           
                        </select></th>

                        <th> <select name="" id="" style={{ margin: '0px 0px 0px 30px' }}>
                            <option value="">Description</option>
                           
                        </select></th>
                        <th> <select name="" id="">
                            <option value="">Sent at</option>
                           
                        </select></th>
                         
                      
                    </tr>
                </thead>
                <tbody>
                    {faqData.map((rows) => (<tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td><h6>#{rows.id}</h6></td>
                        <td><h2>{rows.mainHeading}.</h2></td>
                       <td >
                         <h2 className="truncate-text">{rows.description}</h2>
                         </td>

                     
                        <td><h5>{formatDate(rows.createdAt)}</h5></td>
                    </tr>))}

                   

                </tbody>
            </table>
        </div>
    )
}

export default Faqlist