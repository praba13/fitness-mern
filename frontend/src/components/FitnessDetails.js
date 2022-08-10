import React from 'react';
import { useFitnessContext } from '../hooks/useFitnessContext';

const FitnessDetails = ({ fit }) => {
  const { dispatch } = useFitnessContext();
  const handleClick = async () => {
    const response = await fetch('/api/fitness/' + fit._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_FITNESS', payload: json });
    }
  };

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
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default FitnessDetails;
