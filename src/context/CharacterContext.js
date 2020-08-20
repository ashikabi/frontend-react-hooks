import React, { createContext, useReducer } from 'react';
import { characterReducer } from '../reducers/characterReducer';

export const CharacterContext = createContext();

const CharacterContextProvider = (props) =>{
  const [characters, dispatch] = useReducer(characterReducer,[]);

  return (
    <CharacterContext.Provider value={{ characters, dispatch }}>
      {props.children}
    </CharacterContext.Provider>
  );

}

export default CharacterContextProvider;