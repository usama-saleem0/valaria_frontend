// import axios from "axios";
// import { baseurl } from "../../baseurl";
// import { useEffect, useState } from "react";
// import React from "react";
// import { Modal } from "react-bootstrap";
// import AdminAbout from "../../Popups/Profile_popups/AdminAbout";

// const HomeSecTwoh = () => {
//   const [ratingcount, setRatingcount] = useState(0);
//   const [articlecount, setArticlecount] = useState(0);


//   const [aboutContent, setAboutContent] = useState('');
//   const [aboutData, setAboutData] = useState({});

//   // Function to update the about content
//   const updateAboutContent = (newContent) => {
//     setAboutContent(newContent);
//     setAboutData({ About: newContent }); // Update aboutData to show the new content
//   };

//   useEffect(() => {
   
//     fetchUserData();
//     fetchAboutData();
  
// }, []);


// // const fetchAboutData = async () => {

// //   try {
  
// //       const response = await axios.get(`${baseurl}/getaboutadmin`);
// //       setAboutData(response.data);
  
// //   } catch (err) {
   
// //   }
// // };

// const fetchAboutData = async () => {
//   try {
//     const response = await axios.get(`${baseurl}/getaboutadmin`);
//     setAboutData(response.data); // Assuming response.data is the object containing your "About" content
//     setAboutContent(response.data.About); // If you want to set initial content from fetched data
//   } catch (err) {
//     console.error('Error fetching About data:', err);
//   }
// };
// const fetchUserData = async () => {

  
//   try {
//     const response = await axios.get(`${baseurl}/getRatingcounts`);
//     setArticlecount(response.data.articlecounts);
//     setRatingcount(response.data.ratingcounts);


 




   
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };
//   const data = [
//     {
//       text: "Rating Reported",
//       value: "10",
//     },

//     {
//       text: "DMs Reported",
//       value: "5",
//     },

//     {
//       text: "Article Reported",
//       value: "35",
//     },
//   ];


//   const closePopup = (e) => {
//     console.log(e, "TS");
//     setShowModal(false);
//   };
//   const [showModal, setShowModal] = useState(false);
//   const handleSelectChange = () => {
//     setShowModal(true);
//   };
//   const handleClose = () => {
//     setShowModal(false);
//   };


//   return (
//     <>

// <Modal
//         show={showModal}
//         onHide={handleClose}
//         size="xl"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Body>
//           <AdminAbout onCancel={closePopup} onUpdateAbout={updateAboutContent}  />
//         </Modal.Body>
//       </Modal>


//       <div className="dash--home--title--h">
//         <h1>Reported Content</h1>
//         <p>Please review reports from users that requires your action</p>
//       </div>
//       <div className="dash--sec--one--card--cont--h">
//         {/* {data.map((item, index) => ( */}
//           <div  className="dash--sec--one--card--h">
//             <p>Rating Reported</p>
//             <h1>{ratingcount}</h1>
//           </div>

//           <div  className="dash--sec--one--card--h">
//             <p>Article Reported</p>
//             <h1>{articlecount}</h1>
//           </div>
//         {/* ))} */}
//       </div>




//       <div className="dash--home--title--h">
//         <h1>Update About </h1>
//         <p>Please review your About Description </p>
//       </div>
//     <div class="About-main-card-1-ah">
//         <span class="edite">
//           <h2>About</h2>
//           <div onClick={handleSelectChange}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
//                             <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
//                         </svg>
//           </div>
//         </span>
//         <p>{aboutData ? aboutData.About : 'No content available'}</p>
//         {/* <p>{aboutContent ? aboutData :aboutData.About}</p> */}
//         {/* <p>{aboutContents}</p> */}
//       </div>
//     </>
//   );
// };

// export default HomeSecTwoh;


import axios from "axios";
import { baseurl } from "../../baseurl";
import { useEffect, useState } from "react";
import React from "react";
import { Modal } from "react-bootstrap";
import AdminAbout from "../../Popups/Profile_popups/AdminAbout";

const HomeSecTwoh = () => {
  const [ratingcount, setRatingcount] = useState(0);
  const [articlecount, setArticlecount] = useState(0);
  const [aboutContent, setAboutContent] = useState('');
  const [aboutData, setAboutData] = useState([]); // Keep it as an array to match API response

  const updateAboutContent = (newContent) => {
    setAboutContent(newContent);
    setAboutData([{ About: newContent }]); // Update aboutData as an array with new content
  };

  useEffect(() => {
    fetchUserData();
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getaboutadmin`);
      setAboutData(response.data); // Keep aboutData as an array
      setAboutContent(response.data[0]?.About || ''); // Set initial content from fetched data
    } catch (err) {
      console.error('Error fetching About data:', err);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getRatingcounts`);
      setArticlecount(response.data.articlecounts);
      setRatingcount(response.data.ratingcounts);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const closePopup = (e) => {
    console.log(e, "TS");
    setShowModal(false);
  };

  const [showModal, setShowModal] = useState(false);
  const handleSelectChange = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <AdminAbout onCancel={closePopup} onUpdateAbout={updateAboutContent} />
        </Modal.Body>
      </Modal>

      <div className="dash--home--title--h">
        <h1>Reported Content</h1>
        <p>Please review reports from users that require your action</p>
      </div>
      <div className="dash--sec--one--card--cont--h">
        <div className="dash--sec--one--card--h">
          <p>Rating Reported</p>
          <h1>{ratingcount}</h1>
        </div>
        <div className="dash--sec--one--card--h">
          <p>Article Reported</p>
          <h1>{articlecount}</h1>
        </div>
      </div>

      <div className="dash--home--title--h">
        <h1>Update About</h1>
        <p>Please review your About Description</p>
      </div>
      <div className="About-main-card-1-ah">
        <span className="edite">
          <h2>About</h2>
          <div onClick={handleSelectChange}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
            </svg>
          </div>
        </span>
        <p>{aboutData.length > 0 ? aboutData[0].About : 'No content available'}</p>
      </div>
    </>
  );
};

export default HomeSecTwoh;
