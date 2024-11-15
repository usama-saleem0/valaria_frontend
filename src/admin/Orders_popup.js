import React from "react";


import kabc from "../img/karc-abc-logo.png";
import men from "../img/Past-1.png";
import logo from "../img/latest-rating-user-icon.png";

const Orders = ()=>{
 

return(

    <>
    <div className="Orders_popup">
        <div className="main-Orders">
            <div className="Orders-1">
                <h2>Orders #36960</h2>
                <button>Completed</button>
            </div>

            <div className="Orders-2">
                <h2>Billing Details</h2>

                <div className="Orders-2-box">  
                    <div className="Orders-2-card">
                    <span>
                          <h3>Address:</h3>
                          <p>Maria Blough</p>
                          <p>920 Alsace St.</p>
                          <p>Apt. 2</p>
                          <p>Altoona, WI 54720</p>
                          </span>
                    </div>

                    <div className="Orders-2-card">
                        <span>
                            <h3>Email:</h3>
                            <p>customer@mail.com</p>
                        </span>
                        <span>
                            <h3>Phone:</h3>
                            <p>24164023456</p>
                        </span>
                    </div>
                </div>

                <div className="Orders-2-box">  
                    <div className="Orders-2-card Orders-card-2">
                    <span>
                          <h3>Payment via:</h3>
                          <p>Credit card / debit card</p>
                          <a href="#">pi_3MEyDKDXBojfMaJJ0z5G9gRy</a>
                          </span>
                    </div>

             
                </div>
            </div>


            
            <div className="Orders-2">
                <h2>Billing Details</h2>

                <div className="Orders-2-box">  
                    <div className="Orders-2-card">
                    <span>
                          <h3>Address:</h3>
                          <p>Maria Blough</p>
                          <p>920 Alsace St.</p>
                          <p>Apt. 2</p>
                          <p>Altoona, WI 54720</p>
                          </span>
                    </div>

                    <div className="Orders-2-card">
                        <span>
                            <h3>Shipping methode:</h3>
                            <p>Flat Rate</p>
                            <p>(Estimated delivery: Dec 23⁠–26)</p>
                        </span>
                 
                    </div>
                </div>

        
            </div>


            <div className="Orders-3">
                <div className="Orders-3-head">
                    <span className="Orders-2-li-1"> <h2> Product </h2> </span>
                    <span className="Orders-2-li-2"><h2> Quantity </h2> </span>
                    <span className="Orders-2-li-2"><h2> Tax </h2> </span>
                    <span className="Orders-2-li-2"><h2> Total </h2> </span>
                </div>

                <div className="Orders-3-body">
                <div className="Orders-3-body-list">
                <span className="Orders-2-li-1"> <p> Yoda Best Anchor Mug with Color Inside - Red 604A7BF2CADCF_Red  </p>
                <h4><span>Color</span>:  Red</h4>
                </span>
                    <span className="Orders-2-li-2"><p> 1 </p></span>
                    <span className="Orders-2-li-2"><p> $0.69  </p></span>
                    <span className="Orders-2-li-2"><p> $12.50  </p></span>
                    </div>
                </div>
            </div>

            <div className="Orders-4">
                <button>Edit</button>
            </div>
        </div>
    </div>
    </>

)

}



export default Orders