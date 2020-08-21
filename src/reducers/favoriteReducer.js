
export const favoriteReducer = (state, action) => {
  switch(action.type){
    case 'GET_FAVORITE': 
      return state.filter((item) => item.name === action.searchKey || item.title === action.searchKey);
    case 'GET_FAVORITES': 
      return state;
    case 'REMOVE_FAVORITE':
      return state.filter((item) => item.id !== action.id);
    case 'SET_FAVORITE':
      return [...state, action.favoriteItem];
    default:
        return state;
  }
};