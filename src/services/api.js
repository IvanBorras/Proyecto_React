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

      console.log("api (data)", data)
      

      

      const dataInfo = [];
      // Crear un objeto con la información deseada de cada comida
      data.forEach(day => {
        // Iterar sobre los menús de cada día
        day.menu.forEach(menuItem => {
            // Iterar sobre las comidas de cada menú
            menuItem.meals.forEach(meal => {
                // Crear un objeto con la información deseada de cada comida
                const mealInfo = {
                    name: meal.name,
                    image: meal.image,
                    description: meal.description,
                    taste: meal.taste || "", // Asegurarse de manejar el caso en que 'taste' no esté definido
                    ingredients: meal.ingredients,
                    type: meal.type
                };
                // Agregar el objeto al arreglo dataInfo
                dataInfo.push(mealInfo);
            });
        });
    });
      console.log('Menus mapeados(dataInfo)', dataInfo)
      return {dataInfo};
    })
};
    
export default getDataApi;
