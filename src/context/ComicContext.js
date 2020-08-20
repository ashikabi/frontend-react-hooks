import React, { createContext, useReducer, useEffect } from 'react';
import { comicReducer } from '../reducers/comicReducer';

export const ComicContext = createContext();

const ComicContextProvider = (props) =>{
  const [comics, dispatch] = useReducer(comicReducer,[]); 

  return (
    <ComicContext.Provider value={{ comics, dispatch }}>
      {props.children}
    </ComicContext.Provider>
  );
}

export default ComicContextProvider;