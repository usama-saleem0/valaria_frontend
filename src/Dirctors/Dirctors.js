import React, { useState, useEffect } from "react";
import axios from "axios";

import Past from '../img/Past-1.png'
import Past2 from '../img/Past-2.png'
import Past3 from '../img/Past-3.png'
import { useNavigate } from "react-router-dom";
import { baseurl } from "../baseurl";


const Dirctors = ({DirectorData}) => {

    const navigate = useNavigate();

    const usersetting = () => navigate("/kabc");




    return (



        <>

            <div className="About-main-card-1-ah">
                <span className="edite">
                    <h2>News Directors</h2>
                    <span className="edite-icon">


                        {/* <div onClick={usersetting}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div> */}


                        {/* <div onClick={handleSelectChange}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.5363 0.726074C12.2831 0.726074 11.2671 1.74206 11.2671 2.99535V11.4728H2.78881C1.53552 11.4728 0.519531 12.4887 0.519531 13.742C0.519531 14.9953 1.53552 16.0113 2.78881 16.0113H11.2671V24.4889C11.2671 25.7421 12.2831 26.7581 13.5363 26.7581C14.7896 26.7581 15.8056 25.7421 15.8056 24.4889V16.0113H24.2823C25.5356 16.0113 26.5516 14.9953 26.5516 13.742C26.5516 12.4887 25.5356 11.4728 24.2823 11.4728H15.8056V2.99535C15.8056 1.74206 14.7896 0.726074 13.5363 0.726074Z" fill="#828282" />
                            </svg>
                        </div> */}
                    </span>
                </span>



                <div className="Brooklyn-Simmons-box">
                    {DirectorData.map((director, index) => (
            



                        <div key={index} className="Brooklyn-Simmons-card">
                            {
                                director.verified_account == 0 ?

                                    <div className="notapproved" style={{ fontSize: '12px' }}>

                                        New Director is under review. Once approved by the administrator, you'll see uploaded News Director

                                    </div>


                                    :
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>


                                        <div className="Brooklyn-Simmons-logo-div">
                                            <div className="Brooklyn-Simmons-logo">
                                                {/* <img src={director.status === "current" ? Past : (index % 2 === 0 ? Past2 : Past3)} alt="Director" /> */}
                                                <img src={director.image} alt="Director" />
                                            </div>
                                            <div className="Brooklyn-Simmons-tital">
                                                <span>
                                                    <p>News Director</p>
                                                    <a href="#">{director.status === "current" ? "Current" : "Past"}</a>
                                                </span>
                                                <h2>{director.name}</h2>
                                            </div>
                                        </div>
                                        <button>Send email</button>

                                    </div>
                            }

                        </div>
                    ))}
                </div>

            </div>

        </>

    )




}



export default Dirctors