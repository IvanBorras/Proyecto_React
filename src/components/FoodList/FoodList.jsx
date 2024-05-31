import React, { useEffect, useState } from 'react';
import getDataApi from '../../services/api';

function FoodList({dataInfo}) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getDataApi()
      .then(dataInfo => {
        if (Array.isArray(dataInfo) && dataInfo.length > 0) {
          setMenu(dataInfo);
        } else {
          console.error('No se encontró el menú en los datos recibidos.');
        }
      })
      .catch(error => {
        console.error('Error al obtener datos del menú:', error);
      });
  }, []);


  return (
    <div>
      <h2>Menú Semanal</h2>
      {menu.map(dayMenu => (
        <div key={dayMenu.day}>
          <h3>{dayMenu.day}</h3>
          <ul>
            {dayMenu.meals.map(meal => (
              <li key={meal.id}>
                <h4>{meal.name}</h4>
                <img src={meal.image} alt={meal.name} />
                <p>{meal.description}</p>
                <p>Tipo: {meal.type}</p>
                {meal.taste && <p>Sabor: {meal.taste}</p>}
                <p>Ingredientes: {meal.ingredients.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
