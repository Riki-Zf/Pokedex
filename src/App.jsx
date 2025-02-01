import React, { useState } from "react";
import SideNav from "./compenents/SideNav";
import Header from "./compenents/Header";
import PokeCard from "./compenents/PokeCard";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(false);
  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} handleToggleMenu={handleToggleMenu} showSideMenu={showSideMenu} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
};

export default App;
