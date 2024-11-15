import React, { useState } from 'react';
import { baseurl } from '../baseurl';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Nazar2 = ({onHide}) => {


  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (index) => {
    console.log(index)
    setSelectedButton(index);
  };


  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const handleSubmit = async () => {



    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);

    if(!storedUser){
      toast.error('Please Login to Report an Article');
      return;

    }
    const userId = storedUser.id;

    const articleId = localStorage.getItem('articleId');
   

    const formData = {
      userId,
      report:selectedButton,
      articleId
    };


    console.log(formData);

    try {
     

      const response =  await axios.post(`${baseurl}/reportarticle`, {
        formData        
      });
      

     

     
      toast.success("Article Reported");
      setTimeout(() => {
        onHide();
      }, 1000);  
      

      
    } catch (error) {
      console.error('Error:', error);
      toast.error('All Fields are required', error);
    }
  };


  const onHides = () => {

    console.log('onHides')

    onHide();

  };

  const buttons = [
    "Harassment",
    "Fraud or scam",
    "Spam",
    "Misinformation",
    "Hateful speech",
    "Threats or violence",
    "Self-harm",
    "Graphic content",
    "Dangerous or extremist organizations",
    "Sexual content",
    "Fake account",
    "Mymat needs your",
    "Child exploitation",
    "Illegal goods and services",
    "Infringement"
  ];
  return (
    <>
    <section className="nazar">
      <ToastContainer/>
      <div className="main-nazar">


      <div className="Report-head">
        <h2>Report this post </h2>

        <button>x</button>
      </div>
      
      <div className="Report-bo">
      <h3>Select reason that applies</h3>
      {buttons.map((buttonText, index) => (
  <button
    key={index}
    onClick={() => handleClick(buttonText)}
    style={{
      backgroundColor: selectedButton === buttonText ? '#0d6efd' : 'white',
      color: selectedButton === buttonText ? 'white' : '#afafaf',
      border: selectedButton === buttonText ? '1px solid white' : '2px solid #afafaf',
      padding: '10px 20px',  
      borderRadius: '50px',   
      cursor: 'pointer'      
    }}
  >
    {buttonText}
  </button>
))}
    </div>

      <div className="Report-footer">
        <button onClick={onHides}>Back</button>
        <button onClick={handleSubmit}>Next</button>
      </div>
      </div>
    </section>
    </>
  );
};
export default Nazar2;
