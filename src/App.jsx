import React, { useState } from "react";
import SideNav from "./compenents/SideNav";
import Header from "./compenents/Header";
import PokeCard from "./compenents/PokeCard";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <>
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={selectedPokemon} />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
};

export default App;
