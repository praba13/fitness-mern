import { useState, useEffect } from 'react';
import FitnessDetails from '../components/FitnessDetails';
import FitnessForm from '../components/FitnessForm';

const Home = () => {
  const [fitnesss, setFitnesss] = useState(null);

  useEffect(() => {
    const fetchFitness = async () => {
      const response = await fetch('/api/fitness');
      const json = await response.json();
      //console.log('JSON : ' + json);

      if (response.ok) {
        setFitnesss(json);
      }
    };
    fetchFitness();
  }, []);
  //onsole.log(fiteness);
  return (
    <div className='home'>
      <div className='fitnesss'>
        {fitnesss &&
          fitnesss.map((fitness) => (
            <FitnessDetails fitness={fitness} key={fitness._id} />
          ))}
      </div>
      <FitnessForm />
    </div>
  );
};

export default Home;
