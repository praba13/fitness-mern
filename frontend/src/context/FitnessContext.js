import { createContext, useReducer } from 'react';

export const FitnessContext = createContext();

export const fitnessReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FITNESS':
      return {
        fitness: action.payload
      };
    case 'CREATE_FITNESS':
      return {
        fitness: [action.payload, ...state.fitness]
      };
    case 'DELETE_FITNESS':
      return {
        fitness: state.fitness.filter((w) => w._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export const FitnessContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fitnessReducer, {
    fitness: null
  });

  return (
    <FitnessContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FitnessContext.Provider>
  );
};
