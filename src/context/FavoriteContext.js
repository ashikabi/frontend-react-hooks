import React, { createContext, useReducer, useEffect } from 'react';
import { favoriteReducer } from '../reducers/favoriteReducer';

export const FavoriteContext = createContext();

const FavoriteContextProvider = (props) => {
  const [favorites, dispatch] = useReducer(favoriteReducer, [], () => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  return (
    <FavoriteContext.Provider value={{ favorites, dispatch }}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
 
export default FavoriteContextProvider;