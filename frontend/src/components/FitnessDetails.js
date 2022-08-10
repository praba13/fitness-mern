import React from 'react';
import { useFitnessContext } from '../hooks/useFitnessContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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
      <p>{formatDistanceToNow(new Date(fit.createdAt), { addSuffix: true })}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default FitnessDetails;
