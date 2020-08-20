import React,{ useState, useEffect, useContext} from "react";
import { CharacterContext } from "../../context/CharacterContext"
import { ComicContext } from "../../context/ComicContext"
import { SerieContext } from "../../context/SerieContext"
import CustomCard from "../customCard/CustomCard";

const _showList= (characters) =>{
  let result = [];
  let newCharacters = []
  const MAX_COLS = 4;
  let col = 0;
  let control = 0;
  
  for(let i=0; i < characters.length; i++){
    if(control < MAX_COLS){
      newCharacters.push({
        col,
        character: characters[i]
      });
    }else{
      newCharacters.push({
        col,
        character: characters[i]
      });
      col++;
    }
      

    if(control == MAX_COLS)
      control = 0;
    else
      control++;
  }
  
  console.log(newCharacters);

  for(let j=0 ; j < MAX_COLS; j++){
    result.push(
      <div style={{display:"flex", flex:1, flexDirection: "column"}}>
        {
          newCharacters
                        .filter((item) => item.col == j)
                        .map((item) => <CustomCard item={item.character} />)
        }
      </div>
    );
  }

  return result
}

const CardList = () => {
  
  let { characters } = useContext(CharacterContext);
  let { comics } = useContext(ComicContext);
  let { series } = useContext(SerieContext);
  characters = characters[0];
  comics = comics[0];
  series = series[0];  

  console.log(`comics : ${JSON.stringify(comics)}`)

  return (
    <div style={{marginTop: "100px", padding: "50px", display:"flex" , flex:1, flexDirection:"row"}}>
      {
        characters && characters.length? 
           _showList(characters)
          :null
      }
      {
        comics && comics.length>0? 
          <p>Currently you have {comics.length} Comics...</p>
          :null
      }
      {
        series && series.length>0? 
          <p>Currently you have {series.length} Series...</p>
          :null
      }
    </div>
  );
}
 
export default CardList;