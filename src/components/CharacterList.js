import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList({Character}) {
  const [character, setCharacter]=useState({});
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/documentation/#get-all-characters')
    .then(res=>{
      console.log('response data: ',res.data);
      setCharacter=(res.data);
    })
    .catch(error=>{
      console.log('Error', error);
    });
  }, []);

  if (!character){
    return <div>Loading...</div>;
  }
  return (
    <div className='character-list'>
      {character.map(character=>(
        <characterData key={character.id} character={character}/>
      ))}
    </div>
  )
}
