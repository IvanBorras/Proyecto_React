import React, { useState } from 'react';
import axios from 'axios';


const AddMenu = () => {
  const initialDays = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
  ];

  const [menu, setMenu] = useState({
    days: initialDays.map(day => ({
      day,
      meals: [
        { name: '', description: '', type: '' },
        { name: '', description: '', type: '' },
        { name: '', description: '', type: '' }
      ]
    }))
  });

  const handleInputChange = (ev, dayIndex, mealIndex) => {
    const { name, value } = ev.target;
    const days = [...menu.days];
    days[dayIndex].meals[mealIndex][name] = value;
    setMenu({ ...menu, days });
  };

  const addMealField = (dayIndex) => {
    const days = [...menu.days];
    if (days[dayIndex].meals.length < 3) {
      days[dayIndex].meals.push({ name: '', description: '', type: '' });
      setMenu({ ...menu, days });
    } else {
      errorMessage('Tienes que añadir 3 por dia.');
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/menus', menu);
      console.log('Menu guardado:', response.data);
      // Aquí puedes añadir lógica adicional, como limpiar el formulario o mostrar una notificación
      setMenu({
        days: initialDays.map(day => ({
          day,
          meals: [
            { name: '', description: '', type: '' },
            { name: '', description: '', type: '' },
            { name: '', description: '', type: '' }
          ]
        }))
      });
    } catch (error) {
      console.error('Error saving menu:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {menu.days.map((day, dayIndex) => (
        <div key={dayIndex}>
          <h3>{day.day}</h3>
          {day.meals.map((meal, mealIndex) => (
            <div key={mealIndex}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={meal.name}
                onChange={(ev) => handleInputChange(ev, dayIndex, mealIndex)}
                required
              />
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={meal.description}
                onChange={(ev) => handleInputChange(ev, dayIndex, mealIndex)}
                required
              />
              <label>Type:</label>
              <input
                type="text"
                name="type"
                value={meal.type}
                onChange={(ev) => handleInputChange(ev, dayIndex, mealIndex)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addMealField(dayIndex)}>Añadir comida</button>
        </div>
      ))}
      <button type="submit">Guardar Menu</button>
    </form>
  );
};

export default AddMenu;
