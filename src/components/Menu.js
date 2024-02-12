import React, {useState, useEffect} from "react";


function Menu () {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/foods")
        .then((resp) => resp.json())
        .then((data) => setFoods(data))
    }, []);

    const foodItems = foods.map((food) => (
        <div key={food.id}>
            <h2>{food.name}</h2>
            <img src={food.image} alt={food.name} />
            <p>Price: ${food.price}</p>
        </div>
    ));




    return (
        <main className="menu">
            {foodItems}
        </main>
    );
}
export default Menu
