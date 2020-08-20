export const autoCompleteReducer = (state, action) => {
  switch(action.type){
    case 'GET_SUGGESTION': 
      return state.filter((word) => word.startsWith(action.searchKey));
    case 'SET_SUGGESTION':
      return [...state, action.searchKey];
    default:
        return state;
  }
};