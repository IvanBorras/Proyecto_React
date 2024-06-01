// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DeleteMenu = () => {
//   const [menus, setMenus] = useState([]);

//   useEffect(() => {
//     const fetchMenus = async () => {
//       try {
//         const response = await axios.get('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus');
//         setMenus(response.data);
//       } catch (error) {
//         console.error('Error fetching menus:', error);
//       }
//     };

//     fetchMenus();
//   }, []);

//   const handleDeleteMeal = async (menuId, dayIndex, mealIndex) => {
//     try {
//       const updatedMenus = [...menus];
//       updatedMenus.forEach(menu => {
//         if (menu.id === menuId) {
//           menu.days[dayIndex].meals.splice(mealIndex, 1);
//         }
//       });
//       await axios.put(`https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus/${menuId}`, { days: updatedMenus.find(menu => menu.id === menuId).days });
//       setMenus(updatedMenus);
//     } catch (error) {
//       console.error('Error deleting meal:', error);
//     }
//   };


//   const handleDelete = async (menuId) => {
//     try {
//       await axios.delete(`https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/menus/${menuId}`);
//       setMenus(menus.filter(menu => menu.id !== menuId));
//     } catch (error) {
//       console.error('Error deleting menu:', error);
//     }
//   };

//   return (
//     <div>
//         <h2>Menus</h2>
//         <ul>
//             {meals.map(menu => (
//                 <li key={menu.id}>
//                 <h3>Menu ID: {menu.id}</h3>
//                 {menu.days.map(day => (
//                     <div key={day.day}>
//                     <h4>{day.day}</h4>
//                     <ul>
//                         {day.meals.map((meal, index) => (
//                         <li key={index}>
//                             {meal.name} - {meal.description} - {meal.type}
//                             <button onClick={() => handleDeleteMeal(menu.id, menu.days.indexOf(day), index)}>Delete Meal</button>
//                         </li>
//                         ))}
//                     </ul>
//                     </div>
//                 ))}
//                 <button onClick={() => handleDelete(menu.id)}>Delete Menu</button>
//                 </li>
//             ))}
//         </ul>
//   </div>
// );
// };

// export default DeleteMenu;
