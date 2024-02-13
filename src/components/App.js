import React, { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Menu from "./Menu";
import NewMenuItem from "./NewMenuItem";

import '../App.css';

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch menu items when the component mounts
    fetch("http://localhost:3001/foods")
      .then((resp) => resp.json())
      .then((data) => setFoods(data));
  }, []);

  const handleAddNewItem = (newItem) => {
    // Make a POST request to add the new menu item to the server
    fetch("http://localhost:3001/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((addedItem) => {
        // Update the state with the new menu item
        setFoods((prevFoods) => [...prevFoods, addedItem]);
      })
      .catch((error) => console.error("Error adding new menu item:", error));
  };

  return (
      <div className="App">
        <Header />
        <Menu foods = {foods} />
        <NewMenuItem onAddNewItem={handleAddNewItem} />
      </div>
  );
}

export default App;
