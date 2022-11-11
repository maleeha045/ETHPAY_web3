import React, { useEffect, useState, useContext} from 'react';


const Apikey = import.meta.env.VITE_GIPHY_API;
const UseFetch = (keyword) => {
  
  const [gifUrl, setGifUrl] = useState("");
  console.log(keyword);
  const getUrl= async()=>{
  try{

 
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${Apikey}&q=${keyword.split(" ").join("")}&limit=1`);
    console.log('response is : ',response);
    const {data} = await response.json();
    setGifUrl(data[0]?.images?.downsized_medium.url);
  }
  catch(error){
    setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");

  }
  }
useEffect(()=>{
  if(keyword) getUrl(); 
},[keyword]);
return gifUrl;
};

export default UseFetch