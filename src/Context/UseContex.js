import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/Reduce";

export const TravelContex = createContext({});

const TravelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    data: state.data,
    content: state.content,
    handleClick: (index) => {
      dispatch({ type: "CLICK", payload: index });
    },
    handleNext: (next) =>{
      dispatch({type:"NEXT_BTN",payloas:next})
    },
    handlePrev: (prev) =>{
      dispatch({type:"PREV_BTN",payload:prev})
    },
    updateRight:(right) => {
      dispatch({type:"UPDATE_RIGHT",payload:right})
    } 
  };
  return (
    <TravelContex.Provider value={value}>{children}</TravelContex.Provider>
  );
};
export default TravelProvider;
