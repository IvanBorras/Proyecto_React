import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddMenu = () => {
  const initialDays = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
  ];

  const initialMenuState = {
    name: '',  // Añadir el campo nombre al estado inicial del menú
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
  const [newMenus, setNewMenus] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const handleMenuNameChange = (ev, menuIndex) => {
    const { value } = ev.target;
    const updatedMenus = [...newMenus];
    updatedMenus[menuIndex].name = value;
    setNewMenus(updatedMenus);
  };

  //agregar inputs para añadir comidas
  const addMealField = (menuIndex, dayIndex) => {
    const updatedMenus = [...newMenus];
    updatedMenus[menuIndex].days[dayIndex].meals.push({ name: '', description: '', type: '' });
    setNewMenus(updatedMenus);
  };

  //agregar formulario para añadir menus
  const addNewMenu = () => {
    setNewMenus([...newMenus, initialMenuState]);
    setIsFormVisible(true);
  };
  
  const deleteMenu = (menuIndex) => {
    const updatedMenus = [...newMenus];
    updatedMenus.splice(menuIndex, 1); // Elimina el menú en el índice menuIndex
    setNewMenus(updatedMenus);
  };


  const cancelMenu = (menuIndex) => {
    const updatedMenus = newMenus.filter((_, index) => index !== menuIndex);
    setNewMenus(updatedMenus.length ? updatedMenus : []);
    setIsFormVisible(updatedMenus.length > 0);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      // Envía cada nuevo menú como un objeto separado a MockAPI
      const promises = newMenus.map(menu => axios.post('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus', menu));
      const responses = await Promise.all(promises);
      
      // Actualiza el estado de los menús existentes después de guardar los nuevos menús
      setExistingMenus([...existingMenus, ...responses.map(response => response.data)]);
      
      // Resetear el formulario después de enviar los datos
      setNewMenus([]);
      console.error('Formulario enviado:');

      setIsFormVisible(false);
    } catch (error) {
      console.error('Error al guardar los menús:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2 className='addmenu  '>AÑADIR MENÚ</h2>
      {newMenus.map((newMenu, menuIndex) => (
        <div key={menuIndex}>
          <h2 className='newmenu'>Nuevo Menú {menuIndex + 1}</h2>
          <label className='menuname'>Nombre del Menú:</label>
          <input className='inputmenuname'
            type="text"
            value={newMenu.name}
            onChange={(ev) => handleMenuNameChange(ev, menuIndex)}
            required
          />
          {newMenu.days.map((day, dayIndex) => (
            <div key={dayIndex}>
              <h3>{day.day}</h3>
              {day.meals.map((meal, mealIndex) => (
                <div key={mealIndex}>
                  <label className='platoname'>Plato:</label>
                  <input className='inputname'
                    type="text"
                    name="name"
                    value={meal.name}
                    onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
                    required
                  />
                  <label className='platoname'>Descripción:</label>
                  <input className='inputname'
                    type="text"
                    name="description"
                    value={meal.description}
                    onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
                    required
                  />
                  <label className='platoname'>Tipo:</label>
                  <select className='selectoption'
                    name="type"
                    value={meal.type}
                    onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
                    required
                  >
                    <option value="">Seleccionar tipo...</option>
                    <option value="Desayuno">Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                    <option value="Comida">Comida</option>
                    <option value="Merienda">Merienda</option>
                    <option value="Cena">Cena</option>
                  </select>
                </div>
              ))}
              <button className='addfood' type="button" onClick={() => addMealField(menuIndex, dayIndex)}>Añadir comida</button>
            </div>
          ))}
          <button className='cancelmenu' type="button" onClick={() => cancelMenu(menuIndex)}>Cancelar Menú</button>
          <button className='deletemenu' type="button" onClick={() => deleteMenu(menuIndex)}>Eliminar Menú</button>
        </div>
      ))}
      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <span><button className='savemenu' type="submit">Guardar Menús</button></span>
        </form>
      )}
      <button className='addothermenu' type="button" onClick={addNewMenu}>Añadir otro menú</button>
    </div>
  );
};

export default AddMenu;
