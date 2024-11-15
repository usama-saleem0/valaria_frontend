import React from "react";
import { useNavigate } from "react-router-dom";

const FindStationLookingFor = () => {
  const navigate = useNavigate();
  const submitstation = () => navigate("/submitstaionform");
  return (
    <>
      <div className="find-station-looking">
        <h4>Can't find Station you're looking for?</h4>
        <p>
          Pellentesque vel tristique ultrices habitasse feugiat nulla tempor
          quam. Et risus commodo natoque pulvinar eu, interdum.{" "}
        </p>
        <a onClick={submitstation} href="#">
          Submit a Station
        </a>
      </div>
    </>
  );
};

export default FindStationLookingFor;
