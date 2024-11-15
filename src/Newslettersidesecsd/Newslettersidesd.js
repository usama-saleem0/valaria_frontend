import React, { useEffect, useState } from 'react'


import sidenewsletterimg1 from "../img/side-newsletter-img-1.png"
import sidenewsletterimg2 from "../img/side-newsletter-img-2.png"
import sidenewsletterimg3 from "../img/side-newsletter-img-3.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseurl } from '../baseurl'


const Newslettersidesd = () => {
    const navigate = useNavigate()

    // const newsletterdetail = () => {
    //     navigate('/newsletterarticle')
    // }


    const goto = (e) => {
        const news_data= localStorage.setItem("article", JSON.stringify(e));
        console.log(news_data,"TSSSS")
        navigate("/newsletterarticle");
      };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`${baseurl}/get_articles_limit`); // Update this with your API endpoint
            const formattedProducts = response.data.data.map(product => ({
              ...product,
              price: parseFloat(product.price) // Convert to number if necessary
            }));
            setProducts(formattedProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);
    return (
        <>
          
          
              
               {
               products && products.map((e,i)=>(
                <div class="row">
                    <div class="col-lg-12 col-md-6">
                        <div class="side-newsletter-box" onClick={()=>goto(e)}>
                            <img src={e.image} alt=""  style={{maxHeight:'200px' , minHeight:'200px'}}/>
                            <div class="side-newsletter-txt">
                                <h5>{e.mainheading}</h5>
                            </div>
                        </div>
                    </div>
                   
                  
                </div>
                ))}
                
        </>
    )
}

export default Newslettersidesd