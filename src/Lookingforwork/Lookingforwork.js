import React from "react";
import { useNavigate } from "react-router-dom";

const Lookingforwork = () => {
  const navigate = useNavigate();

  const subscribe = () => {
    navigate("/subscription");
  };
  return (
    <>
      <section class="looking-for-work-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="looking-for-worktxt">
                <h4>Looking for Work?</h4>

                <p>
                  Subscribe to our Job Center for instant access to thousands of
                  job opportunities in media.
                </p>
                <a onClick={subscribe}>Subscribe</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lookingforwork;
