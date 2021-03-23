import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  let plants = props.plants
  const showAllPlants =
  plants.map((plant) => (
    <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} />
  ))
  return (
    <ul className="cards">
      {showAllPlants}
    </ul>
  );
}

export default PlantList;
