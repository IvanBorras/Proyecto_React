const getDataApi = () => {
    return fetch('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/foods')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }

        // Objeto para almacenar los menús organizados por días
        const menusByDay = {
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
          Sunday: []
        };

        // Iterar sobre los datos y agruparlos por días
      data.forEach(item => {
        // Verificar si el día existe en los datos y agregar la comida correspondiente
        if (item.day && menusByDay[item.day]) {
          menusByDay[item.day].push({
            name: item.name,
            description: item.description,
            type: item.type
          });
        }
      });

    //    // Crear una matriz de menús con los datos organizados
    //    const menus = [{
    //     id: '1', // Puedes asignar un ID único si es necesario
    //     days: Object.entries(menusByDay).map(([day, meals]) => ({
    //       day,
    //       meals
    //     }))
    //   }];

    //   return menus;
    // })
    // .catch(error => {
    //   console.error('Fetch error:', error);
    //   return [];
    // });
     const dataInfo = data.map(item => ({
              name: item.name,
              image: item.image,
              description: item.description,
              taste: item.taste,
              ingredients: item.ingredients,
              type: item.type,
            }));
            return dataInfo;
          })
          .catch(error => {
            console.error('Fetch error:', error);
            return [];
          });
};

  export default getDataApi;
  
















// const getDataApi = () => {
//     return fetch ('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/foods')
//     .then(response => response.json())
//     .then((data) => {
//         const dataInfo = data.map((item) => {
//             return {
//                 name: item.name,
//                 image: item.image,
//                 description: item.description,
//                 taste: item.taste,
//                 ingredients: item.ingredients,
//                 type: item.type,
//               };
//         });
//         return dataInfo;
//     });
// };

// export default getDataApi;
