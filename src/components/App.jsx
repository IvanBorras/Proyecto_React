import React, { useEffect, useState } from "react";
import getDataApi from "../services/api";
import FoodList from "./FoodList/FoodList";
import AddMenu from "./FoodList/AddMenu";
// import DeleteMenu from "./FoodList/DeleteMenu";
import FilterByTaste from "./Filters/FilterByTaste";
import FilterByType from "./Filters/FilterByType";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import AuthRoute from "./AuthRoute/AuthRoute";
import Register from "./Register/Register";


function App() {
  const [user, setUser] = useState(null);
  const [dataInfo, setDataInfo] = useState([]);
  const [menu, setMenus] = useState([]);
  const [taste, setTaste] = useState('all');
  const [type, setType] = useState('all');
  const [nav, setNav] = useState('');

  useEffect(() => {
    getDataApi()
      .then(data => {
        setDataInfo(data.dataInfo);
      })
      .catch(error => {
        console.error('Error al obtener datos del menú:', error);
      });
  }, []);

  const getTaste = () => {
    const uniqueTastes = [...new Set(menu.map(recipe => recipe.taste))];
    return uniqueTastes;
  };

  const filterFood = menu.filter((recipe) => {
    if (taste === 'all') {
      return true;
    } else {
      return recipe.taste === taste;
    }
  });

  const getType = () => {
    const allTypeStrings = menu.map((recipe) => JSON.stringify(recipe.type));
    const uniqueTypeStrings = [...new Set(allTypeStrings)];
    const uniqueTypes = uniqueTypeStrings.map((typeString) => JSON.parse(typeString));
    return uniqueTypes;
  };

  const filterTypes = menu.filter((recipe) => {
    if (type === 'all') {
      return true;
    } else {
      return recipe.type === type;
    }
  });

  return (
    <div>
      {!user && (
        <div>
          <NavBar setNav={setNav} />
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      )}
      {user && (
        <Routes>
          <Route path="/food" element={
            <AuthRoute user={user} component={
              <>
                <FilterByTaste allTaste={getTaste()} setTaste={setTaste} />
                <FilterByType allType={getType()} setType={setType} />
                <FoodList dataInfo={dataInfo} setMenus={setMenus} />
                <AddMenu />
                {/* <DeleteMenu /> */}
              </>
            } />
          } />
          <Route path="*" element={<Navigate to="/food" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
