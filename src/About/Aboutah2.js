// import React, { useEffect, useState } from "react";

// import kabc from '../img/kabc.png'

// const Aboutah2 = ({aboutContent} )=>{
//     console.log(aboutContent)
//     const [aboutContents, setAboutContent] = useState("Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo natoque pulvinar eu, interdum. Viverra tortor hac sollicitudin dictum sit. Condimentum eget et commodo sapien porta felis amet pellentesque. Erat augue enim turpis risus urna, ut egestas vivamus proin. Velit leo scelerisque pulvinar vestibulum in nunc a tortor mollis. Fusce pretium est ipsum elementum parturient. Venenatis, ac nulla non varius dolor. Ornare consectetur mauris, adipiscing tristique a leo. Habitant pharetra tellus habitasse vestibulum nibh quisque. Sed vel condimentum enim leo tortor mi magna tincidunt. Egestas bibendum id eget quisque semper ultricies. Gravida viverra massa faucibus vestibulum condimentum.");

//     useEffect(() => {

//         const storedUser = localStorage.getItem('userData');
//         if (storedUser) {
//           const user = JSON.parse(storedUser);
//           console.log('about',user)

//           setAboutContent(user.about)
//           // setUser(user)

//         }
//       }, []);

// return(

//     <>

// <div class="About-main-card-1-ah">
//                             <span class="edite">
//                         <h2>About</h2>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
//                             <path d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z" fill="#828282"/>
//                             <path d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z" fill="#828282"/>
//                           </svg>
//                     </span>
//                         <p>{ aboutContent ? aboutContent : aboutContents}</p>

//                         </div>

//     </>

// )

// }

// export default Aboutah2

import React, { useEffect, useState } from "react";
import kabc from "../img/kabc.png";
import { Modal } from "react-bootstrap";
import About from "../Popups/Profile_popups/About_h";
const Aboutah2 = ({ onSuccess, aboutContent }) => {
  console.log(aboutContent);
  const [aboutContents, setAboutContent] = useState(
    "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo natoque pulvinar eu, interdum. Viverra tortor hac sollicitudin dictum sit. Condimentum eget et commodo sapien porta felis amet pellentesque. Erat augue enim turpis risus urna, ut egestas vivamus proin. Velit leo scelerisque pulvinar vestibulum in nunc a tortor mollis. Fusce pretium est ipsum elementum parturient. Venenatis, ac nulla non varius dolor. Ornare consectetur mauris, adipiscing tristique a leo. Habitant pharetra tellus habitasse vestibulum nibh quisque. Sed vel condimentum enim leo tortor mi magna tincidunt. Egestas bibendum id eget quisque semper ultricies. Gravida viverra massa faucibus vestibulum condimentum."
  );
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log("about", user);
      setAboutContent(user.about);
      // setUser(user)
    }
  }, []);
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

  const handleSuccess = () => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setAboutContent(user.about);
    }
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
          <About onSuccess={onSuccess} onCancel={closePopup} />
        </Modal.Body>
      </Modal>
      <div class="About-main-card-1-ah">
        <span class="edite">
          <h2>About</h2>
          <div onClick={handleSelectChange}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
                        </svg>
          </div>
        </span>
        <p>{aboutContent ? aboutContent : aboutContents}</p>
        {/* <p>{aboutContents}</p> */}
      </div>
    </>
  );
};
export default Aboutah2;
