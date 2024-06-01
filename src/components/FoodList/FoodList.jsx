import React, { useEffect, useState } from 'react';

function FoodList({ dataInfo }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (Array.isArray(dataInfo) && dataInfo.length > 0) {
      setMenu(dataInfo);
      console.log("foodList", dataInfo);
    } else {
      console.error('No se encontró el menú en los datos recibidos.');
    }
  }, [dataInfo]);

  return (
    <div>
      <h2>Menú Semanal</h2>
      {menu.map((meal, index) => (
        <span key={index}>
          <h3>{meal.name}</h3>
          <p>Tipo: {meal.type}</p>
          <ul>
            <li>
              <img src={meal.image} alt={meal.name} />
              <p>{meal.description}</p>
              {meal.taste && <p>Sabor: {meal.taste}</p>}
              <p>Ingredientes: {meal.ingredients.join(', ')}</p>
            </li>
          </ul>
        </span>
      ))}
    </div>
  );
}

export default FoodList;
