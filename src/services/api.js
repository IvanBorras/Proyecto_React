const getDataApi = () => {
  return fetch('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/menus')
    .then(response => {
      if (!response.ok) {
        throw new Error('La API no responde');
      }
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) {
        throw new Error('Los datos no son un array');
      }

      console.log("api (data)", data);

      const dataInfo = [];

      // Iterar sobre los menús para extraer la información deseada
      data.forEach(menu => {
        // Iterar sobre los días dentro de cada menú
        menu.menu.forEach(day => {
          // Crear un objeto con la información deseada de cada comida
          const dayMenu = {
            day: day.day,
            meals: []
          };
          // Iterar sobre las comidas dentro de cada día
          day.meals.forEach(meal => {
            const mealInfo = {
              id: meal.id,
              name: meal.name,
              image: meal.image,
              description: meal.description,
              ingredients: meal.ingredients,
              type: meal.type
            };
            // Agregar la comida al arreglo de comidas del día
            dayMenu.meals.push(mealInfo);
          });
          // Agregar el objeto del día al arreglo dataInfo
          dataInfo.push(dayMenu);
        });
      });

      console.log('Menus mapeados(dataInfo)', dataInfo);
      return { dataInfo };
    })
    .catch(error => {
      console.error('Error al obtener datos del menú:', error);
    });
};

export default getDataApi;
