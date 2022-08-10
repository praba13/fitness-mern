import { useState } from 'react';
import { useFitnessContext } from '../hooks/useFitnessContext';

const FitnessForm = () => {
  const { dispatch } = useFitnessContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fiteness = { title, load, reps };

    const response = await fetch('/api/fitness', {
      method: 'POST',
      body: JSON.stringify(fiteness),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle('');
      setLoad('');
      setReps('');
      console.log('new fitness added:', json);
      dispatch({ type: 'CREATE_FITNESS', payload: json });
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Fitness</h3>

      <label>Training Title</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg)</label>
      <input
        type='number'
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Number of Repeats</label>
      <input
        type='number'
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button> Add Fitness</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default FitnessForm;
