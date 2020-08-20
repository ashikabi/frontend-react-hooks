
export const serieReducer = (state, action) => {
  switch(action.type){
    case 'GET_SERIE': 
      return state.filter((serie) => serie.title.includes(action.searchKey));
    case 'SET_SERIES':
      return [...state, action.serieList];
    default:
        return state;
  }
};