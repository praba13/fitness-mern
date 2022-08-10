import { useEffect } from 'react';
import { useFitnessContext } from '../hooks/useFitnessContext';
import FitnessDetails from '../components/FitnessDetails';
import FitnessForm from '../components/FitnessForm';

const Home = () => {
  const { fitness, dispatch } = useFitnessContext();

  useEffect(() => {
    const fetchFitness = async () => {
      const response = await fetch('/api/fitness');
      const json = await response.json();
      //console.log('JSON : ' + json);

      if (response.ok) {
        dispatch({ type: 'SET_FITNESS', payload: json });
      }
    };
    fetchFitness();
  }, [dispatch]);

  return (
    <div className='home'>
      <div className='fitnesss'>
        {fitness &&
          fitness.map((fit) => <FitnessDetails fit={fit} key={fit._id} />)}
      </div>
      <FitnessForm />
    </div>
  );
};

export default Home;
