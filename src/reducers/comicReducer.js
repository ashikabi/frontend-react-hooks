
export const comicReducer = (state, action) => {
  switch(action.type){
    case 'GET_COMIC': 
      return state.filter((comic) => comic.title.includes(action.searchKey));
    case 'SET_COMICS':
      return [...state, action.comicList];
    default:
        return state;
  }
};