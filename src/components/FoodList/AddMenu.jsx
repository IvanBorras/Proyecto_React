import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddMenu = () => {
  const initialDays = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
  ];

  const initialMenuState = {
    days: initialDays.map(day => ({
      day,
      meals: [
        { name: '', description: '', type: '' },
        { name: '', description: '', type: '' },
        { name: '', description: '', type: '' }
      ]
    }))
  };

  const [existingMenus, setExistingMenus] = useState([]);
  const [newMenus, setNewMenus] = useState([initialMenuState]);

  useEffect(() => {
    // Obtener los menús existentes desde MockAPI
    const fetchMenus = async () => {
      try {
        const response = await axios.get('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus');
        setExistingMenus(response.data); // Asumiendo que los menús están en el array de respuesta
      } catch (error) {
        console.error('Error al obtener los menús:', error);
      }
    };
    fetchMenus();
  }, []);

  const handleInputChange = (ev, menuIndex, dayIndex, mealIndex) => {
    const { name, value } = ev.target;
    const updatedMenus = [...newMenus];
    updatedMenus[menuIndex].days[dayIndex].meals[mealIndex][name] = value;
    setNewMenus(updatedMenus);
  };

  const addMealField = (menuIndex, dayIndex) => {
    const updatedMenus = [...newMenus];
    updatedMenus[menuIndex].days[dayIndex].meals.push({ name: '', description: '', type: '' });
    setNewMenus(updatedMenus);
  };

  const addNewMenu = () => {
    setNewMenus([...newMenus, initialMenuState]);
  };

  const cancelMenu = (menuIndex) => {
    const updatedMenus = newMenus.filter((_, index) => index !== menuIndex);
    setNewMenus(updatedMenus.length ? updatedMenus : [initialMenuState]);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      // Combina los menús existentes con los nuevos menús antes de enviarlos a MockAPI
      const combinedMenus = [...existingMenus, ...newMenus.map(({ menu }) => menu)];
  
      // Loguear los menús combinados para verificar la estructura
      console.log('Menús combinados:', JSON.stringify(combinedMenus, null, 2));
  
      // Envía los menús combinados a MockAPI
      const response = await axios.post('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus', combinedMenus);
      console.log('Menús guardados correctamente:', response.data);
  
      // Actualiza el estado de los menús existentes después de guardar los nuevos menús
      setExistingMenus(response.data);
  
      // Resetear el formulario después de enviar los datos
      setNewMenus([initialMenuState]);
    } catch (error) {
      console.error('Error al guardar los menús:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>AÑADIR MENÚ</h2>
      {newMenus.map((newMenu, menuIndex) => (
        <div key={menuIndex}>
          <h2>Nuevo Menú {menuIndex + 1}</h2>
          {newMenu.days.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3>{day.day}</h3>
              {day.meals.map((meal, mealIndex) => (
                <div key={mealIndex}>
                  <label>Plato:</label>
                  <input
                    type="text"
                    name="name"
                    value={meal.name}
                    onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
                    required
                  />
                  <label>Descripción:</label>
                  <input
                    type="text"
                    name="description"
                    value={meal.description}
                    onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
                    required
                  />
                  <label>Tipo:</label>
                  <select
                    name="type"
                    value={meal.type}
                    onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
                    required
                  >
                    <option value="">Seleccionar tipo...</option>
                    <option value="Desayuno">Desayuno</option>
                    <option value="Comida">Comida</option>
                    <option value="Cena">Cena</option>
                  </select>
                </div>
              ))}
              <button type="button" onClick={() => addMealField(menuIndex, dayIndex)}>Añadir comida</button>
            </div>
          ))}
          <button type="button" onClick={() => cancelMenu(menuIndex)}>Cancelar Menú</button>
        </div>
      ))}
        <button type="submit">Guardar Menús</button>
      <form onSubmit={handleSubmit}>
      <button type="button" onClick={addNewMenu}>Añadir otro menú</button>
      </form>
    </div>
  );
};

export default AddMenu;
