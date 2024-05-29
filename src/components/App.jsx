import React, { useEffect, useState } from "react";
import getDataApi from "../services/api";
import FoodList from "./FoodList/FoodList";
import AddMenu from "./FoodList/AddMenu"
import DeleteMenu from "./FoodList/DeleteMenu"
import FilterByTaste from "./Filters/FilterByTaste";
import FilterByType from "./Filters/FilterByType";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Register from "./Register/Register";
// import FilterByIngredients from "./Filters/FilterByIngredients";


function App() {

  const [user, setUser] = useState(null);

  const [food, setFood] = useState([]); // Nuestro array de recetas PRINCIPAL - LOS DATOS DE LA API
  const [taste, setTaste] = useState('all'); // String de sabores (dulce/salado)
  const [type, setType] = useState('all'); // String de tipos de comida (almuerzo, snack, desayuno, cena)
  const [nav, setNav] = useState(''); //para que aparezca el nav
  // const [ingredients, setIngredients] = useState(''); //string de los ingredientes sueltos
  // const [filteredRecipes, setFilteredRecipes] = useState([])//array de las nuevas recetas que se muestren filtradas por ingredientes 

  // Ejecuta 1 sola vez cuando cargue la página
  useEffect(() => {
    // Pido los datos de la API
    getDataApi().then((dataInfo) => {
      setFood(dataInfo);
    });
  }, []);

  
  // Función para obtener los sabores únicos
  const getTaste = () => {
    const uniqueTastes = [...new Set(food.map(recipe => recipe.taste))];
    return uniqueTastes;
  };
  // Filtrar la comida según el sabor seleccionado
  const filterFood = food.filter((recipe) => {
    if (taste === 'all') {
      return true;
    } else {
      return recipe.taste === taste;
    }
  });

  // Función para obtener los tipos de comida únicos
  const getType = () => {
    const allTypeStrings = food.map((recipe) => JSON.stringify(recipe.type));
    const uniqueTypeStrings = [...new Set(allTypeStrings)];
    const uniqueTypes = uniqueTypeStrings.map((typeString) => JSON.parse(typeString));
    return uniqueTypes;
  };

  // Filtrar la comida según el tipo seleccionado
  const filterTypes = food.filter((recipe) => {
    if (type === 'all') {
      return true;
    } else {
      return recipe.type === type;
    }
  });

  // const filterByIngredients = () => {
    
  //   console.log('Nuestras recetas filtradas', ingredients);
  // };

  // const handleChangeIngredients = (value) => {
  //   setIngredients(value);
  // };


  return (
    <div>
       {nav !== '/food' && <NavBar setNav={setNav}/>}

      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/food" element={<FoodList />} />
      

        <Route path="/food" element={
          <AuthRoute user={user} component={
            <>
              <FilterByTaste allTaste={getTaste()} setTaste={setTaste} />
              <FilterByType allType={getType()} setType={setType} />
                {/* <FilterByIngredients ingredients={setIngredients}/> */}
              <FoodList food={filterFood} />
              <Route path="/add-menu" element={<AuthRoute user={user} component={<AddMenu />} />} />
              <Route path="/delete-menu" element={<AuthRoute user={user} component={<DeleteMenu />} />} />
              {/* <Route path="*" element={user ? <Navigate to="/food" /> : <Navigate to="/login" />} /> */}       {/* Ruta comodín para manejar rutas no definidas */}

            </>
          } />
          } />
         
        <Route path="*" element={user ? <Navigate to="/food" /> : <Navigate to="/login" />} />

      </Routes>
    </div>
  );
}

export default App;
