import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
// import App from "../App";
// import CharacterList from "./CharacterList";

// TODO: Add missing tabs below
export default function TabNav() {
  return(
    <div>
        <NavLink to='/' activeClassName="home">Home</NavLink>
        <NavLink to='/character' activeClassName="character">Characters</NavLink>
        <NavLink to='/location' activeClassName="location">Location</NavLink>
        <NavLink to='/episode' activeClassName="episodes">Episodes</NavLink>
    </div>
  ) 

};
