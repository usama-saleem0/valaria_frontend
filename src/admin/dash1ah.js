import {React, useState} from "react";


import kabc from "../img/karc-abc-logo.png";
import men from "../img/Past-1.png";
import logo from "../img/latest-rating-user-icon.png";
import Reportersdall from "../reportersd/Reportersdall";
import Reportersdalladmin from "../reportersd/Reportersdalladmin";

const Dash1ah = ()=>{
  const cards = Array.from({ length: 2 }); // Create an array with 8 elements
  const [sortOrder, setSortOrder] = useState("newest");


  const sortratings = (rating) => {
    return rating.sort((a, b) => {
      const dateA = new Date(a.createdAt);  // Use createdAt for sorting
      const dateB = new Date(b.createdAt);
      console.log('BAsit' ,sortOrder )
  
      if (sortOrder === 'Newest') {
        return dateB - dateA;  
      } else {
        return dateA - dateB;  // Sort by oldest first
      }
    });
  };


return(

    <>    
    <section className="ah1">

        <div className="ahd-box-1">
            <h2>New Ratings Approval Request</h2>
            <p>All requests will be automatically approved if you don't take action within 10 days</p>

            <div className="ahd-box-btn">

{/* 
                <div className="ahd-box-btn-card">
                    <button>Approve all</button>
                    <button className="Deny">Deny all</button>
                </div> */}


                {/* <div className="filter-box">
                      <p>Sort:</p>
                      <select name="" id="">
                        <option value="">Newest</option>
                        <option value="">Newest</option>
                        <option value="">Newest</option>
                      </select>
                </div> */}

                
            <div class="filter-box">
              <p>Sort:</p>
              <select
                name="sortOrder"
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>


            </div>


        </div>


        <div className="ahd-box-2">
        {/* {cards.map((_, index) => (
          
        <div className="ahd-card"  key={index}>

        <div className="ahd-card-head">
            <p><span>Username001</span> submitted this <span>news director..</span></p>

            <span className="approved-s"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M16.9647 8.36608C16.8831 9.75797 16.5222 11.0081 15.8864 12.0821C15.2463 13.1647 14.3184 14.0797 13.137 14.7928C11.8139 15.5919 10.4306 16 9.03439 16C7.89167 16 6.71887 15.7251 5.55037 15.1881C4.4592 14.6854 3.51839 13.9036 2.74941 12.8554C2.47017 12.473 2.52602 12.0048 2.88259 11.7427C3.23915 11.4764 3.70311 11.5623 3.98665 11.936C4.9962 13.2807 6.32794 14.0926 7.93893 14.3418C10.9891 14.8143 13.8888 13.1647 14.9886 10.325C16.1442 7.34364 14.9671 4.01428 12.1919 2.399C9.64442 0.925488 6.23343 1.45819 4.25729 3.65342C3.57423 4.4138 3.08879 5.28159 2.81815 6.24388C3.09309 6.13648 3.40669 6.19662 3.62579 6.41142C3.77614 6.55749 3.85777 6.74651 3.85777 6.94842C3.85777 7.15892 3.77185 7.36083 3.6129 7.52408C3.26922 7.87205 2.81385 8.32742 2.34559 8.78709C2.16946 8.96322 1.94607 9.04484 1.71838 9.02336C1.49499 9.00188 1.29738 8.8816 1.15991 8.67969C0.893559 8.28876 0.627209 7.88923 0.373748 7.50689C0.292125 7.38231 0.206206 7.25343 0.124583 7.12885C0.094511 7.08589 0.0730312 7.04293 0.0515515 7.00426C0.0429596 6.99138 0.0343676 6.97419 0.0257757 6.96131L0 6.90116V6.51453L0.0300717 6.45868C0.279237 5.98612 0.665873 5.81429 1.0654 5.99901C1.13843 6.03338 1.20287 6.08063 1.25871 6.13219C2.03199 3.15509 3.92221 1.20043 6.87353 0.315463C8.35134 -0.127021 9.93655 -0.101245 11.4573 0.397086C12.9695 0.891121 14.2755 1.79757 15.2378 3.02191C16.4965 4.62001 17.0764 6.42001 16.9647 8.36608ZM9.51984 3.66631C9.51984 3.19375 9.19764 2.85008 8.75086 2.84578H8.74656C8.54036 2.84578 8.35134 2.92311 8.20957 3.06058C8.05921 3.21094 7.97329 3.42144 7.97329 3.65772C7.97329 4.25056 7.97329 4.8434 7.97329 5.43624V5.5866C7.97329 6.45868 7.97329 7.33505 7.97329 8.20713C7.97329 8.50785 8.09788 8.75272 8.34274 8.93315C8.77234 9.24675 9.20194 9.57325 9.62294 9.88685C9.77759 10.0028 9.93654 10.1231 10.0912 10.2391C10.2244 10.3379 10.3575 10.441 10.495 10.5398C10.7786 10.7503 11.0578 10.9651 11.3413 11.1713C11.4874 11.283 11.6463 11.3346 11.8096 11.3346C11.9471 11.3346 12.0845 11.2959 12.2134 11.2143C12.484 11.0511 12.6172 10.7632 12.57 10.4367C12.5313 10.1661 12.3552 9.99855 12.2005 9.88256C11.874 9.63769 11.5475 9.39282 11.2253 9.14365L11.1136 9.06203C10.5852 8.6625 10.0611 8.26728 9.53272 7.86775C9.52413 7.85916 9.51984 7.85486 9.51554 7.85486C9.51554 7.85057 9.51554 7.84627 9.51554 7.83768C9.51984 7.31787 9.51984 6.78517 9.51984 6.27395C9.51984 6.10211 9.51984 5.93028 9.51984 5.75414V5.11834C9.51984 4.63719 9.51984 4.15175 9.51984 3.66631Z" fill="#828282"/>
</svg><p> automatically approved in 3 days</p></span>
        </div>

        <div className="ahd-card-body">

          <div className="Reporter-dah-box">

          <div className="Reporter-dah-box-dp">
            <div className="dp-imger">
              <img src={logo} alt="" />
            </div>

            <span>
              <h2>Reporter | MMJ (OMB)</h2>
              <p>Job details</p>
            </span>
          </div>  

          <div className="Reporter-dah-box-dp-2"> 
            <p>Rating of</p>
            <img src={kabc} alt="" />
            <h2>KABC</h2>
          </div>  
            
          </div>  

          <div className="Reporter-dah-body-new">
            <div className="Simmons-dah-box">

            <div className="Simmons-dah-dp-site">
            <div className="Simmons-dah-img-site">
              <img src={men} alt="" />
            </div>
            <div className="Simmons-dah-id-site">
              <span><p>News Director</p> <a href="#">Current</a></span>
              <h2>Brooklyn Simmons</h2>
            </div>
            </div>

            <div className="Simmons-dah-tital-site">
              <p>Review of News Director</p>

              <h3>Nice guy, but lacks decisiveness, leadership, and aggressiveness.
              Eu elementum pellentesque nibh molestie. Tempor purus sed pellentesque integer non. Nec sed tortor nec quis tempor diam non turpis. Sed venenatis at montes, leo tellus egestas. Nulla pharetra.</h3>
            </div>

            </div>

            <div className="Simmons-dah-h2">
              <p>While working here, this person experienced</p>
              <h2>Sexual discrimination, Racial discrimination, Sexual harassment, An overall work environment</h2>
            </div>


            <div className="Simmons-dah-h2">
              <p>Additional comments</p>
              <h2>One of the best places you could ever work. Very relaxed environment. </h2>
              <h3>Everyone is the best at what they do. Management is great. No complaints. Eu po complaine llentque nibh... see more</h3>
            </div>


            <div className="Simmons-dah-more-box"> 

            <div className="Simmons-dah-more-card"> 
              <p>Newsroom rating</p>
              <div className="Simmons-dah-more-card">   
              <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
  <rect x="0.148438" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="41.9414" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="83.7363" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="125.529" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="167.324" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2"/>
              </svg> </div>
              <h2>This newsroom is friendly</h2>
            </div>



            <div className="Simmons-dah-more-card"> 
              <p>Coworkers rating</p>
              <div className="Simmons-dah-more-card">   
              <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
  <rect x="0.148438" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="41.9414" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="83.7363" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="125.529" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="167.324" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
              </svg> </div>
              <h2>Super friendly</h2>
            </div>



            <div className="Simmons-dah-more-card"> 
              <p>Would recommend working here?</p>
              <div className="Simmons-dah-more-card">   
              <svg xmlns="http://www.w3.org/2000/svg" width="203" height="14" viewBox="0 0 203 14" fill="none">
  <rect x="0.148438" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="41.9414" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="83.7363" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#89C400"/>
  <rect x="125.529" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2"/>
  <rect x="167.324" y="0.888672" width="34.7061" height="12.9881" rx="6.49406" fill="#F2F2F2"/>
              </svg> </div>
              <h2>I'm not sure</h2>
            </div>

            </div>

            <div className="Simmons-dah-more-btn"> 
              <h2>Tags:</h2>
              <button>Organized</button>
              <button>Positive</button>
              <button>Fun</button>
            </div>


          </div>

          <div className="Reporter-dah-body-new-last"> 
            <button>Approve</button>
            <button className="Deny">Deny</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="27" viewBox="0 0 7 27" fill="none">
  <path d="M6.84201 4.26187C6.84201 6.15127 5.31036 7.68293 3.42096 7.68293C1.53157 7.68293 -9.00229e-05 6.15127 -9.00229e-05 4.26187C-9.00229e-05 2.37248 1.53157 0.84082 3.42096 0.84082C5.31036 0.84082 6.84201 2.37248 6.84201 4.26187Z" fill="#828282"/>
  <path d="M6.84186 13.8408C6.84186 15.7302 5.3102 17.2619 3.42081 17.2619C1.53141 17.2619 -0.000244141 15.7302 -0.000244141 13.8408C-0.000244141 11.9514 1.53141 10.4197 3.42081 10.4197C5.3102 10.4197 6.84186 11.9514 6.84186 13.8408Z" fill="#828282"/>
  <path d="M6.84186 23.4197C6.84186 25.3091 5.3102 26.8408 3.42081 26.8408C1.53141 26.8408 -0.000244141 25.3091 -0.000244141 23.4197C-0.000244141 21.5303 1.53141 19.9987 3.42081 19.9987C5.3102 19.9987 6.84186 21.5303 6.84186 23.4197Z" fill="#828282"/>
</svg>
          </div>


        </div>

        </div>


  ))} */}


      <Reportersdalladmin sortratings={sortratings}/>
        </div>


    </section>

    </>

)

}



export default Dash1ah