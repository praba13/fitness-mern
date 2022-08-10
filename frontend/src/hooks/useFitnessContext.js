import { FitnessContext } from '../context/FitnessContext';
import { useContext } from 'react';

export const useFitnessContext = () => {
  const context = useContext(FitnessContext);

  if (!context) {
    throw Error('use useFitenssContext inside an FitnessContextProvider');
  }

  return context;
};
