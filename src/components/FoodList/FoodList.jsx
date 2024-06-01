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
      {menu.map((day, index) => (
        <div key={index}>
          <h3>{day.day}</h3>
          <ul>
            {day.meals.map((meal, mealIndex) => (
              <li key={mealIndex}>
                <h4>{meal.name}</h4>
                <p>Tipo: {meal.type}</p>
                <img src={meal.image} alt={meal.name} />
                <p>{meal.description}</p>
                {meal.taste && <p>Sabor: {meal.taste}</p>}
                <p>Ingredientes: {meal.ingredients.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
  

export default FoodList;
