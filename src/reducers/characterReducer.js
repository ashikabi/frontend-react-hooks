
export const characterReducer = (state, action) => {
  switch(action.type){
    case 'GET_CHARACTER': 
      return state.filter((character) => character.name.includes(action.searchKey));
    case 'SET_CHARACTERS':
      return [...state, action.characterList];
    default:
        return state;
  }
};