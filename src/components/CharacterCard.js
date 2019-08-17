import React from "react";


export default function CharacterCard(character) {
  const Card=props=>{
    console.log('card', props.data.res)
  }
  return(
    <div>
        {props.data.res.map((data)=>(
            <div>
            <p>Name:{data.name}</p>
            <p>Species:{data.species}</p>
            <img>{data.img}</img>
            <p>Origin: {data.origin}</p>
            <p>Status: {data.status}</p>
        </div>
        ))}

    </div>
);
}
