import { NavLink } from "react-router-dom";

import './home.css'

export default function Home() {
  return (

    <>
    <nav className="home_container">
        <h2 className="home_title">Sélectionner l'utilisateur souhaité:</h2>
        <NavLink to="user/12">👦 Karl </NavLink> 
        <NavLink to="user/18">👩 Cecilia </NavLink>
    </nav>
    </>

  );
};