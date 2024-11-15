// import React, { useEffect, useState } from "react";

// import axios from "axios";
// import { baseurl } from "../baseurl";

// const Skillsah = (skillContent) => {
//     const [userdata, setUser] = useState({});
//     const [skilldataContent, setskillContent] = useState([]);


//     useEffect(() => {
//         // Retrieve user data from local storage
//         const storedUser = localStorage.getItem('userData');
//         if (storedUser) {
//             const user = JSON.parse(storedUser);
//             console.log(user, userdata)
//             // setUser(user)  

//             fetchSkillData(user.id);

//         }
//     }, []);

//     const fetchSkillData = async (userId) => {
//         try {
//             const response = await axios.get(`${baseurl}/skilldata/${userId}`);
//             console.log('xxxxx', response.data)

//             setskillContent(response.data)
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     const dataToRender = skillContent && skillContent.length > 0 ? skillContent : skilldataContent;


//     return (
//         <>
//             <div className="About-main-card-1-ah">
//                 <h2>Skills</h2>
//                 <div className="Skills-ah-box-main">
//                     {dataToRender.map((skill, index) => (
//                         <div className="Skills-ah-box" key={index}>
//                             <h2>{skill.title}</h2>
//                             <p>{skill.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Skillsah