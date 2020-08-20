import React, { createContext, useReducer, useEffect } from 'react';
import { autoCompleteReducer } from '../reducers/autoCompleteReducer';

export const AutoCompleteContext = createContext();

const AutoCompleteProvider = (props) =>{
  const [autoComplete, dispatch] = useReducer(autoCompleteReducer,[],()=>{
    const localData = localStorage.getItem('autoComplete');
    return localData ? JSON.parse(localData) : [];
  }); 

  useEffect(() => {
    localStorage.setItem('autoComplete', JSON.stringify(autoComplete));
  },[autoComplete]);

  return (
    <AutoCompleteContext.Provider value={{ autoComplete, dispatch }}>
      {props.children}
    </AutoCompleteContext.Provider>
  );

}

export default AutoCompleteProvider;