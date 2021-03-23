import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(props) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={props.plants}/>
    </main>
  );
}

export default PlantPage;
