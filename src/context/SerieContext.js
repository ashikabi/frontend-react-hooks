import React, { createContext, useReducer, useEffect } from 'react';
import { serieReducer } from '../reducers/serieReducer';

export const SerieContext = createContext();

const SerieContextProvider = (props) =>{
  const [series, dispatch] = useReducer(serieReducer,[]);
  
  return (
    <SerieContext.Provider value={{ series, dispatch }}>
      {props.children}
    </SerieContext.Provider>
  );
}

export default SerieContextProvider;