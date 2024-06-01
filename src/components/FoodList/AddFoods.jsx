// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddMenu = () => {
//   const initialDays = [
//     'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
//   ];

//   const [existingMenus, setExistingMenus] = useState([]);
//   const [menu, setMenu] = useState([]);
//   const [newMenu, setNewMenu] = useState([{
//     days: initialDays.map(day => ({
//       day,
//       meals: [
//         { name: '', description: '', type: '' },
//         { name: '', description: '', type: '' },
//         { name: '', description: '', type: '' }
//       ]
//     }))
//   }]);

//   useEffect(() => {
//     // Obtener el menú existente desde MockAPI
//     const fetchMenu = async () => {
//       try {
//         const response = await axios.get('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus');
//         setExistingMenus(response.data);
//       } catch (error) {
//         console.error('Error al obtener el menú:', error);
//       }
//     };
//     fetchMenu();
//   }, []);

//   const handleInputChange = (ev, menuIndex, dayIndex, mealIndex) => {
//     const { name, value } = ev.target;
//     const updatedMenu = [...newMenu];
//     updatedMenu[menuIndex].days[dayIndex].meals[mealIndex][name] = value;
//     setNewMenu(updatedMenu);
//   };

//   const addMealField = (menuIndex, dayIndex) => {
//     const updatedMenu = [...newMenu];
//     updatedMenu[menuIndex].days[dayIndex].meals.push({ name: '', description: '', type: '' });
//     setNewMenu(updatedMenu);
//   };

//   const addNewMenu = () => {
//     setNewMenu([
//       ...newMenu,
//       {
//         days: initialDays.map(day => ({
//           day,
//           meals: [
//             { name: '', description: '', type: '' },
//             { name: '', description: '', type: '' },
//             { name: '', description: '', type: '' }
//           ]
//         }))
//       }
//     ]);
//   };

//   const cancelNewMenu = (menuIndex) => {
//     const updatedMenu = [...newMenu];
//     updatedMenu.splice(menuIndex, 1);
//     setNewMenu(updatedMenu);
//   };

//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     try {
//       const combinedMenu = [...menu, ...newMenu];
//       console.log('Combined Menu:', combinedMenu); // Verificar la estructura de los datos
//       const response = await axios.put('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus', { menu: combinedMenu });
//       console.log('Menú actualizado:', response.data);
//       setNewMenu([{
//         days: initialDays.map(day => ({
//           day,
//           meals: [
//             { name: '', description: '', type: '' },
//             { name: '', description: '', type: '' },
//             { name: '', description: '', type: '' }
//           ]
//         }))
//       }]);
//     } catch (error) {
//       console.error('Error al guardar menú:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>AÑADIR MENÚ</h2>
//       {newMenu.map((menu, menuIndex) => (
//         <div key={menuIndex}>
//           <h2>Menú {menuIndex + 1}</h2>
//           {menu.days.map((day, dayIndex) => (
//             <div key={dayIndex}>
//               <h3>{day.day}</h3>
//               {day.meals.map((meal, mealIndex) => (
//                 <div key={mealIndex}>
//                   <label>Plato:</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={meal.name}
//                     onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
//                     required
//                   />
//                   <label>Descripción:</label>
//                   <input
//                     type="text"
//                     name="description"
//                     value={meal.description}
//                     onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
//                     required
//                   />
//                   <label>Tipo:</label>
//                   <select
//                     name="type"
//                     value={meal.type}
//                     onChange={(ev) => handleInputChange(ev, menuIndex, dayIndex, mealIndex)}
//                     required
//                   >
//                     <option value="">Seleccionar tipo...</option>
//                     <option value="Desayuno">Desayuno</option>
//                     <option value="Comida">Comida</option>
//                     <option value="Merienda">Merienda</option>
//                     <option value="Cena">Cena</option>
//                   </select>
//                 </div>
//               ))}
//               <button type="button" onClick={() => addMealField(menuIndex, dayIndex)}>Añadir comida</button>
//             </div>
//           ))}
//           <button type="button" onClick={() => cancelNewMenu(menuIndex)}>Cancelar Menú</button>
//         </div>
//       ))}
//         <button type="submit">Guardar Menú(s)</button>
//       <form onSubmit={handleSubmit}>
//       <button onClick={addNewMenu}>Añadir Menú</button>
//       </form>
//     </div>
//   );
// };

// export default AddMenu;
