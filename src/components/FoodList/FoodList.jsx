import React, { useEffect, useState } from 'react';
import getDataApi from '../../services/api';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getDataApi().then(data => setFoods(data));
  }, []);

  if (foods.length === 0) {
    return <div>No hay recetas disponibles.</div>;
  }

  return (
    <div>
      <h2>Lista de Menus</h2>
      <ul>
        {foods.map(food => (
          <li key={food.name}>
            <h3>{food.name}</h3>
            <img src={food.image} alt={food.name} />
            <p>{food.description}</p>
            <p>Sabor: {food.taste}</p>
            <p>Ingredientes: {food.ingredients}</p>
            <p>Tipo: {food.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;




