import React, { useState, useEffect } from 'react';
import Header from "./Header";
import PlantPage from "./PlantPage";

const url = "http://localhost:6001/plants"

function App() {
  const [allPlants, setAllPlants] = useState([])

  useEffect(() =>{
    fetch(url)
      .then(r => r.json())
      .then(plantsArray => {setAllPlants(plantsArray)})
  }, [])
 
  return (
    <div className="app">
      <Header />
      <PlantPage plants={allPlants}/>
    </div>
  );
}

export default App;
