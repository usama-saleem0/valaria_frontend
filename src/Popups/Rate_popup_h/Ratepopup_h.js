
// import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from 'react-router-dom'; // Import necessary hooks
// import { baseurl } from "../../baseurl";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const RateThisProd = ({ close }) => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get id from URL params
//   const [product, setProduct] = useState(null); // State to hold product details
//   const [rating, setRating] = useState(0);
// const [description, setDescription] = useState('');
// const [error, setError] = useState('');

// const [formData, setFormData] = useState({
//   userId: '',
//   productId: '',
//   rating: '',
//   description: '',
// });

// const handleChange = (e) => {
//   const { id, value } = e.target;
//   setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//   }));
// };
// // Function to get user from localStorage
// const getUserFromLocalStorage = () => {
//   const user = localStorage.getItem('userData');
//   return user ? JSON.parse(user) : null;
// };

// // Fetch product details when component mounts or id changes
// useEffect(() => {
// fetchProduct()
// }, []);
// const fetchProduct = async (productId) => {
// const id = localStorage.getItem('productId', productId);

// try {
//     const response = await axios.get(`${baseurl}/productdetails/${id}`);
//     setProduct(response.data);
// } catch (error) {
//     console.error('Error fetching product:', error);
// }};



// const onStarClick = (nextValue) => {
//     setRating(nextValue);
// };

// // Function to add product to cart
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const { userId, productId, rating, description } = formData;

//   if (!userId) {
//     setError('User ID is missing');
//     return;
// }
//   try {
//       const response = await axios.post(`${baseurl}/RatingProduct`, {
//           userId,
//           productId ,
//           rating,
//           description,
//       });
//       toast.success("Profile Saved successfully");
//       console.log('Rating submitted:', response.data);
//   } catch (error) {
//       console.error('Error submitting rating:', error);
//       toast.error('All Fields are required', error);

//   }
// };



// // Handle button click to add product to cart
// const handleSaveClick = () => {
//   handleSubmit({ preventDefault: () => { } });
//   console.log('hello world');
// };


//   return (
//     <>
//             {product && (

//     <form onSubmit={handleSubmit}>
//     <div className="container popup--cont--h">
//             <ToastContainer/>
//       <div className="my--container--h mx-auto">
//         <div className="row">
//           <div className="col">
//             <div className="mb-3 d-flex justify-content-between align-items-center">
//               <h1 className="form-label form-label-alt mb-1">
//                 Rate this product
//               </h1>
//               <div className="about--close--h">
//                 <img src={require("../../img/Union_h.png")} alt="" />
//               </div>
//             </div>
//             <div className="mb-4 mt-1">
//               <div className="rate--product--h row d-flex justify-content-between align-items-center">
//                 <div className="rate--product--main--h col-lg-6 d-flex align-items-center">
//                   <div className="rate--produch--img--h  ">
//                     <img
//                       className="img-fluid"
//                       src={product.image}
//                       alt=""
//                     />
//                   </div>
//                   <div className="px-3">
//                     <h1>{product.name}</h1>
//                   </div>
//                 </div>
//                 <div className="rate--product--rating--h col-lg-5">
//                   <div className=" ">
//                     <label htmlFor="">
//                       How is the overall product quality?
//                     </label>
//                     <div className="d-flex rating--boxes--cont--h rating--boxes--cont--h--alt rating--popup--cont--h">
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3 mt-1">
//               <label
//                 for="exampleFormControlTextarea1"
//                 className="form-label form-label-alt"
//               >
//                 Leave a review for this product
//               </label>
//               <textarea
//                 className="form-control about--input--h experience--desc--h"
//                 id="description"
//                 rows="3"
//                 placeholder="Type here..."
//                 value={formData.description}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="about--button--h pt-1 ">
//               <button
//                 type="button"
//                 className="btn btn-primary about--btn--h about--btn--h--alt"
//                 onClick={handleSaveClick}
//               >
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
//                 onClick={close}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </form>

//   )}
//   </>
//   );

// };

// export default RateThisProd;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from 'react-router-dom';
// import { baseurl } from "../../baseurl";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

// const RateThisProd = ({ close }) => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [product_id, setProductId] = useState(0);



//   const [error, setError] = useState('');

//   const [formData, setFormData] = useState({
//     userId: '',
//     productId: id, // Assuming you get productId from useParams
//     rating: '',
//     description: '',
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//   };


//   const getUserFromLocalStorage = () => {
//     const user = localStorage.getItem('userData');
//     return user ? JSON.parse(user) : null;
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, []);

//   const fetchProduct = async (productId) => {
//     const id = localStorage.getItem('productId', productId);

//     console.log('id:', id);
//     setProductId(id)

//     try {
//       const response = await axios.get(`${baseurl}/productdetails/${id}`);
//       setProduct(response.data);
//     } catch (error) {
//       console.error('Error fetching product:', error);
//     }
//   };

//   const onStarClick = (nextValue) => {
//     setRating(nextValue);
//     setFormData((prevData) => ({
//       ...prevData,
//       rating: nextValue
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { rating, description } = formData;

//     const storedUser = getUserFromLocalStorage();
//     const userId = storedUser ? storedUser.id : null;

//     if (!userId) {
//       setError('User ID is missing');
//       return;
//     }

//     try {
//       const response = await axios.post(`${baseurl}/RatingProduct`, {
//         userId,
//         productId: product_id,
//         rating,
//         description,
//       });
//       toast.success("Profile Saved successfully");
//       console.log('Rating submitted:', response.data);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       toast.error('All Fields are required', error);
//     }
//   };
//   ;

//   const handleClick = (index) => {
//     setNewsroomRating(index);
//     console.log('index', index);
//   };
//   const [newsroomrating, setNewsroomRating] = useState(0);

