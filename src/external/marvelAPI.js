import axios from 'axios'
import md5 from 'md5'

const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
const hash = md5(`1${privateKey}${publicKey}`)
const baseUrl = "https://gateway.marvel.com/v1/public";

const getRequest = async(url) =>{
  let options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try{
    let response = await axios.get(url, options);
    console.log(`..................[[ ${url} ]]..........................`);
    console.log(response.data.data.results);
    console.log("............................................");
    return response.data.data.results;
  }catch(e){
    console.error(e.message);
    return null;
  }
}
/*
play with the offset for pagination and limit for items by page
*/
const getCharactersByName = async(searchKey) =>{
  const url = `${baseUrl}/characters?nameStartsWith=${searchKey}&ts=1&apikey=${publicKey}&hash=${hash}`;
  const response = await getRequest(url);
  return response;
};

const getComicsByName = async(searchKey) =>{
  const url = `${baseUrl}/comics?titleStartsWith=${searchKey}&ts=1&apikey=${publicKey}&hash=${hash}`;
  const response = await getRequest(url);
  return response;
};

const getSeriesByName = async(searchKey) =>{
  const url = `${baseUrl}/series?titleStartsWith=${searchKey}&ts=1&apikey=${publicKey}&hash=${hash}`;
  const response = await getRequest(url);
  return response;
};

const getCharacters = async() =>{
  const url = `${baseUrl}/characters?ts=1&apikey=${publicKey}&hash=${hash}`;
  const response = await getRequest(url);
  return response;
};

const getComics = async() =>{
  const url = `${baseUrl}/comics?ts=1&apikey=${publicKey}&hash=${hash}`;
  const response = await getRequest(url);
  return response;
};

const getSeries = async() =>{
  const url = `${baseUrl}/series?ts=1&apikey=${publicKey}&hash=${hash}`;
  const response = await getRequest(url);
  return response;
};

export default { getCharactersByName,
                 getComicsByName,
                 getSeriesByName,
                 getCharacters,
                 getComics,
                 getSeries   
               }