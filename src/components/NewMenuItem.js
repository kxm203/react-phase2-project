import React, { useState } from "react";
import NavBar from "./NavBar"

function NewMenuItem({ onAddNewItem }) {
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddNewItem(newItem);
    // Clear the form fields after submission
    setNewItem({ name: "", image: "", price: 0 });
  };

  return (
    <div className="new-menu-item">
      <NavBar />
      <h2>Add New Menu Item</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={newItem.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default NewMenuItem;