//   const handleSaveClick = () => {
//     handleSubmit({ preventDefault: () => { } });
//     console.log('hello world');
//   };


//   return (
//     <>
//       {product && (
//         <form onSubmit={handleSubmit}>
//           <div className="container popup--cont--h">
//             <ToastContainer />
//             <div className="my--container--h mx-auto">
//               <div className="row">
//                 <div className="col">
//                   <div className="mb-3 d-flex justify-content-between align-items-center">
//                     <h1 className="form-label form-label-alt mb-1">
//                       Rate this product
//                     </h1>
//                     <div className="about--close--h">
//                       <img src={require("../../img/Union_h.png")} alt="" />
//                     </div>
//                   </div>
//                   <div className="mb-4 mt-1">
//                     <div className="rate--product--h row d-flex justify-content-between align-items-center">
//                       <div className="rate--product--main--h col-lg-6 d-flex align-items-center">
//                         <div className="rate--produch--img--h">
//                           <img
//                             className="img-fluid"
//                             src={product.image}
//                             alt=""
//                           />
//                         </div>
//                         <div className="px-3">
//                           <h1>{product.name}</h1>
//                         </div>
//                       </div>
//                       <div className="rate--product--rating--h col-lg-5">
//                         <div className="">
//                           <label htmlFor="">
//                             How is the overall product quality?
//                           </label>
//                           <div className="d-flex rating--boxes--cont--h rating--boxes--cont--h--alt rating--popup--cont--h">
//                             <div className="rating--box--h">
//                               <label htmlFor="">Newsroom rating</label>
//                               <div className="d-flex rating--boxes--cont--h">
//                                 {[1, 2, 3, 4, 5].map((index) => (
//                                   <span
//                                     key={index}
//                                     className={index <= newsroomrating ? 'rating--span--active' : 'rating--span'}
//                                     onClick={() => handleClick(index)}
//                                   ></span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mb-3 mt-1">
//                     <label
//                       htmlFor="description"
//                       className="form-label form-label-alt"
//                     >
//                       Leave a review for this product
//                     </label>
//                     <textarea
//                       className="form-control about--input--h experience--desc--h"
//                       id="description"
//                       rows="3"
//                       placeholder="Type here..."
//                       value={formData.description}
//                       onChange={handleChange}
//                     ></textarea>
//                   </div>
//                   <div className="about--button--h pt-1">
//                     <button
//                       type="button"
//                       className="btn btn-primary about--btn--h about--btn--h--alt"
//                       onClick={handleSaveClick}
//                     >
//                       Submit
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
//                       onClick={close}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       )}
//     </>
//   );
// };

// export default RateThisProd;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const RateThisProd = ({ close }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [product_id, setProductId] = useState(0);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    userId: '',
    productId: id, // Assuming you get productId from useParams
    rating: '',
    description: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const id = localStorage.getItem('productId');

    console.log('id:', id);
    setProductId(id)

    try {
      const response = await axios.get(`${baseurl}/productdetails/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const { rating, description } = formData;

    const storedUser = getUserFromLocalStorage();
    const userId = storedUser ? storedUser.id : null;

    if (!userId ) {
  
      toast.error('Please Login First to Rate Product');
      return;
    }


    if (!rating ) {
  
      toast.error('Must Select Rating Products ');
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/RatingProduct`, {
        userId,
        productId: product_id,
        rating,
        description,
      });
      toast.success("Rating submitted successfully");
  
      console.log('Rating submitted:', response.data);
      // close()
      setTimeout(() => {
        close();
    }, 1000); 
    
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast.error('Error submitting rating');
    }
  };

  const handleClick = (index) => {
    setRating(index);
    setFormData((prevData) => ({
      ...prevData,
      rating: index
    }));
    console.log('index', index);
  };

  return (
    <>
      {product && (
        <form onSubmit={handleSubmit}>
          <div className="container popup--cont--h">
            <ToastContainer />
            <div className="my--container--h mx-auto">
              <div className="row">
                <div className="col">
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <h1 className="form-label form-label-alt mb-1">
                      Rate this product
                    </h1>
                    <div className="about--close--h">
                      <img src={require("../../img/Union_h.png")} alt="" />
                    </div>
                  </div>
                  <div className="mb-4 mt-1">
                    <div className="rate--product--h row d-flex justify-content-between align-items-center">
                      <div className="rate--product--main--h col-lg-6 d-flex align-items-center">
                        <div className="rate--produch--img--h">
                          <img
                            className="img-fluid"
                            src={product.image}
                            alt=""
                          />
                        </div>
                        <div className="px-3">
                          <h1>{product.name}</h1>
                        </div>
                      </div>
                      <div className="rate--product--rating--h col-lg-5">
                        <div className="">
                          <label htmlFor="">
                            How is the overall product quality?
                          </label>
                          <div className="d-flex rating--boxes--cont--h rating--boxes--cont--h--alt rating--popup--cont--h">
                            <div className="rating--box--h">
                              <label htmlFor="">Newsroom rating</label>
                              <div className="d-flex rating--boxes--cont--h">
                                {[1, 2, 3, 4, 5].map((index) => (
                                  <span
                                    key={index}
                                    className={index <= rating ? 'rating--span--active' : 'rating--span'}
                                    onClick={() => handleClick(index)}
                                  ></span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 mt-1">
                    <label
                      htmlFor="description"
                      className="form-label form-label-alt"
                    >
                      Leave a review for this product
                    </label>
                    <textarea
                      className="form-control about--input--h experience--desc--h"
                      id="description"
                      rows="3"
                      placeholder="Type here..."
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="about--button--h pt-1">
                    <button
                      type="submit"
                      className="btn btn-primary about--btn--h about--btn--h--alt"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
                      onClick={close}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default RateThisProd;
