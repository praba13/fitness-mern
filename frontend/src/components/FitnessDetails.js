import React from 'react';

const FitnessDetails = ({ fitness }) => {
  return (
    <div className='fitness-details'>
      <h4>{fitness.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {fitness.load}
      </p>
      <p>
        <strong>Number of reps: :</strong>
        {fitness.reps}
      </p>
      <p>{fitness.createdAt}</p>
    </div>
  );
};

export default FitnessDetails;
