import React from 'react';
import SearchBar from './components/searchBar/SearchBar'
import CharacterContextProvider from './context/CharacterContext';
import ComicContextProvider from './context/ComicContext';
import SerieContextProvider from './context/SerieContext';
import CardList from './components/cardList/CardList';
import FavoriteContextProvider from './context/FavoriteContext';

function App() {
  return (
    <div className="App">
      <CharacterContextProvider>
        <ComicContextProvider>
          <SerieContextProvider>
            <FavoriteContextProvider>
              <SearchBar />
              <CardList />
            </FavoriteContextProvider>
          </SerieContextProvider>
        </ComicContextProvider>
      </CharacterContextProvider>
    </div>
  );
}

export default App;
