import React from 'react';

const FitnessDetails = ({ fit }) => {
  return (
    <div className='fitness-details'>
      <h4>{fit.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {fit.load}
      </p>
      <p>
        <strong>Number of reps: :</strong>
        {fit.reps}
      </p>
      <p>{fit.createdAt}</p>
    </div>
  );
};

export default FitnessDetails;
