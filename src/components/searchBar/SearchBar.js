import React,{ useState, useEffect, useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import useStyles from "./style"
import marvelAPI from "../../external/marvelAPI"

import { CharacterContext } from "../../context/CharacterContext"
import { ComicContext } from "../../context/ComicContext"
import { SerieContext } from "../../context/SerieContext"

const SearchBar = () =>{
  const classes = useStyles();
  const [inputText, setInputText] = useState('');
  const [option, setOption] = useState('');
  
  const character = useContext(CharacterContext);
  const comic = useContext(ComicContext);
  const serie = useContext(SerieContext);
  
/*
  useEffect(()=>{
    console.log(inputText);
  },[inputText]);

  useEffect(()=>{
  console.log(option);

},[option]);
*/

const catalogChange = (event) => {
  setOption(event.target.value);
};

const searchItem = async() =>{
  switch(option){
    case 'character':
      const characterList = await marvelAPI.getCharactersByName(inputText)
      //console.log(characterList);
      character.dispatch({ type: 'SET_CHARACTERS', characterList });
      break;
    case 'comics':
      const comicList = await marvelAPI.getComicsByName(inputText)
      //console.log(comicList);
      comic.dispatch({ type: 'SET_COMICS', comicList });
      break;
    case 'series':
      const serieList = await marvelAPI.getSeriesByName(inputText)
      console.log(serieList);
      serie.dispatch({ type: 'SET_SERIES', serieList });
      break;
    default:
      return;
  }

}

  return (
     <div>
        <AppBar className={classes.appBar}>
        <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Marvel API
            </Typography>
            <div className={classes.search} >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)}/>
            
            </div>
            <Button variant="contained" disabled={option? false:true} onClick={searchItem}>
                Search
              </Button>
              <FormControl component="fieldset">
                <RadioGroup row aria-label="catalog" name="option" value={option} onChange={catalogChange}>
                  <FormControlLabel labelPlacement="top" value="character" control={<Radio />} label="Characters" />
                  <FormControlLabel labelPlacement="top" value="comics" control={<Radio />} label="Comics" />
                  <FormControlLabel labelPlacement="top" value="series" control={<Radio />} label="Series" />
                </RadioGroup>
              </FormControl>
        </Toolbar>
      </AppBar>
     </div>
  );
}

export default SearchBar;