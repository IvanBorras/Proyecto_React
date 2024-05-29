import { Navigate } from "react-router-dom"

function AuthRoute({user, component}) { 
    //info del usuario + componente que quiero renderizar cuando el user tiene la sesion iniciada
    //user --> null cuando no se haya iniciado sesion
    //user --> cuando haya hecho login
    if(!user) 
      return  <Navigate to="/login" />;
    if(user)
        return component;
}

export default AuthRoute;
