import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bars" style={{ width: `${progressPercentage}%` }}>
        {current} of {total}
      </div>
    </div>
  );
};

export default ProgressBar;
